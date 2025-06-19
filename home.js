// Smooth scroll for navigation links
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});
tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  particles: {
    number: { value: 40 },
    shape: {
      type: "image",
      image: {
        src: "https://cdn-icons-png.flaticon.com/512/3214/3214426.png",
        width: 32,
        height: 32
      }
    },
    size: {
      value: 15,
      random: true
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: { default: "out" }
    },
    opacity: {
      value: 0.8,
      random: true
    }
  },
  background: {
    color: "#000"
  }
});

