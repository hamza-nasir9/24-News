var tl = gsap.timeline()
tl.from(".banner1", {
  x: -100,
  opacity: 0,
  duration: 0.9,
  delay:0.5,
  scale:0.95
});
tl.from(".banner2", {
  x: 100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
  scale:.9,
});
tl.from(".navbar-brand, .my-slide , .navbar-toggler", {
  y: -10,
  duration: .2,
  stagger: .2,
  opacity: 0
});

tl.from("form", {
  opacity: 0,
  x: 50
});



gsap.from(".swiper", {
  y: 100,
  duration: .7,
  opacity: 0,
  scale:.9,
  scrollTrigger: {
    trigger: ".swiper",
    scroller: "body",
  }

});
gsap.from(".news-inner", {
  y: 100,
  duration: .7,
  opacity: 0,
  scale:.9,
  stagger:2,
  scrollTrigger: {
    trigger: ".headline",
    scroller: "body",

  }

});

gsap.from(".tags-news", {
  x: 100,
  opacity: 0,
  duration: .7,
  scale:.9,
  scrollTrigger: {
    trigger: ".tags-content",
    scroller: "body",

  }
});


gsap.from(".news-start", {
  x: -100,
  opacity: 0,
  duration: .4,
  scale:.9,
  scrollTrigger: {
    trigger: ".main-news",
    scroller: "body",
  }
});

gsap.from(".main-popular", {
  y: 100,
  opacity: 0,
  duration: 0.4,
  scale:.9,
  scrollTrigger: {
    trigger: ".popular",
    scroller: "body",
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var last = document.querySelector(".last-icon");
window.onscroll = function(){
  if(document.documentElement.scrollTop > 190){
    last.classList.add("upper-icon");
  }
  else{
    last.classList.remove("upper-icon");
  }
}



