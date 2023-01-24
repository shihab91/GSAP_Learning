const items = document.querySelectorAll(".item");
gsap.defaults({ duration: 0.3 });
items.forEach((item, index) => {
  const tl = gsap
    .timeline({ paused: true })
    .to(item.querySelector(".text"), {
      color: "white",
      x: 10,
      transformOrigin: "left center",
      scale: 1.3,
    })
    .to(
      item.querySelector(".dot"),
      { backgroundColor: "#F93", scale: 1.5 },
      "<"
    );

  item.addEventListener("mouseenter", () => {
    tl.play();
  });
  item.addEventListener("mouseleave", () => {
    tl.reverse();
  });
});
/* const tl = gsap
  .timeline({ paused: true })
  .to(".text", { color: "white", x: 10 })
  .to(".dot", { backgroundColor: "#F93", scale: 1.5 }, "<");

item.addEventListener("mouseenter", () => {
  tl.play();
});
item.addEventListener("mouseleave", () => {
  tl.reverse();
});
 */

const btn = document.querySelector(".constant-hover-pulse button");
const animation = gsap.to(btn, {
  scale: 1,
  paused: true,
  repeat: Infinity,
  yoyo: true,
});
btn.addEventListener("mouseenter", () => {
  animation.restart();
});
btn.addEventListener("mouseleave", () => {
  animation.pause();
  gsap.to(btn, { scale: 0.6 });
});