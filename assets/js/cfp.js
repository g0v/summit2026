gsap.registerPlugin(ScrollTrigger);

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
    start: "top top",
    end: "bottom-=400vh top", // End 400vh before the end of the section
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
const sectionIndicators = document.querySelector(".section-indicators");
const indicatorItems = document.querySelectorAll(".indicator-item");
const debugInfo = document.querySelector(".debug-info");
const indicatorGroups = document.querySelectorAll(".indicator-group");
const ourTitle = document.querySelector(
  ".indicator-group:first-child .indicator-title"
);
const journeyTitle = document.querySelector(
  ".indicator-group:last-child .indicator-title"
);

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

// Function to update indicators based on scroll position
function updateIndicatorsOnScroll() {
  // Get the current scroll position
  const scrollY = window.scrollY;

  // Get the offset of the circles section
  const circlesSectionTop = sectionFirst.offsetHeight;
  const circlesSectionHeight = sectionCircles.offsetHeight;

  // Check if we're in the circles section
  const inCirclesSection = isInCirclesSection();

  // Update indicators visibility based on whether we're in the circles section
  if (inCirclesSection !== wasInCirclesSection) {
    if (inCirclesSection) {
      animateIndicatorsIn();
    } else {
      animateIndicatorsOut();
    }
    wasInCirclesSection = inCirclesSection;
  }

  // Calculate how far we've scrolled into the circles section
  const scrollIntoCirclesSection = scrollY - circlesSectionTop;

  // Only update active indicator if we're in the circles section
  if (inCirclesSection) {
    // Calculate progress through the circles section (0-1)
    const progress = scrollIntoCirclesSection / circlesSectionHeight;

    // Determine which circle is active (0-3)
    const activeCircleIndex = Math.min(3, Math.floor(progress * 4));

    // Update debug info
    if (debugInfo) {
      debugInfo.textContent = ` `;
    }

    // Update the indicators
    updateIndicators(activeCircleIndex);
  } else {
    // Update debug info when not in circles section
    if (debugInfo) {
      debugInfo.textContent = ` `;
    }
  }
}

// Add scroll event listener
window.addEventListener("scroll", updateIndicatorsOnScroll);

// Function to update indicators with our custom animation style
function updateIndicators(activeIndex) {
  // Update each indicator
  indicatorItems.forEach((item, i) => {
    // Remove active class from all
    item.classList.remove("active");

    // Add active class to the active one
    if (i === activeIndex) {
      item.classList.add("active");

      // Animate the active item with our custom ease
      gsap.to(item, {
        opacity: 1,
        scale: 1.05, // Subtle scale effect
        duration: 0.4,
        ease: "customEase",
        onComplete: () => {
          // Scale back to normal size with a different ease
          gsap.to(item, {
            scale: 1,
            duration: 0.3,
            ease: "directionalEase"
          });
        }
      });
    } else {
      // Make non-active items slightly dimmer with our custom ease
      gsap.to(item, {
        opacity: 0.3,
        scale: 1,
        duration: 0.3,
        ease: "smoothBlur"
      });
    }
  });
}

// Function to animate indicators in with staggered effect using our custom eases
function animateIndicatorsIn() {
  // Create a timeline for the animation
  const tl = gsap.timeline();

  // Set initial states for all elements
  gsap.set(sectionIndicators, { opacity: 0 });
  gsap.set(ourTitle, { opacity: 0, y: 10 });
  gsap.set(journeyTitle, { opacity: 0, y: 10 });
  gsap.set(indicatorItems, {
    opacity: 0,
    y: 15,
    scale: 0.95
  });

  // Make the container visible first with our custom ease
  tl.to(sectionIndicators, {
    opacity: 1,
    duration: 0.4,
    ease: "gentleIn"
  });

  // 1. First animate "Our" title with our custom ease
  tl.to(
    ourTitle,
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "customEase"
    },
    "-=0.2"
  );

  // 2. Then animate "Journey" title with our custom ease
  tl.to(
    journeyTitle,
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "customEase"
    },
    "-=0.3" // More overlap for quicker sequence
  );

  // 3. Then animate each indicator item with staggered effect and our custom ease
  tl.to(
    indicatorItems,
    {
      opacity: 0.3, // Default opacity for non-active items
      y: 0,
      scale: 1,
      duration: 0.5,
      stagger: 0.08, // Staggered effect for each item
      ease: "directionalEase",
      onComplete: () => {
        // Make sure the active indicator is highlighted
        updateIndicatorsOnScroll();
      }
    },
    "-=0.2" // Slight overlap
  );

  return tl;
}

// Function to animate indicators out with our custom eases
function animateIndicatorsOut() {
  // Create a timeline for the animation
  const tl = gsap.timeline();

  // 1. First animate indicator items out in reverse order with our custom ease
  tl.to(indicatorItems, {
    opacity: 0,
    y: -10,
    scale: 0.95,
    duration: 0.4,
    stagger: {
      amount: 0.2, // Total stagger time
      from: "end" // Start from the last item
    },
    ease: "gentleOut"
  });

  // 2. Then animate "Journey" title out with our custom ease
  tl.to(
    journeyTitle,
    {
      opacity: 0,
      y: -5,
      duration: 0.3,
      ease: "smoothBlur"
    },
    "-=0.2" // Slight overlap
  );

  // 3. Then animate "Our" title out with our custom ease
  tl.to(
    ourTitle,
    {
      opacity: 0,
      y: -5,
      duration: 0.3,
      ease: "smoothBlur"
    },
    "-=0.2" // Slight overlap
  );

  // 4. Finally fade out the container with our custom ease
  tl.to(
    sectionIndicators,
    {
      opacity: 0,
      duration: 0.3,
      ease: "gentleOut"
    },
    "-=0.1" // Slight overlap
  );

  return tl;
}

// Ensure correct initial state on page load
window.addEventListener("load", function () {
  // Check if we're in the circles section on page load
  const inCirclesSection = isInCirclesSection();
  wasInCirclesSection = inCirclesSection;

  if (inCirclesSection) {
    animateIndicatorsIn();
  } else {
    // Make sure indicators are hidden visually
    gsap.set(sectionIndicators, { opacity: 0 });
  }

  // Force update the debug info
  updateIndicatorsOnScroll();
});

// Also check immediately (for browsers that might have already loaded)
const inCirclesSection = isInCirclesSection();
wasInCirclesSection = inCirclesSection;

if (inCirclesSection) {
  animateIndicatorsIn();
} else {
  // Make sure indicators are hidden visually
  gsap.set(sectionIndicators, { opacity: 0 });
}

// Initial update of debug info
updateIndicatorsOnScroll();

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

        splitTypes.forEach((char,i) => {

            const bg = char.dataset.bgColor
            const fg = char.dataset.fgColor

            const text = new SplitType(char, { types: 'chars'})

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


        const lenis = new Lenis()

        lenis.on('scroll', (e) => {
        console.log(e)
        })

        function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)