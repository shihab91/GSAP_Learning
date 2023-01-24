const tl = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });

const animation = tl
  .from("#demo", { ease: "linear", duration: 1 })
  .from("h1", { x: 80 })
  .from("h2", { x: -80 }, "<")
  .from("p", { y: 30 })
  .from("button", { y: 20 })
  .from("#items > g", {
    scale: 0,
    stagger: { amount: 1.5 },
    transformOrigin: "50% 50%",
  });
