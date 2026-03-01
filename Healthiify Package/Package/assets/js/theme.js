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

})(jQuery);

// home banner slider

var owl = $('.owl-carousel-banner');
owl.owlCarousel({
    padding: 0,
    margin: 0,
    loop: true,
    nav: true,
    dots: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
    autoplay: true,
    animateOut: 'fadeOut',
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// category slider
var owl2 = $('.owl-carousel-cat');
owl2.owlCarousel({
    margin: 30,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
    dots: false,
    autoplay: false,
    animateOut: 'fadeOut',
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            margin: 10
        },
        576: {
            items: 3,
            margin: 10
        },
        768: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

// product slider_1
var owl2 = $('.owl-carousel-product');
owl2.owlCarousel({
    margin: 30,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
    dots: false,
    autoplay: false,
    animateOut: 'fadeOut',
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            margin: 10
        },
        541: {
            items: 3,
            margin: 10
        },
        992: {
            items: 4
        },
        1200: {
            items: 4
        }
    }
})

// <!-- testimonial -->
var owl2 = $('.owl-carousel-testimonial');
owl2.owlCarousel({
    margin: 0,
    loop: true,
    nav: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
    dots: true,
    autoplay: false,
    animateOut: 'fadeOut',
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        }
    }
})

//blog
var owl = $('.owl-carousel-blog');
owl.owlCarousel({
    padding: 0,
    margin: 30,
    loop: true,
    nav: true,
    dots: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
    autoplay: false,
    animateOut: 'fadeOut',
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
})


// manufacture
var owl2 = $('.owl-carousel-manufacturer');
owl2.owlCarousel({
    margin: 0,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
    dots: false,
    autoplay: true,
    animateOut: 'fadeOut',
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2
        },
        426: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 5
        },
        1200: {
            items: 6
        }
    }
})

// product page slider
var owl2 = $('.additional-carousel');
owl2.owlCarousel({
    margin: 10,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
    dots: false,
    autoplay: false,
    animateOut: 'fadeOut',
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2
        },
        380: {
            items: 3
        }
    }
})

/*----------
  Set header(991)
  ----------*/
function responsiveheader() {
    var this_window_width = $(window).width();
    if (this_window_width <= 991) {
        // alert("<991");
        $('.header-center').insertBefore('.search-content');
    }
    else if (this_window_width <= 1199 && this_window_width >= 992) {
        $('.header-center').insertAfter('.header-inner');
    }
    else {
        $('.header-center').insertBefore('.header-right');

    }
}

/*----------
Footer Toggle
----------*/
function footerExplanCollapse() {
    $(".footer-top h5").addClass('toggled');
    $('.footer-top .toggled').on('click', function (e) {
        e.preventDefault();
        if ($(window).width() < 992) {
            $(this).toggleClass('active');
            $(this).parent().find('ul').toggleClass('active').toggle('slow');
        }
    });
}

// header cart
function set_cart_scroll() {
    var header_height = $("header").height();
    var screen_height = $(window).height();
    var cart_list_height = $("#cart .dropdown-menu .table-striped").height();
    var cart_total_height = $("#cart .dropdown-menu li+li").height();
    var cart_div_height = parseInt(cart_list_height) + parseInt(cart_total_height) + 10;
    var cart_div_max_height = parseInt(screen_height) - parseInt(header_height);
    var cart_total_pro = jQuery('.cart-content-product table tr').length;
    if (screen_height < cart_div_height) {
        $("#cart .dropdown-menu ul").css({ "overflow-y": "unset", "max-height": "unset" });
        $("ul.dropdown-menu.header-cart-toggle").addClass("scroll_cart_dropdown").css({ "overflow-y": "auto", "max-height": cart_div_max_height + "px" });
    } else {
        $("ul.dropdown-menu.header-cart-toggle").removeClass("scroll_cart_dropdown").css({ "overflow-y": "unset", "max-height": "unset" });
        $("#cart .dropdown-menu ul").css({ "overflow-y": "auto", "max-height": "240px" });
    }
}

// shop page
$(function () {
    $(".parent .fa.fa-plus").remove();
    $(".parent .toggled").append("<i class='fa fa-plus'></i>");
    $('.parent .toggled').click(function (e) {
        e.preventDefault();
        if (!$(this).parent().hasClass('active')) {
            $('+ ul', $('a.list-group-item.main-item')).slideUp();
            $('a.list-group-item.main-item').removeClass('active');
        }
        $(this).parent().toggleClass('active');
        $('+ ul', $(this).parent()).slideToggle('slow');
        return false;
    });

    $("#cart button.dropdown-toggle").on('click', function () {
        $(".header-cart-toggle").slideToggle("2000");
        $(".account-link-toggle, .currency-dropdown, .language-dropdown").slideUp("slow");
        setTimeout(function () { set_cart_scroll(); }, 500);
        return false;
    });
});

