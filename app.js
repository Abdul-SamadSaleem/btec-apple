const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".firstPage",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});

const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: ".secondPage",
    markers: { startColor: "blue", endColor: "blue" },
    scrub: true,
    start: "-40%",
    end: "40%",
  },
});

tlH.fromTo(
  ".highlight",
  { color: "rgba(255,255,255, 0.4" },
  { color: "rgba(255,255,255, 1", stagger: 1 }
);

const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: ".secondPage",
    markers: { startColor: "pink", endColor: "pink" },
    scrub: true,
    start: "-20%",
    end: "60%",
  },
});

tlHRemove.to(".highlight", { color: "rgba(255,255,255, 0.4", stagger: 1 });

const tlSplit = gsap.timeline({
    scrollTrigger: {
    trigger: ".thirdPage",
    start: "-55%",
    end: "30%",
    scrub: true,
    }
})

tlSplit.fromTo(".largePhone", {x: "40%"}, {x: "20%"})
tlSplit.fromTo(".smallPhone", {x: "-40%"}, {x: "-20%"}, "<")
tlSplit.fromTo(".productTextLeft", {x: 50, opacity: 0}, {opacity: 1, x: 0}, "<")
tlSplit.fromTo(".productTextRight", {x: -50, opacity: 0}, {opacity: 1, x: 0}, "<")


const tlSplitPin = gsap.timeline({
    scrollTrigger: {
        trigger: ".thirdPage",
        pin: true,
        pinSpacing: false,
        start: "0%",
        end: "100%"
    }
})


const swatches = document.querySelectorAll(".swatches img")
const gallery = document.querySelector(".phoneGallery")
const slides = document.querySelectorAll(".phoneGalleryContainer")

let currentSwatch = "blue"
let topIndex = 2

swatches.forEach((swatch, index) => {
    const coord = slides[index].getBoundingClientRect().left;

    swatch.addEventListener("click", (e) => {
        let swatchName = e.target.getAttribute("swatch")
        let closeUp = document.querySelector(`.${swatchName}`)

        if(currentSwatch == swatchName) return;
        
        gsap.set(closeUp, {zIndex: topIndex})
        gsap.fromTo(closeUp, {opacity: 0}, {opacity: 1, duration: 1})

        gsap.to(gallery, {x: -coord, duration: 1, ease: "back.out(1.7)"})

        topIndex++;
        currentSwatch = swatchName;
    })
})

const tlVideo = gsap.timeline({
    scrollTrigger: {
      trigger: ".fifthPage",
      start: "0%",
      end: "150%",
      scrub: true,
      pin: true,
    },
  });
 
  tlVideo.fromTo(".productVideo", { currentTime: 0 }, { currentTime: 3, duration: 1 });
tlVideo.fromTo(".productInfoContainer h3", { opacity: 0 }, { opacity: 1, stagger: 0.25, duration: 0.5 }, "<");

const tlParallax = gsap.timeline({
    scrollTrigger: {
      trigger: ".sixthPage",
      start: "-25%",
      end: "50%",
      scrub: true,
    },
  });
  
  tlParallax.fromTo(".photoDescription", { y: 0 }, { y: -80 });
  tlParallax.fromTo(".portraitContainer", { y: 0 }, { y: -80 }, "<");
  tlParallax.fromTo(".phoneVideo", { y: 0 }, { y: -200 }, "<");