var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    effect: 'fade',
    speed: 3000,
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});

var swiperProduct = new Swiper(".carProducts", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    centeredSlides: true,
    breakpoints: {
        1023: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        639: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 30
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