/*----------
    Update column & content in responsive
-----------*/
function updateColumnsAndContent() {
    if ($(window).width() < 992) {
        $('#column-left, #column-right').insertAfter('#content');

        // left, right
        $("#column-left .box-category .toggle-open, #column-right .box-category .toggle-open, #column-left .box-content .toggle-open, #column-right .box-content .toggle-open").remove();
        $("#column-left .box-category h3, #column-right .box-category h3, #column-left .box-content h3, #column-right .box-content h3").append("<span class='toggle-open'><i class='fa fa-chevron-down'></i></span>");
        $('#column-left ul.parent, #column-right ul.parent, #column-left .block_box, #column-right .block_box, #column-left .box-content ul, #column-right .box-content ul, #column-left .filter_box, #column-right .filter_box,footer ul').hide();

    } else {
        $('#column-right').insertAfter('#content');
        $('#column-left').insertBefore('#content');

        // left, right
        $("#column-left .box-category .toggle-open, #column-left .box-content .toggle-open").remove();
        $("#column-right .box-category .toggle-open, #column-right .box-content .toggle-open").remove();
        $('#column-left ul.parent, #column-right ul.parent, #column-left .block_box, #column-right .block_box, #column-left .box-content ul, #column-right .box-content ul, #column-left .filter_box, #column-right .filter_box,footer ul').show();
    }

}
/*----------
Category page click events (sidebar)
----------*/
function clickEventsInCategoryPage() {
    $('.box-category .toggled').on('click', function (e) {
        e.preventDefault();
        if ($(window).width() < 992) {
            $(this).toggleClass('active');
            $(this).parent().find('ul.parent').toggleClass('active').slideToggle('slow');
        }
    });

    $('#column-left .box-content .toggled').on('click', function (e) {
        e.preventDefault();
        if ($(window).width() < 992) {
            $(this).toggleClass('active');
            if ($(this).parent().find('ul').length != 0) {
                $(this).parent().find('ul').toggleClass('active').slideToggle('slow');
            } else {
                $(this).parent().find('.filter_box').toggleClass('active').slideToggle('slow');
                $(this).parent().find('.block_box').toggleClass('active').slideToggle('slow');
            }
        }
    });

    $('#column-right .box-content .toggled').on('click', function (e) {
        e.preventDefault();
        if ($(window).width() < 992) {
            $(this).toggleClass('active');
            if ($(this).parent().find('ul').length != 0) {
                $(this).parent().find('ul').toggleClass('active').slideToggle('slow');
            } else {
                $(this).parent().find('.filter_box').toggleClass('active').slideToggle('slow');
                $(this).parent().find('.block_box').toggleClass('active').slideToggle('slow');
            }
        }
    });
}
/*----------
quantity seter
----------*/
$(document).on('click', '.plus, .minus', function (e) {
    e.preventDefault();
    var parent = $(this).parents('.product-btn-quantity');
    var quantity = parent.find('[name="quantity"]');
    var val = quantity.val();
    if ($(this).hasClass('plus')) {
        val = parseInt(val) + 1;
    } else {
        if (val == 1) {
            val = 1;
        }
        else {
            val = val >= 1 ? parseInt(val) - 1 : 0;
        }
    }
    quantity.val(val);
    quantity.trigger("change");
    return false;
});

$(document).ready(function () {

    // navbar 
    $(".currency_name").click(function () {
        $(".currency_list").slideToggle("slow");
    });

    $("#search_icon").click(function () {
        $("#input_group").slideToggle("slow");
        $("#search_icon").toggleClass('active')
    });
    // Product List
    $('#button-list').on('click', function () {
        var element = this;

        $('#product-list').attr('class', 'row row-cols-1 product-list');

        $('#button-grid').removeClass('active');
        $('#button-list').addClass('active');

        localStorage.setItem('display', 'list');
    });
    // Product Grid
    $('#button-grid').on('click', function () {
        var element = this;

        $('#product-list').attr('class', 'product-grid row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3');

        $('#button-list').removeClass('active');
        $('#button-grid').addClass('active');

        localStorage.setItem('display', 'grid');
    });

    // Local Storage
    if (localStorage.getItem('display') == 'list') {
        $('#product-list').attr('class', 'row row-cols-1 product-list');
        $('#button-list').addClass('active');
    } else {
        $('#product-list').attr('class', 'product-grid row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3');
        $('#button-grid').addClass('active');
    }

    // Product-Page onclick to open reviwe section
    $(".write-review").on('click', function (event) {
        $('a[href=\'#tab-review\']').tab('show');
        $('body,html').animate({
            scrollTop: $('.propage-tab').offset().top
        }, 500);
        return false;
    })

    updateColumnsAndContent();

    clickEventsInCategoryPage();

    responsiveheader()
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

    responsiveheader();

    // Back to top
    backToTop();

});

$(window).resize(function () {
    responsiveheader();
});

jQuery(window).resize(function () {
    updateColumnsAndContent();
});

$(document).on('click', function () {
    $(".header-cart-toggle, .currency-dropdown, .language-dropdown, .account-link-toggle").slideUp('slow')
});

// product page slider

jQuery(".additional-carousel a.elevatezoom-gallery").click(function (e) {
    e.preventDefault();
    var this_img_src = jQuery(this).attr("data-zoom-image");
    jQuery("#prozoom").attr("src", this_img_src);
    return;
});

(function ($) {
    'use strict';
    if (window.location.href.indexOf('submitted=true') !== -1) {
        console.log("run")
        $('.submitted').show();
    }

})(jQuery);