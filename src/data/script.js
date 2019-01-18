window.onload = function () {
    let swiper = new Swiper('.swiper-container', {
      slidesPerView: 1.2,
      spaceBetween: 5, 
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        425: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 35,
        },
        2560: {
          slidesPerView: 5,
          spaceBetween: 35,
        },
      },
    
    });
    this.loader(swiper);  
  };

function loader(swiper) {
    var selector = document.querySelector(".select");

    setTimeout(function(){ swiper.update();}, 500);

    selector.addEventListener("change", function() {
        setTimeout(function(){ swiper.update();}, 500);
    });  
}
