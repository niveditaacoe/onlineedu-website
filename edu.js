let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".course-slider",{
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,

    },

    breakpoints:{
        540:{
            slidesPerView: 1,
            // spaceBetween: 2,
        },
        668:{
            slidesPerView:2,
            // spaceBetween:40,
        },
        1024:{
            slidesPerView: 3,
            // spaceBetween:50,
        },

    },
});

var swiper = new Swiper(".teachers-slider",{
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,

    },

    breakpoints:{
        540:{
            slidesPerView: 1,
            // spaceBetween: 2,
        },
        668:{
            slidesPerView:2,
            // spaceBetween:40,
        },
        1024:{
            slidesPerView: 3,
            // spaceBetween:50,
        },

    },
});

var swiper = new Swiper(".reviews-slider",{
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,

    },

    breakpoints:{
        540:{
            slidesPerView: 1,
            // spaceBetween: 2,
        },
        668:{
            slidesPerView:2,
            // spaceBetween:40,
        },
        1024:{
            slidesPerView: 3,
            // spaceBetween:50,
        },

    },
});



