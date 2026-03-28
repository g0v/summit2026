import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ViewHelper } from 'three/addons/helpers/ViewHelper.js';
import * as CANNON from 'cannon-es';
import CannonDebugger from 'cannon-es-debugger';
import type { ThreeMFLoader } from 'three/examples/jsm/Addons.js';

export function initModelViewer() {
  const container = document.querySelector('.model-viewer') as HTMLElement;

  if (!container) return;

  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let controls: OrbitControls;
  let viewHelper: ViewHelper;
  let rolling = {
    mesh: null as THREE.Mesh | null,
    radius: 0.2,
    height: 0.0001,
    speed: 0.05,
  }

  // Get props from data attributes
  const modelPath = container.dataset.modelPath || '';
  const initCamera = JSON.parse(container.dataset.initCamera || '[5, -1, 5]') as [number, number, number];
  const invertOrbit = container.dataset.invertOrbit === 'true';
  const stools = [
    {
      color: 0xC0282A,
      position: new THREE.Vector3(0, 0, 0),
      scale: new THREE.Vector3(1, 1, 1),
    },
    {
      color: 0x2C76B4,
      position: new THREE.Vector3(0, 0, -0.5),
      scale: new THREE.Vector3(1, 0.6, 1),
    },
    {
      color: 0xD2C446,
      position: new THREE.Vector3(0, 0, 0.5),
      scale: new THREE.Vector3(1, 0.6, 1),
    },
    {
      color: 0x40AC3A,
      position: new THREE.Vector3(0, 0, 1),
      scale: new THREE.Vector3(1, 0.8, 1),
    },
    {
      color: 0x40AC3A,
      position: new THREE.Vector3(0, 0, -1),
      scale: new THREE.Vector3(1, 0.8, 1),
    },
  ]

  const init = () => {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xDDDDDD);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(0, 3, 1);
    directionalLight.castShadow = true;

    // Configure shadow properties to fix banding/lines
    directionalLight.shadow.mapSize.width = 4096;
    directionalLight.shadow.mapSize.height = 4096;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 10;
    directionalLight.shadow.camera.left = -2;
    directionalLight.shadow.camera.right = 2;
    directionalLight.shadow.camera.top = 2;
    directionalLight.shadow.camera.bottom = -2;
    directionalLight.shadow.bias = -0.0001;
    directionalLight.shadow.normalBias = 0.02;

    scene.add(ambientLight);
    scene.add(directionalLight);
    scene.fog = new THREE.FogExp2(0xDDDDDD, 0.3);

    // Create camera
    camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(...initCamera);

    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.autoClear = false;
    container.appendChild(renderer.domElement);

    viewHelper = new ViewHelper(camera, renderer.domElement);
    const helperContainer = document.createElement('div');
    helperContainer.style.position = 'absolute';
    helperContainer.style.right = '0';
    helperContainer.style.top = '0';
    helperContainer.style.width = '128px';
    helperContainer.style.height = '128px';
    document.body.appendChild(helperContainer);

    // Add controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.minPolarAngle = Math.PI * 0.1;
    controls.maxPolarAngle = Math.PI * 0.4;

    if (invertOrbit) {
      controls.rotateSpeed = -0.3;
    } else {
      controls.rotateSpeed = 0.5;
    }

    // add floor
    const floorGeometry = new THREE.PlaneGeometry(30, 30);
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0xDDDDDD
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.receiveShadow = true;
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    for (let i = 0; i < 8; i++) {
      const floorGeometry = new THREE.PlaneGeometry(0.1, 30);
      const floorMaterial = new THREE.MeshStandardMaterial({
        color: i % 2 == 0 ? 0xE62327 : 0x3282B8
      });
      const floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.receiveShadow = true;
      floor.rotation.x = -Math.PI / 2;
      floor.position.set(-0.8 + i * 0.2, 0.01, 0);
      scene.add(floor);
    }

    // add rolling
    const geometry = new THREE.CylinderGeometry(rolling.radius, rolling.radius, rolling.height, 32);
    const loader = new THREE.TextureLoader();
    const topTexture = loader.load('models/pangolin-mono.png'); // 正面（圖案）

    const materials = [
      new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0 }),  // 0: 頂面
      new THREE.MeshStandardMaterial({ map: topTexture, transparent: true, side: THREE.DoubleSide }),  // 1: 頂面
      new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0 }),  // 0: 頂面
    ];
    rolling.mesh = new THREE.Mesh(geometry, materials);
    rolling.mesh.receiveShadow = true;
    rolling.mesh.rotation.x = -Math.PI / 2;
    rolling.mesh.rotation.z = -Math.PI / 2;
    rolling.mesh.position.y = 0.2;
    rolling.mesh.position.x = -0.5;
    rolling.mesh.position.z = -10;
    scene.add(rolling.mesh);

    // Load model and scene
    Promise.all([
      new Promise<void>((resolve, reject) => {
        if (modelPath) {
          // Load GLTF model
          new GLTFLoader().load(
            modelPath,
            (gltf) => {
              const mesh = gltf.scene.children[0] as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              for (const stool of stools) {
                const clone = mesh.clone();
                const material = new THREE.MeshStandardMaterial();
                material.color.setHex(stool.color);
                material.side = THREE.DoubleSide;
                clone.material = material;
                clone.position.set(stool.position.x, stool.position.y, stool.position.z);
                clone.scale.set(stool.scale.x, stool.scale.y, stool.scale.z);
                scene.add(clone);
              }
              resolve();
            },
            (xhr) => {
              console.log('model:', (xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            (error) => {
              console.error('An error occurred loading the model:', error);
              reject(error);
            }
          );
        } else {
          resolve();
        }
      })
    ]).then(() => {
      animate();
    });
  };

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    rolling.mesh.rotation.x += rolling.speed;
    rolling.mesh.position.z += rolling.speed * rolling.radius;
    if (rolling.mesh.position.z > 10) {
      rolling.mesh.position.z = -10;
    }
    renderer.clear();
    renderer.render(scene, camera);
    renderer.clearDepth(); // 確保座標軸不被方塊遮擋
    viewHelper.render(renderer);
  };

  const handleResize = () => {
    if (camera && renderer && container) {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
  };
  // Initialize
  init();

  // Add event listeners
  window.addEventListener('resize', handleResize);
  // Cleanup function for when the page unloads
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('resize', handleResize);
    if (renderer) {
      renderer.dispose();
    }
  });
}
