import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ViewHelper } from 'three/addons/helpers/ViewHelper.js';
import * as CANNON from 'cannon-es';
import CannonDebugger from 'cannon-es-debugger';

export function initModelViewer() {
  const container = document.querySelector('.model-viewer') as HTMLElement;

  if (!container) return;

  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let controls: OrbitControls;
  let viewHelper: ViewHelper;
  let world: CANNON.World;
  let cannonDebugger: any;

  // Physics bodies and meshes mapping
  const physicsBodies: Array<{ mesh: THREE.Mesh; body: CANNON.Body }> = [];
  let groundBody: CANNON.Body;

  // Camera shake tracking
  let lastCameraPosition = new THREE.Vector3();
  let cameraVelocity = new THREE.Vector3();
  const initCameraPosition = [3, 0, 0] as [number, number, number];

  // Get props from data attributes
  const modelPath = container.dataset.modelPath || '';
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
    // Initialize Cannon.js physics world
    world = new CANNON.World({
      gravity: new CANNON.Vec3(0, -9.82, 0), // Earth gravity
    });
    world.broadphase = new CANNON.NaiveBroadphase();
    (world.solver as CANNON.GSSolver).iterations = 10;
    world.defaultContactMaterial.friction = 0.3;
    world.defaultContactMaterial.restitution = 0.1; // No bouncing

    // Create ground physics body
    const groundShape = new CANNON.Plane();
    groundBody = new CANNON.Body({
      mass: 0, // Static body
      shape: groundShape,
    });
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    world.addBody(groundBody);

    // Create wall
    const wallShape1 = new CANNON.Box(new CANNON.Vec3(0.1, 50, 10));
    const wallShape2 = new CANNON.Box(new CANNON.Vec3(10, 50, 0.1));
    const wallBody = new CANNON.Body({ mass: 0 });
    wallBody.addShape(wallShape1, new CANNON.Vec3(1, 0, 0));
    wallBody.addShape(wallShape1, new CANNON.Vec3(-1, 0, 0));
    wallBody.addShape(wallShape2, new CANNON.Vec3(0, 0, 4));
    wallBody.addShape(wallShape2, new CANNON.Vec3(0, 0, -4));
    world.addBody(wallBody);

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
    scene.fog = new THREE.Fog(0xDDDDDD, 3, 10);

    // Create camera
    camera = new THREE.PerspectiveCamera(
      35,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(...initCameraPosition);

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

    controls.target.set(0, 0.4, 0);
    controls.update();

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
      floor.position.set(-0.8 + i * 0.2, 0.001, 0);
      scene.add(floor);
    }

    // Create slogan
    const sloganGeometry = new THREE.PlaneGeometry(4.5, 1);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshStandardMaterial({ map: texture, transparent: true, side: THREE.DoubleSide });
    const slogan = new THREE.Mesh(sloganGeometry, material);
    slogan.position.set(-1, 0.5, 0);
    slogan.scale.set(0.5, 0.5, 0.5);
    slogan.rotation.y = Math.PI / 2;

    img.onload = () => {
      canvas.width = 4096; // 自定義解析度
      canvas.height = 4096;
      ctx.drawImage(img, 0, 0, 4096, 4096);
      texture.needsUpdate = true; // 通知 Three.js 更新
      scene.add(slogan);
    };
    img.src = 'img/banner/slogan.svg';


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
              mesh.geometry.computeBoundingBox();
              mesh.geometry.center();

              for (const stool of stools) {
                const clone = mesh.clone();
                const material = new THREE.MeshStandardMaterial();
                material.color.setHex(stool.color);
                material.side = THREE.DoubleSide;
                clone.material = material;
                clone.scale.set(stool.scale.x, stool.scale.y, stool.scale.z);

                // Create physics body for the stool using cylinder for better accuracy
                const stoolRadius = 0.24 * stool.scale.x;
                const stoolHeight = 0.48 * stool.scale.y;
                const stoolShape = new CANNON.Cylinder(stoolRadius * 0.78, stoolRadius, stoolHeight, 4);

                // Position the stool with its bottom at the ground (y=0)
                const physicsYPosition = stoolHeight / 2 + 0.01; // Center of mass at half height, just above ground

                const stoolBody = new CANNON.Body({
                  mass: 1,
                  position: new CANNON.Vec3(
                    stool.position.x,
                    physicsYPosition,
                    stool.position.z
                  ),
                  linearDamping: 0.4,
                  angularDamping: 0.8,
                });
                const q = new CANNON.Quaternion();
                q.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), Math.PI / 4);
                stoolBody.addShape(stoolShape, new CANNON.Vec3(), q)
                  ;
                world.addBody(stoolBody);

                // Store the mesh-body pair
                physicsBodies.push({ mesh: clone, body: stoolBody });

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
      // Initialize camera position tracking
      lastCameraPosition.copy(camera.position);

      // Enable physics debugger to see collision shapes
      // cannonDebugger = CannonDebugger(scene, world, {
      //   color: 0x00ff00,
      //   scale: 1.0,
      // });

      animate();
    });
  };

  const timer = new THREE.Timer();
  const fixedTimeStep = 1 / 60; // 60 FPS fixed timestep
  let accumulator = 0;

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();

    // Update physics world with fixed timestep
    timer.update();
    const deltaTime = Math.min(timer.getDelta(), 0.1); // Cap delta to prevent spiral of death
    accumulator += deltaTime;

    // Step physics with fixed timestep
    while (accumulator >= fixedTimeStep) {
      world.step(fixedTimeStep);
      accumulator -= fixedTimeStep;
    }

    // Update physics debugger
    if (cannonDebugger) cannonDebugger.update();

    // Detect camera shake (velocity from OrbitControls movement)
    const currentCameraPosition = camera.position.clone();
    cameraVelocity.copy(currentCameraPosition).sub(lastCameraPosition);
    lastCameraPosition.copy(currentCameraPosition);

    // Calculate shake intensity
    const shakeIntensity = cameraVelocity.length();

    // If camera is shaking (moving fast), apply forces to stools
    if (shakeIntensity > 0.0005) {
      const forceMagnitude = shakeIntensity * 100; // Significantly amplify the effect
      physicsBodies.forEach(({ body }) => {
        // Apply a horizontal force in the direction opposite to camera movement
        const force = new CANNON.Vec3(
          -cameraVelocity.x * forceMagnitude,
          0,
          -cameraVelocity.z * forceMagnitude
        );

        // Apply force at the top of the stool to create wobble
        const worldPoint = new CANNON.Vec3(
          body.position.x,
          body.position.y + 0.15,
          body.position.z
        );

        body.applyForce(force, worldPoint);

        // Also add some torque for more natural wobble
        const torqueStrength = forceMagnitude * 0.2;
        const torque = new CANNON.Vec3(
          (Math.random() - 0.5) * torqueStrength,
          0,
          (Math.random() - 0.5) * torqueStrength
        );
        body.torque.vadd(torque, body.torque);
      });
    }

    // Sync Three.js meshes with Cannon.js bodies
    physicsBodies.forEach(({ mesh, body }) => {
      mesh.position.copy(body.position as any);
      mesh.quaternion.copy(body.quaternion as any);
    });

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

  let initOrientation;
  const vo = document.getElementById('orientation-v') as HTMLElement;
  const handleOrientation = (event: DeviceOrientationEvent) => {
    if (event.alpha !== null) {
      if (!initOrientation) {
        initOrientation = {
          alpha: event.alpha,
          beta: event.beta,
          gamma: event.gamma
        };
      }
      const beta = Math.max(Math.min(event.beta - initOrientation.beta, 90), 1);

      const vRadius = initCameraPosition[0] * Math.cos(beta / 180 * Math.PI);
      // camera.position.y = -1 * initCameraPosition[0] * Math.sin(beta / 180 * Math.PI);
      // camera.position.x = vRadius * Math.cos((event.alpha - initOrientation.alpha) / 180 * Math.PI);
      // camera.position.z = -1 * vRadius * Math.sin((event.alpha - initOrientation.alpha) / 180 * Math.PI);
    }
    vo.innerText = `a ${event.alpha.toFixed(2)}, b ${event.beta.toFixed(2)}, g ${event.gamma.toFixed(2)}`;
  };

  // Initialize
  init();

  // Add event listeners
  window.addEventListener('load', () => {
    try {
      window.addEventListener('resize', handleResize);
      window.addEventListener('deviceorientation', handleOrientation);
    } catch (e) {
      alert(e);
    }
  });
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('deviceorientation', handleOrientation);
    if (renderer) {
      renderer.dispose();
    }
  });
}
