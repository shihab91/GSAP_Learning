/* gsap.to(".circle", {
  duration: 2,
  backgroundColor: "blue",
  x: 1000,
  opacity: 0.5,
  rotation: 360,
  scale: 2,
  borderRadius: "50%",
  ease: Expo.easeInOut,
  stagger: {
    amount: 0.6,
    from: "start",
  },
});
const elements = [1, 2, 3, 4, 5, 6];
gsap.utils.shuffle(elements);
console.log(elements); */
gsap.set(".circle", { opacity: 0 });
gsap.set(".box", { opacity: 0 });
gsap
  .timeline()
  .to(".circle", {
    opacity: 1,
    duration: 1,
    borderRadius: "50%",
    x: 500,
    ease: Expo.easeInOut,
  })
  .to(".box", {
    opacity: 1,
    duration: 2,
    borderRadius: "50%",
    x: 500,
    ease: Expo.easeInOut,
  });
