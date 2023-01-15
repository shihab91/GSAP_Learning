gsap.to(".circle", {
  /*   x: 1000,
  duration: 1.5,
  rotation: 360,
  stagger: 0.3,
  backgroundColor: "blue", */
  duration: 3,
  backgroundColor: "blue",
  x: 1000,
  opacity: 0.5,
  rotation: 360,
  scale: 2,
  ease: Expo.easeInOut,
  borderRadius: "50%",
  onComplete: function () {
    console.log("animation completed!");
  },
  onUpdate: function () {
    console.log("animation updated!");
  },
});
