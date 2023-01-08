const tl = gsap.timeline();
tl.from("#lowest", {
  onStart: function () {
    $("#lowest").textillate({
      in: {
        effect: "fadeInUp",
        callback: function () {
          $("#lowest").textillate("out");
        },
      },
      out: { effect: "fadeOutUp" },
    });
  },
})
  .from("#second-lowest", {
    onStart: function () {
      $("#second-lowest").textillate({
        in: {
          effect: "fadeInUp",
          callback: function () {
            $("#second-lowest").textillate("out");
          },
        },
        out: { effect: "fadeOutUp" },
      });
    },
    opacity: 0,
    delay: 1,
  })
  .from("#second-top", {
    onStart: function () {
      $("#second-top").textillate({
        in: {
          effect: "fadeInUp",
          callback: function () {
            $("#second-top").textillate("out");
          },
        },
        out: { effect: "fadeOutUp" },
      });
    },
    opacity: 0,
    delay: 1,
  })
  .from("#top", {
    onStart: function () {
      $("#top").textillate({
        in: {
          effect: "fadeInUp",
        },
      });
    },
    opacity: 0,
    delay: 1,
  })
  .to("#top-screen", {
    top: "-100%",
    duration: 1.2,
    delay: 1,
  });
