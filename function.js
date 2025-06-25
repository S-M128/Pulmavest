//  window.addEventListener('load', function () {
//    setTimeout(function () {
//      var loadingScreen = document.querySelector(".loader");
//      if (loadingScreen) {
//        loadingScreen.style.display = 'none';
//      }
//    }, 2000); 
//  });

//Reveal Text

gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char,i) => {
    const text = new SplitType(char, {types:'chars,words'})

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: 'top 80%',
        end: 'top 20%' ,
        scrub: true,
        markers: false
      },
      opacity: 0.2,
      stagger: 0.1,
    })
})


//Smooth scroll

const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
lenis.raf(time);
requestAnimationFrame(raf);
}
requestAnimationFrame(raf);