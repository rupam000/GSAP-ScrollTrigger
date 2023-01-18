// for scroll triggering
gsap.registerPlugin(ScrollTrigger);

gsap.to('.c', {
  // toggle actions
  scrollTrigger: {
    trigger: '.c',
    // top, center, bottom, pixels, percentages(relative to top)
    start: 'top center',
    markers: true,
    // keywords are
    // play, pause, resume, reverse, restart, reset
    // 'none none none none'
    // 'focus pass focus end
    toggleActions: 'restart pause resume reverse',
  },
  x: 300,
  rotation: 360,
  duration: 6,
});
