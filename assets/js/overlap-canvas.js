// Falling Stools Animation - Scroll Triggered
(function () {
  const canvas = document.getElementById('overlap-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // Array of all available stool images
  const stoolPaths = [
    'assets/img/stools/stool-nbg-b-l.svg',
    'assets/img/stools/stool-nbg-b-s.svg',
    'assets/img/stools/stool-nbg-blk-l.svg',
    'assets/img/stools/stool-nbg-blk-s.svg',
    'assets/img/stools/stool-nbg-g-l.svg',
    'assets/img/stools/stool-nbg-g-s.svg',
    'assets/img/stools/stool-nbg-r-l.svg',
    'assets/img/stools/stool-nbg-r-s.svg',
    'assets/img/stools/stool-nbg-y-l.svg',
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

  let stools = [];
  let animationId;
  let lastScrollY = 0;
  let scrollAccumulator = 0;
  const SCROLL_TRIGGER_THRESHOLD = 20; // Pixels to scroll before spawning a new stool

  // Stool class to represent each falling stool
  class FallingStool {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = -100; // Start above the screen
      this.size = 30 + Math.random() * 40; // Random size between 30-70px
      this.speed = 5 + Math.random() * 2; // Random fall speed
      this.rotation = Math.random() * Math.PI * 2; // Random initial rotation
      this.rotationSpeed = (Math.random() - 0.5) * 0.05; // Random rotation speed
      this.opacity = 0.3 + Math.random() * 0.4; // Random opacity 0.3-0.7
      // Randomly select a stool image
      this.imageIndex = Math.floor(Math.random() * stoolImages.length);
    }

    update() {
      this.y += this.speed;
      this.rotation += this.rotationSpeed;
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.drawImage(
        stoolImages[this.imageIndex],
        -this.size / 2,
        -this.size / 2,
        this.size,
        this.size
      );
      ctx.restore();
    }

    isOffScreen() {
      return this.y > canvas.height + 100;
    }
  }

  // Resize canvas to match window size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // Add new stool
  function addStool() {
    stools.push(new FallingStool());
  }

  // Handle scroll event
  function handleScroll() {
    const currentScrollY = window.scrollY || window.pageYOffset;
    const scrollDelta = Math.abs(currentScrollY - lastScrollY);

    scrollAccumulator += scrollDelta;

    // Spawn a new stool for every 10px scrolled
    while (scrollAccumulator >= SCROLL_TRIGGER_THRESHOLD) {
      addStool();
      scrollAccumulator -= SCROLL_TRIGGER_THRESHOLD;
    }

    lastScrollY = currentScrollY;
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw all stools
    for (let i = stools.length - 1; i >= 0; i--) {
      stools[i].update();
      stools[i].draw();

      // Remove stools that have fallen off screen
      if (stools[i].isOffScreen()) {
        stools.splice(i, 1);
      }
    }

    animationId = requestAnimationFrame(animate);
  }

  // Initialize
  function init() {
    resizeCanvas();
    lastScrollY = window.scrollY || window.pageYOffset;

    // Wait for all images to load before starting animation
    const checkImagesLoaded = setInterval(() => {
      if (imagesLoaded === stoolImages.length) {
        clearInterval(checkImagesLoaded);
        animate();
      }
    }, 100);

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Handle scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // Start the animation when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Cleanup on page unload
  window.addEventListener('beforeunload', function () {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    window.removeEventListener('scroll', handleScroll);
  });
})();
