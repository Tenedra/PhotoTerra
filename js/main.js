$(function(){ 
    $('.slider').slick({
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 2000,
        fade: true,
        pauseOnHover: false,
        arrows: false
    });

    $('.collection').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 2000,
        pauseOnHover: false,
        arrows: false
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',

    });

    $('.slider-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
    });

});