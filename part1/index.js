const tl = gsap.timeline();
tl.from("#headlines", {
  opacity: 0,
  y: 20,
  duration: 1,
})
  .from(".headline", {
    opacity: 0,
    y: 20,
    duration: 1,
  })
  .from(".btn", {
    y: -50,
    duration: 1,
  })
  .from("#footer", {
    opacity: 0,
    scale: 1.5,
  });
