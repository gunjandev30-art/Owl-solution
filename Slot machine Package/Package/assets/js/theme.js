
(function ($) {
    'use strict';
    /*---WOW active js ---- */
    new WOW().init();
    /*--------- Loader ----------*/
    $(window).on("load", function () {
        $('.loader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    /*---------- Footer Toggle ----------*/
    function footerExplanCollapse() {
        $(".footer-top h5").addClass('toggled');
        $('.footer-top .toggled').on('click', function (e) {
            e.preventDefault();
            if ($(window).width() < 992) {
                $(this).toggleClass('active');
                $(this).parent().find('.footer_collaps').toggleClass('active').toggle('slow');
            }
        });
    }
    /*---------- Update column & content in responsive -----------*/
    function updateColumnsAndContent() {
        if ($(window).width() < 992) {
            $('.footer_collaps').hide();
            $('#column-left, #column-right').insertAfter('#content');
        } else {
            $('.footer_collaps').show();
            $('#column-right').insertAfter('#content');
        $('#column-left').insertBefore('#content');
        }
    }

    $(document).ready(function () {
        // home banner slider
        var owl = $('.owl-carousel-banner');
        owl.owlCarousel({
            padding: 0,
            margin: 0,
            loop: true,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
            autoplay: true,
            animateOut: 'fadeOut',
            autoplayTimeout: 3000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        })

        /* Responsive Menu */
        $("#show-header_menu").click(function () {
            $('.slotclub-menu .main-menu-outer').toggleClass('main-menu-active');
            $('body').addClass('active');
        });

        $(".slotclub-menu .menu-title i").click(function () {
            $('.slotclub-menu .main-menu-outer').removeClass('main-menu-active');
            $('body').removeClass('active');
        });


        var headerfixed = 1;
        if (headerfixed == 1) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 160) {
                    $('header').addClass('header-fixed');
                } else {
                    $('header').removeClass('header-fixed');
                }
            });
        }
        else {
            $('header').removeClass('header-fixed');
        }
        // Scroll to Top 
        function backToTop() {
            //Check to see if the window is top if not then display button
            $(".scrollToTop").hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 250) {
                    $('.scrollToTop').fadeIn();
                } else {
                    $('.scrollToTop').fadeOut();
                }
            });
            //Click event to scroll to top
            $('.scrollToTop').on('click', function () {
                $('html, body').animate({ scrollTop: 0 }, 800);
                return false;
            });
        }

        // footer
        footerExplanCollapse();
        // Back to top
        backToTop();

    })
    jQuery(window).resize(function () {
        updateColumnsAndContent();
    });

    $(document).ready(function () {

        // contact page submit massage
        if (window.location.href.indexOf('submitted=true') !== -1) {
            $('.submitted').show();
        }
        updateColumnsAndContent();
    })

})(jQuery);