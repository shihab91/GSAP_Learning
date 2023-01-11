gsap.to(".image-container", {
  width: "100%",
  ease: Expo.easeInOut,
  duration: 2,
  stagger: 2,
  repeat: "-1",
  yoyo: true,
});
gsap.to(".text h1", {
  top: 0,
  ease: Expo.easeInOut,
  stagger: 2,
});
gsap.to(".text h1", {
  top: "-100%",
  ease: Expo.easeInOut,
  stagger: 2,
  delay: 2,
});
