const reveal = gsap.utils.toArray('.reveal');
reveal.forEach((text, i) => {
  ScrollTrigger.create ({
    trigger: text,
    toggleClass: 'active',
    start: "top 90%",
    end: "top 10%",
    //markers: true
  })
})

const images = gsap.utils.toArray('img');
images.forEach((img, i) => {
  ScrollTrigger.create ({
    trigger: img,
    toggleClass: 'active',
    start: "top 90%",
    end: "top 20%",
    //markers: true
  })
})


anime({
  targets: '.h1',
  keyframes: [
    {translateY: -30},
    {translateY: 30},
  
  ],
  direction: 'alternate',
  easing: 'spring(1, 80, 10, 0)',
  loop: true
});