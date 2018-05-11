$(document).ready(function(){

    //PARALLAX
    $('.parallax-window').parallax({imageSrc: 'images/background/home.jpg'});

    //TYPED
    $(".ta").typed({
      strings: ["Graphics Designer.","Freelancer.","Web Designer.","Programmer."],
      smartBackspace: true,
      loop: true,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 3000,
    });

    // NAVBAR SCROLL
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();

    if (startchange.length){

        $(document).scroll(function() {
            
            scroll_start = $(document).scrollTop();
            
            if(scroll_start > offset.top) {
                $('.navbar').addClass('navbar-scrolled');
                $('.navbar #logo').attr('src', 'images/logo/logo-dark.png');
            } else {
                $('.navbar').removeClass('navbar-scrolled');
                $('.navbar #logo').attr('src', 'images/logo/logo.png');
            }
        });

    }

    // NAVBAR SMOOTH SCROLL
    $("nav").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        });
    });

    // PORTFOLIO ISOTOPE
    if($('.portfolio-items').length) {
        var $elements = $('.portfolio-items');
        $elements.isotope();

        $('.portfolio-filter ul li').on('click', function() {
            $('.portfolio-filter ul li').removeClass('sel-item');
            $(this).addClass('sel-item');
            var selector = $(this).attr('data-filter');
            $(".portfolio-items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
        });
    }
    
});




