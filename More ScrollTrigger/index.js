/* gsap.set(".circle", { opacity: 0 });
gsap.set(".box", { opacity: 0 });
const animation = gsap
  .timeline()
  .to(".circle", {
    opacity: 1,
    duration: 3,
    borderRadius: "50%",
    x: 800,
    ease: Expo.easeInOut,
    delay: 0,
    stagger: 1,
    yoyo: true,
  })
  .add("test")
  .to(".box", {
    delay: 0,
    opacity: 1,
    duration: 3,
    borderRadius: "50%",
    x: 800,
    ease: Expo.easeInOut,
    stagger: 0.09,
    yoyo: true,
  });
  */
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

/* const count = document.getElementById("num-count");
let counter = {
  value: 0,
};
const animation = gsap.to(counter, {
  value: 100,
  duration: 2,
  onUpdate: () => (count.innerText = Math.round(counter.value)),
}); */
const animation = gsap.to("#num-count", {
  innerText: 500,
  duration: 2,
  snap: {
    innerText: 5,
  },
});
document.getElementById("play").onclick = () => {
  animation.play();
};
document.getElementById("pause").onclick = () => {
  animation.pause();
};
document.getElementById("reverse").onclick = () => {
  animation.reverse();
};
document.getElementById("restart").onclick = () => {
  animation.restart();
};
document.getElementById("test").onclick = () => {
  animation.play("test");
};
