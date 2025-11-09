gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

// Connect Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const textElements = gsap.utils.toArray(".text");

textElements.forEach((text) => {
  gsap.to(text, {
    backgroundSize: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: text,
      start: "center 80%",
      end: "center 20%",
      scrub: true
    }
  });
});

// circle begin

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Create custom eases for smoother animations (matching our previous implementation)
CustomEase.create("customEase", "0.6, 0.01, 0.05, 1");
CustomEase.create("directionalEase", "0.16, 1, 0.3, 1");
CustomEase.create("smoothBlur", "0.25, 0.1, 0.25, 1");
CustomEase.create("gentleIn", "0.38, 0.005, 0.215, 1");
CustomEase.create("gentleOut", "0.22, 0.9, 0.36, 1");
CustomEase.create("circleExpand", "0.25, 0.1, 0.13, 1");

// Prevent any layout shifts during animation
gsap.config({
  force3D: true
});

// Get all layers
const layers = gsap.utils.toArray(".layer");

// Set z-index in ascending order (first layer on bottom, last on top)
layers.forEach((layer, i) => {
  gsap.set(layer, { zIndex: i + 1 });
});

// Create a master timeline for the circles animations
const master = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-circles",
    start: "top+=5vh top",
    end: "bottom-=360vh top",
    scrub: 1
  }
});

// Add each layer's animation to the timeline
layers.forEach((layer, i) => {
  // Calculate the timeline position for each layer
  const startPos = i * 25; // Each circle gets 25% of the timeline

  // Animate the zoom with our custom ease
  master.fromTo(
    layer,
    { clipPath: "circle(0% at 50% 50%)" },
    {
      clipPath: "circle(75% at 50% 50%)",
      duration: 25, // Each circle gets equal time
      ease: "circleExpand" // Use our custom ease for smoother expansion
    },
    startPos + "%"
  );
});

// Get references to DOM elements
const sectionCircles = document.querySelector(".section-circles");
const sectionFirst = document.querySelector(".section-first");

// Track the previous state to detect changes
let wasInCirclesSection = false;

// Function to check if we're in the circles section
function isInCirclesSection() {
  const scrollY = window.scrollY;
  const circlesSectionTop = sectionFirst.offsetHeight;
  const circlesSectionHeight = sectionCircles.offsetHeight;

  // Calculate the maximum scroll position for the circles section
  // We consider the section to end at 90% of its height to account for the spacer
  const maxScrollPosition = circlesSectionTop + circlesSectionHeight * 0.9;

  // Check if we're scrolled into the circles section but not too far
  return scrollY >= circlesSectionTop && scrollY < maxScrollPosition;
}

// Ensure correct initial state on page load
window.addEventListener("load", function () {
  // Check if we're in the circles section on page load
  const inCirclesSection = isInCirclesSection();
  wasInCirclesSection = inCirclesSection;
});

// Also check immediately (for browsers that might have already loaded)
const inCirclesSection = isInCirclesSection();
wasInCirclesSection = inCirclesSection;

// Lightweight randomness logic - no GSAP needed!
function initRandomUnderlines() {
  // const totalVariants = 6; // Number of symbol variants
  const totalVariants = document.querySelectorAll(
    '.symbol-library symbol[id^="underline-"]'
  ).length;

  let nextIndex = Math.floor(Math.random() * totalVariants); // Random start

  document.querySelectorAll("[data-draw-line]").forEach((container) => {
    const box = container.querySelector("[data-draw-line-box]");
    if (!box) return;

    container.addEventListener("mouseenter", () => {
      // Get the symbol and clone its path
      const symbol = document.querySelector(`#underline-${nextIndex + 1}`);
      const originalPath = symbol.querySelector("path");

      if (originalPath) {
        // Create a new SVG with the cloned path
        const svgHTML = `
              <svg viewBox="0 0 310 40" preserveAspectRatio="none">
                ${originalPath.outerHTML}
              </svg>
            `;

        box.innerHTML = svgHTML;

        // Now we can properly access and measure the path
        const path = box.querySelector("path");
        if (path) {
          const length = path.getTotalLength();
          // Set precise dasharray and initial offset
          path.style.strokeDasharray = length;
          path.style.strokeDashoffset = length;
          path.style.setProperty("--path-length", length);
        }
      }

      // Advance to next variant for next hover (across all items)
      nextIndex = (nextIndex + 1) % totalVariants;
    });

    // Optional: Clear SVG on mouse leave for performance
    container.addEventListener("mouseleave", () => {
      // Small delay to allow exit animation to complete
      setTimeout(() => {
        if (!container.matches(":hover")) {
          box.innerHTML = "";
        }
      }, 700);
    });
  });
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", initRandomUnderlines);


gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char, i) => {

  const bg = char.dataset.bgColor
  const fg = char.dataset.fgColor

  const text = new SplitType(char, { types: 'chars' })

  gsap.fromTo(text.chars,
    {
      color: bg,
    },
    {
      color: fg,
      duration: 0.3,
      stagger: 0.02,
      scrollTrigger: {
        trigger: char,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
        markers: false,
        toggleActions: 'play play reverse reverse'
      }
    })
})