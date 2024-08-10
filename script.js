function loaderAnimation() {
  var tl = gsap.timeline();

  tl.from(".line h1", {
    y: 100,
    stagger: 0.25,
    duration: 0.5,
    delay: 0.1,
  });

  tl.from(".line1-part1,.line h2", {
    opacity: 0,
    onStart: function () {
      var h5Timer = document.querySelector(".line1-part1 h5");
      var grow = 0;
      setInterval(() => {
        if (grow < 100) {
          h5Timer.innerHTML = grow++;
        } else {
          h5Timer.innerHTML = grow;
        }
      }, 30);
    },
  });

  tl.to("#loader", {
    opacity: 0,
    delay: 3.5,
    duration: 0.5,
  });

  tl.from("#page1", {
    y: 1600,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power1.out",
  });
  tl.to("#loader", {
    display: "none",
  });

  tl.from("#hero", {
    y: 1200,
    opacity: 0,
    stagger: 0.25,
    duration: 0.5,
    delay: 0.1,
  });

  tl.from("#page2", {
    opacity: 0,
  });
}

function cursorAnimation() {
  var cursor = document.getElementById("cursor");

  document.addEventListener("mouseenter", (dets) => {
    gsap.to(cursor, {
      opacity: 1,
    });
  });

  document.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
      left: dets.clientX,
      top: dets.clientY,
      duration: 0.1,
      ease: "power2.out",
    });
  });

  document.addEventListener("mouseleave", (dets) => {
    gsap.to(cursor, {
      opacity: 0,
    });
  });

  Shery.makeMagnet("#nav-part2 h1");

  var videocont = document.querySelector("#video-containeer");
  var videocrsr = document.querySelector("#video-cursor");
  videocont.addEventListener("mousemove", (dets) => {
    gsap.to(videocrsr, {
      left: dets.clientX - 430,
      top: dets.clientY - 250,
      transform: "scale(0.9)",
      duration: 0.1,
      ease: "power2.out",
    });

    videocrsr.innerHTML = `<i class="ri-pause-large-line"></i>`;
  });

  videocont.addEventListener("mouseleave", () => {
    videocrsr.innerHTML = `<i class="ri-play-fill"></i>`;
    gsap.to(videocrsr, {
      right: 0,
      top: 0,
      duration: 0.1,
      ease: "power2.out",
    });
  });

}

function locoJS() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function SheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 5,
    a: { value: 2, range: [0, 30] },
    b: { value: 0.5, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.8333333002196431 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1.21, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.43, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  });
}

function flagAnimation(){
  var heroelems = document.querySelectorAll("#hero h1");
var flag = document.getElementById("flag");

heroelems.forEach((elem) => {
  elem.addEventListener("mousemove", function (dets) {
    gsap.to(flag, {
      x:dets.clientX,
      y:dets.clientY,
      scale: 1.5,
      duration: 0.5,
      ease: "power2.out",
    });
  });
  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(flag, {
      scale: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  });
});
}


function hamburgerAnimation(){
  var menu = document.querySelector("#menu");
  var close = document.querySelector("#closebtn");
  var hamburger = document.querySelector("#hamburger");
  hamburger.addEventListener("click",function(){
    gsap.to(menu,{
      height:"25vh",
      zIndex:"10000",
      duration: 0.3,
      ease: "power2.out",
    })
  })
  close.addEventListener("click",function(){
    gsap.to(menu,{
      height:"0vh",
      zIndex:"-1",
      duration: 0.3,
      ease: "power2.out",
    })
  })
  
}

locoJS();
loaderAnimation();
cursorAnimation();
SheryAnimation();
flagAnimation();
hamburgerAnimation();


// gsap.from("#footer h1", {
//   opacity: 0,
//   y: 50,
//   delay: 0.5,
//   duration: 1,
//   scrollTrigger:{
//     scroller:"body",
//     trigger:"#footer",
//     start:"top 50%",
//     end:"top 40%",
//     scrub:3,
//   },
//   onStart: function() {
//     $('#footer-text').textillate({ in: { effect: 'bounceIn' } });
//   }
// });


