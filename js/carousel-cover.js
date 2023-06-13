$(".carousel-cover").owlCarousel ({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout:3000,
    autoplayHoverPause: true,
    responsive: {
        300:{
            items: 1,
            nav: false
        },
        600:{
            items: 1,
            nav: false
        },
        900:{
            items: 1,
            nav: false
        },
        1140:{
            items: 1,
            nav: false
        },
        1500:{
            items: 1,
            nav: false
        }  
    }        
});