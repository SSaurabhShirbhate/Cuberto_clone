// Initialize Shery mouse follower
Shery.mouseFollower();

// Apply magnet effect to elements with the class 'magnet'
Shery.makeMagnet(".magnet");

// Hover effect with media circle for elements with the class 'hvr'
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./assets/0.mp4", "./assets/2.mp4", "./assets/3.mp4"]
});

// Scroll-triggered animation for elements with the class 'fleftelm'
gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: ".fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: "power1.inOut",
});

// Setup image effect using Shery.js
let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
  style: 4,
  config: {
    onMouse: { value: 1 },
    zindex: { value: "999999", range: [-9999999, 9999999] }
  },
  slideStyle: (setScroll) => {
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: (prog) => {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});
