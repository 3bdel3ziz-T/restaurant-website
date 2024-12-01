// import { gsap } from "../../node_modules/gsap";
// import { ScrollTrigger } from "../../node_modules/gsap/dist/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

Array.from(document.querySelectorAll("a")).forEach((el) => {
  el.addEventListener("click", (ev) => {
    ev.preventDefault();
  });
});
// console.log(Array.from(document.querySelectorAll(".circle-shape span")).length);
const circle = Array.from(document.querySelectorAll(".circle-shape span"));

for (let i = 0; i < circle.length; i++) {
  circle[i].style.cssText = `transform: rotate(${
    (360 / circle.length) * (1 + i)
  }deg)`;
}
//landing
gsap
  .timeline({ defaults: { duration: 0.8, delay: 0 } })
  .fromTo(
    ".logo",
    {
      scale: 3,
      opacity: 1,
      letterSpacing: "5px",
    },
    {
      scale: 6,
      opacity: 0,
      letterSpacing: "70px",
      ease: "power3.out",
      delay: 1.5,
      duration: 1,
    }
  )
  .to(".logo-box", {
    display: "none",
  })
  .fromTo(
    ".logo2",
    {
      opacity: 0,
    },
    {
      ease: "power3.out",
      opacity: 1,
    }
  )
  .fromTo(
    ".link",
    {
      opacity: 0,
    },
    {
      stagger: {
        amount: 0.4,
        from: "center",
      },
      opacity: 1,
    }
  )
  .fromTo(
    ".account",
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  )
  .fromTo(
    ".landing-text",
    {
      y: 20,
      opacity: 0,
    },
    {
      ease: "power1.out",
      opacity: 1,
      y: 0,
    }
  )
  .fromTo(
    ".landing-img",
    {
      opacity: 0,
      y: -20,
      scale: 0.9,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    "<"
  )
  .fromTo(
    ".scroll-down",
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  );
//about
gsap
  .timeline({
    defaults: { duration: 0.8, delay: 0 },
    scrollTrigger: {
      trigger: ".about",
      start: "top 60%",
      end: "50% 40%",
      scrub: true,
    },
  })
  .fromTo(
    ".about .right",
    {
      x: "100%",
      opacity: 0,
    },
    {
      x: "0%",
      opacity: 1,
    }
  )
  .fromTo(
    ".about .left",
    {
      x: "-100%",
      opacity: 0,
    },
    {
      x: "0%",
      opacity: 1,
    },
    "<"
  )
  .fromTo(
    ".about .knife-img",
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      ease: "power1.out",
      opacity: 1,
      scale: 1,
    },
    "<"
  ),
  //menu
  gsap
    .timeline({
      defaults: { duration: 0.8, delay: 0 },
      scrollTrigger: {
        trigger: ".menu",
        start: "top 60%",
        end: "50% 60%",
        scrub: true,
      },
    })
    .fromTo(
      ".menu .heading",
      { y: 50, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1 }
    )
    .fromTo(
      ".menu .left-menu",
      { x: -50, opacity: 0, scale: 0.7 },
      { x: 0, opacity: 1, scale: 1 }
    )
    .fromTo(
      ".menu .right-menu",
      { x: 50, opacity: 0, scale: 0.7 },
      { x: 0, opacity: 1, scale: 1 },
      "<"
    );
//chef word

gsap
  .timeline({
    defaults: { duration: 0.8, delay: 0 },
    scrollTrigger: {
      trigger: ".chef-word",
      start: "35% 60%",
      end: "60% 40%",
      scrub: true,
    },
  })
  .fromTo(
    ".chef-word .heading",
    {
      y: -40,
      opacity: 0,
    },
    {
      ease: "power1.out",
      opacity: 1,
      y: 0,
    }
  )
  .fromTo(
    ".chef-word .chef-img",
    {
      left: -40,
      opacity: 0,
    },
    {
      left: 0,
      opacity: 1,
      ease: "circ.out",
    },
    "<"
  )
  .fromTo(
    ".chef-word .quote",
    {
      y: 20,
      opacity: 0,
    },
    {
      ease: "power1.out",
      opacity: 1,
      y: 0,
    },
    "<"
  )
  .fromTo(
    ".chef-word .chef-info",
    {
      y: 20,
      opacity: 0,
    },
    {
      ease: "power1.out",
      opacity: 1,
      y: 0,
    }
  );
// laurels
gsap
  .timeline({
    defaults: { duration: 0.8, delay: 0 },
    scrollTrigger: {
      trigger: ".our-laurels",
      start: "top 60%",
      end: "50% 40%",
      scrub: true,
    },
  })
  .fromTo(
    ".our-laurels .heading",
    {
      y: 20,
      opacity: 0,
    },
    {
      ease: "power1.out",
      opacity: 1,
      y: 0,
    }
  )
  .fromTo(
    ".our-laurels .item",
    {
      x: 20,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      stagger: {
        amount: 1,
        from: "start",
      },
    }
  )
  .fromTo(
    ".our-laurels .laurels-img",
    {
      x: 40,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      stagger: {
        amount: 1,
        from: "start",
      },
    },
    "<"
  );
// insta
gsap
  .timeline({
    defaults: { duration: 1, delay: 0 },
    scrollTrigger: {
      trigger: ".insta",
      start: "10% 40%",
      end: "60% 40%",
      scrub: true,
    },
  })
  .fromTo(
    ".insta .heading",
    {
      y: -40,
      opacity: 0,
    },
    {
      ease: "power1.out",
      opacity: 1,
      y: 0,
    },
    "<"
  )
  .fromTo(
    ".insta .insta-text",
    {
      y: 20,
      opacity: 0,
    },
    {
      ease: "power1.out",
      opacity: 1,
      y: 0,
    },
    "<"
  )
  .to(
    ".insta .insta-photo",
    {
      duration: 2,
      ease: "power2.out",
      x: "none",
      left: "none",
      ease: "power4.out",
      rotate: "0deg",
    },
    {
      stagger: {
        amount: 1,
        from: "random",
      },
    }
  );
//find Us
gsap
  .timeline({
    defaults: { duration: 0.8, delay: 0 },
    scrollTrigger: {
      trigger: ".find-us",
      start: "top 60%",
      end: "50% 40%",
      scrub: true,
    },
  })
  .fromTo(
    ".find-us .heading",
    {
      y: -40,
      opacity: 0,
    },
    {
      ease: "power1.out",
      opacity: 1,
      y: 0,
    },
    "<"
  )
  .fromTo(
    ".find-us .text",
    {
      y: 20,
      opacity: 0,
    },
    {
      ease: "power1.out",
      opacity: 1,
      y: 0,
    },
    "<"
  )
  .fromTo(
    ".find-us .img",
    {
      left: 40,
      opacity: 0,
    },
    {
      left: 0,
      opacity: 1,
      ease: "circ.out",
    },
    "<"
  );
//subscribe
gsap
  .timeline({
    defaults: { duration: 0.8, delay: 0 },
    scrollTrigger: {
      trigger: ".subscribe",
      start: "top 60%",
      end: "50% 40%",
      scrub: true,
    },
  })
  .fromTo(
    ".subscribe",
    {
      y: -40,
      opacity: 0,
    },
    {
      y: 0,
      ease: "power1.out",
      opacity: 1,
    }
  );