// Falling Stools Animation with Matter.js Physics
(function () {
  const canvas = document.getElementById('overlap-canvas');
  if (!canvas) return;

  // Check if Matter.js is loaded
  if (typeof Matter === 'undefined') {
    console.error('Matter.js is not loaded');
    return;
  }

  const ctx = canvas.getContext('2d');

  // Matter.js modules
  const Engine = Matter.Engine;
  const Render = Matter.Render;
  const Runner = Matter.Runner;
  const Bodies = Matter.Bodies;
  const Composite = Matter.Composite;
  const Events = Matter.Events;

  // Array of all available stool images
  const stoolPaths = [
    'assets/img/stools/stool-nbg-b-s.svg',
    'assets/img/stools/stool-nbg-blk-s.svg',
    'assets/img/stools/stool-nbg-g-s.svg',
    'assets/img/stools/stool-nbg-r-s.svg',
    'assets/img/stools/stool-nbg-y-s.svg'
  ];

  // Load all stool images
  const stoolImages = [];
  let imagesLoaded = 0;

  stoolPaths.forEach((path, index) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      imagesLoaded++;
    };
    stoolImages[index] = img;
  });

  // Create physics engine
  const engine = Engine.create({
    gravity: { x: 0, y: 0.8 }
  });

  const world = engine.world;

  // Track scroll state
  let isScrolling = false;
  let scrollTimeout = null;
  let groundBody = null;

  // Resize canvas to match window size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Remove old boundaries if they exist
    const boundaries = Composite.allBodies(world).filter(body => body.isStatic);
    Composite.remove(world, boundaries);

    // Create boundaries
    groundBody = Bodies.rectangle(
      canvas.width / 2,
      canvas.height + 25,
      canvas.width,
      50,
      { isStatic: true, label: 'ground' }
    );

    const leftWall = Bodies.rectangle(
      -25,
      canvas.height / 2,
      50,
      canvas.height,
      { isStatic: true, label: 'leftWall' }
    );

    const rightWall = Bodies.rectangle(
      canvas.width + 25,
      canvas.height / 2,
      50,
      canvas.height,
      { isStatic: true, label: 'rightWall' }
    );

    Composite.add(world, [groundBody, leftWall, rightWall]);
  }

  // Create a falling stool with physics
  function addStool(color = null) {
    const size = 30 + Math.random() * 40; // Random size between 30-70px
    const x = Math.random() * canvas.width;
    const y = -100; // Start above screen

    // Create circular body for better bouncing
    const stool = Bodies.circle(x, y, size / 2, {
      restitution: 0.6, // Bounciness
      friction: 0.01,
      frictionAir: 0.005,
      density: 0.001,
      angle: Math.random() * Math.PI * 2,
      angularVelocity: (Math.random() - 0.5) * 0.1
    });

    // Store custom data for rendering
    let imageIndex = Math.floor(Math.random() * stoolImages.length);
    if (color && Math.random() > 0.4) {
      imageIndex = stoolImages.findIndex(img => img.src.includes(`nbg-${color}-s`));
    }

    stool.render = {
      imageIndex: imageIndex,
      size: size,
      opacity: 0.4 + Math.random() * 0.4
    };

    Composite.add(world, stool);
  }

  // Custom render function to draw SVG images
  function customRender() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const bodies = Composite.allBodies(world);

    for (let i = 0; i < bodies.length; i++) {
      const body = bodies[i];

      // Skip static bodies (boundaries)
      if (body.isStatic) continue;

      // Draw the stool image
      if (body.render && stoolImages[body.render.imageIndex]) {
        ctx.save();
        ctx.globalAlpha = body.render.opacity;
        ctx.translate(body.position.x, body.position.y);
        ctx.rotate(body.angle);

        const size = body.render.size;
        ctx.drawImage(
          stoolImages[body.render.imageIndex],
          -size / 2,
          -size / 2,
          size,
          size
        );

        ctx.restore();
      }
    }
  }

  // Handle scroll - make all stools fall off bottom
  function handleScroll() {
    if (!isScrolling) {
      isScrolling = true;

      // Apply downward force to all dynamic bodies (stools)
      const bodies = Composite.allBodies(world);
      bodies.forEach(body => {
        if (!body.isStatic && body.velocity.y < 0) {
          Matter.Body.applyForce(body, body.position, { x: 0, y: -0.05 });
        }
      });

      // Remove ground boundary so stools can fall through
      if (groundBody) {
        Composite.remove(world, groundBody);
        groundBody = null;
      }
    }

    // Reset the timeout
    clearTimeout(scrollTimeout);

    // Set timeout to restore ground after scrolling stops
    scrollTimeout = setTimeout(() => {
      isScrolling = false;

      // Recreate ground
      if (!groundBody) {
        groundBody = Bodies.rectangle(
          canvas.width / 2,
          canvas.height + 25,
          canvas.width,
          50,
          { isStatic: true, label: 'ground' }
        );
        Composite.add(world, groundBody);
      }
    }, 150); // Wait 150ms after scrolling stops
  }

  // Clean up stools that are off-screen
  function cleanupOffScreenStools() {
    const bodies = Composite.allBodies(world);
    const bodiesToRemove = [];

    for (let i = 0; i < bodies.length; i++) {
      const body = bodies[i];

      // Skip static bodies (boundaries)
      if (body.isStatic) continue;

      // Remove stools that are below the canvas
      if (body.position.y > canvas.height + 200) {
        bodiesToRemove.push(body);
      }
    }

    if (bodiesToRemove.length > 0) {
      Composite.remove(world, bodiesToRemove);
    }
  }

  // Animation loop
  function animate() {
    Engine.update(engine, 1000 / 60);
    customRender();

    // Clean up off-screen stools
    cleanupOffScreenStools();

    requestAnimationFrame(animate);
  }

  // Initialize
  function init() {
    resizeCanvas();

    // Wait for all images to load before starting animation
    const checkImagesLoaded = setInterval(() => {
      if (imagesLoaded === stoolImages.length) {
        clearInterval(checkImagesLoaded);
        animate();
      }
    }, 100);

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Handle scroll - make stools fall off bottom
    window.addEventListener('scroll', handleScroll);

    // Add stools on click
    $('[data-stool]').on('click', function () {
      let color = $(this).data('stool');
      for (let i = 0; i < (5 + Math.random() * 10); i++) {
        setTimeout(() => addStool(color), i * 50); // Stagger the drops
      }
    });
  }

  // Start the animation when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Cleanup on page unload
  window.addEventListener('beforeunload', function () {
    Engine.clear(engine);
  });
})();
