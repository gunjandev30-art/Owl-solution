(function ($) {
  
  if ($('.owl-carousel').length > 0) {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        767: {
          items: 2,
          nav: true,
          loop: false,
        },
        1000: {
          items: 3,
          nav: true,
          loop: false,
        },
        1550: {
          items: 4,
          nav: true,
          loop: false,
        },
      },
    });
  }
  
  
  $(function () {
    $(".marquee_slider").slick({
      speed: 3000,
      autoplay: true,
      autoplaySpeed: 0,
      centerMode: false,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      buttons: false,
    });

    $(".company_logo").hover(
      function () {
        // On mouse enter, blur all slides except the hovered one
        $(this).siblings().addClass("blur");
        // Pause the slider immediately
        $(".marquee_slider").slick("slickPause").addClass("slick-paused");
      },
      function () {
        // On mouse leave, remove the blur from all slides
        $(this).siblings().removeClass("blur");
        // Resume the slider
        $(".marquee_slider").slick("slickPlay").removeClass("slick-paused");
      }
    );
  });

  function initializeSlick() {
    $(".hire-me-silder").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      margin: "10px",
      infinite: false,
      prevArrow:
        '<button class="slick-prev custom_prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65802 12.3257C0.236669 11.9038 0 11.3319 0 10.7357C0 10.1394 0.236669 9.56757 0.65802 9.14569L9.14202 0.658691C9.56411 0.236797 10.1365 -0.00014059 10.7333 6.25852e-08C11.0288 6.97065e-05 11.3214 0.0583413 11.5944 0.171488C11.8674 0.284635 12.1154 0.450441 12.3243 0.65944C12.5332 0.868439 12.6989 1.11654 12.8119 1.38957C12.9249 1.6626 12.983 1.95522 12.983 2.25072C12.9829 2.54622 12.9246 2.83881 12.8115 3.11179C12.6983 3.38477 12.5325 3.63279 12.3235 3.84169L5.43102 10.7357L12.325 17.6297C12.54 17.8371 12.7115 18.0853 12.8296 18.3598C12.9476 18.6342 13.0098 18.9295 13.0126 19.2282C13.0153 19.527 12.9585 19.8233 12.8455 20.0998C12.7325 20.3764 12.5656 20.6277 12.3544 20.8391C12.1433 21.0504 11.8921 21.2176 11.6157 21.3309C11.3392 21.4441 11.0429 21.5012 10.7442 21.4987C10.4454 21.4963 10.1502 21.4344 9.8756 21.3166C9.60103 21.1988 9.35268 21.0275 9.14502 20.8127L0.65502 12.3257H0.65802Z" fill="#767676"/></svg></button>',
      nextArrow:
        '<button class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65802 12.3257C0.236669 11.9038 0 11.3319 0 10.7357C0 10.1394 0.236669 9.56757 0.65802 9.14569L9.14202 0.658691C9.56411 0.236797 10.1365 -0.00014059 10.7333 6.25852e-08C11.0288 6.97065e-05 11.3214 0.0583413 11.5944 0.171488C11.8674 0.284635 12.1154 0.450441 12.3243 0.65944C12.5332 0.868439 12.6989 1.11654 12.8119 1.38957C12.9249 1.6626 12.983 1.95522 12.983 2.25072C12.9829 2.54622 12.9246 2.83881 12.8115 3.11179C12.6983 3.38477 12.5325 3.63279 12.3235 3.84169L5.43102 10.7357L12.325 17.6297C12.54 17.8371 12.7115 18.0853 12.8296 18.3598C12.9476 18.6342 13.0098 18.9295 13.0126 19.2282C13.0153 19.527 12.9585 19.8233 12.8455 20.0998C12.7325 20.3764 12.5656 20.6277 12.3544 20.8391C12.1433 21.0504 11.8921 21.2176 11.6157 21.3309C11.3392 21.4441 11.0429 21.5012 10.7442 21.4987C10.4454 21.4963 10.1502 21.4344 9.8756 21.3166C9.60103 21.1988 9.35268 21.0275 9.14502 20.8127L0.65502 12.3257H0.65802Z" fill="#767676"/></svg></button>',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
      dots: false,
    });
  }

  $(window).on("load", function () {
    initializeSlick();

    $(".nextStep, .prevStep ").click(function () {
      $(".custom_prev").trigger("click");
    });
  });

  function work_page_slider() {
    $(".work-page-slider").slick({
      autoplay: true,
      // centerPadding: '60px',
      // centerMode: true,
      dots: false,
      prevArrow:
        '<button class="trig_click slick-prev slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1L1 10.5L11 20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow:
        '<button class="slick-next slick-arrow"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1L1 10.5L11 20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      responsive: [
        {
          breakpoint: 576,
          settings: {
            dots: true,
            arrows: false,
          },
        },
      ],
    });
  }

  if ($("body").hasClass("work-body")) {
    if ($(window).width() <= 991) {
      work_page_slider();
    }

    $(window).resize(function () {
      if ($(window).width() <= 991) {
        work_page_slider();
      }
    });
  }

  $(".main-div").click(function () {
    $(this).toggleClass("active-background");
  });
  $(".budget li").click(function () {
    $(this).toggleClass("active-background");
  });
})(jQuery);
// smooth scroll
// document.addEventListener("DOMContentLoaded", function () {
//   const lenis = new Lenis();
//   lenis.on("scroll", ScrollTrigger.update);
//   gsap.ticker.add((time) => {
//     lenis.raf(time * 1000);
//   });
//   gsap.ticker.lagSmoothing(0);
// });

const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 800);
});
//  feed button start
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".bubbly-button");

  if (button != null) {
    // Increase the number of bubbles to create a denser effect
    for (let i = 0; i < 40; i++) {
      const bubble = document.createElement("span");
      bubble.classList.add("bubble");

      // Randomly position bubbles horizontally within the button
      bubble.style.left = `${Math.random() * 100}%`;

      // Randomly assign a vertical end position to create multiple lines
      const verticalEndPosition = 70 + Math.random() * 20; // Between 70% to 90%
      bubble.style.setProperty("--bubble-end-top", `${verticalEndPosition}%`);

      // Set an animation delay to make bubbles drop one by one
      const delay = `${Math.random() * 0.5}s`; // Between 0 to 1.5 seconds
      bubble.style.animationDelay = delay;
      bubble.style.transitionDelay = delay;

      // Set a reverse delay for the rise animation to make bubbles disappear one by one
      bubble.style.animationDelay = delay;
      bubble.style.transitionDelay = delay;

      button.appendChild(bubble);
    }
  }
});
// feed button end
// hire me bird start
document.addEventListener("DOMContentLoaded", function () {
  var hireMeLink = document.querySelector(".hire-me");
  var birdNav = document.querySelector(".bird-svg-nav");
  if (hireMeLink != null) {
    hireMeLink.addEventListener("mouseenter", function () {
      birdNav.classList.add("hide-bird");
      birdNav.classList.add("bird-without-leg");
    });

    hireMeLink.addEventListener("mouseleave", function () {
      birdNav.classList.remove("hide-bird");
      birdNav.classList.remove("bird-without-leg");
    });
  }
  if (birdNav != null) {
    birdNav.addEventListener("mouseenter", function () {
      birdNav.classList.add("hide-bird");
    });

    birdNav.addEventListener("mouseleave", function () {
      birdNav.classList.remove("hide-bird");
    });
  }
});
// hire me boird end

document.addEventListener("mousemove", function (e) {
  // Check if viewport width is greater than 991px
  if (window.innerWidth <= 991) {
    return; // Exit function if viewport width is 991px or less
  }

  const eyes = document.querySelectorAll(".js_js");
  const circles = document.querySelectorAll(
    ".left-black-eye circle, .right-black-eye circle"
  );
  const maxOffsetX = 72;
  const maxOffsetY = 70;

  // Check if the mouse cursor is over any of the .js_js elements
  for (let i = 0; i < eyes.length; i++) {
    const rect = eyes[i].getBoundingClientRect();
    if (
      e.pageX >= rect.left &&
      e.pageX <= rect.right &&
      e.pageY >= rect.top &&
      e.pageY <= rect.bottom
    ) {
      // Mouse is over .js_js element, exit function
      return;
    }
  }

  // Mouse is not over .js_js element, continue with the script
  eyes.forEach((eye, index) => {
    const rect = eye.getBoundingClientRect();
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.pageY - eyeY, e.pageX - eyeX);
    let offsetX = Math.cos(angle) * 20; // Initial movement calculation
    let offsetY = Math.sin(angle) * 20; // Initial movement calculation

    // Constrain the offsets within the specified bounds
    offsetX = Math.max(-maxOffsetX, Math.min(maxOffsetX, offsetX));
    offsetY = Math.max(-maxOffsetY, Math.min(maxOffsetY, offsetY));

    // Apply the transform to the eye
    eye.style.transform = `translate(${offsetX}px, ${offsetY - 50}%)`; // Adjust for vertical center alignment

    // Move the circle along with the eye movement
    circles[index].style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
});

// hire me page start
// start //
$(".progress_holder:nth-child(1)").addClass("activated_step");

// Manage next and previous buttons //
$(".nextStep").click(function () {
  // button is inside fieldset so set current and next vars //
  current_fs = $(this).parents("fieldset");
  next_fs = $(this).parents("fieldset").next();
  // make sure all fields are filled in //
  var empty = current_fs.find("input.required-field").filter(function () {
    return this.value === "";
  });
  if (empty.length) {
    alert("Please fill in all fields.");
  } else {
    //show the next fieldset
    next_fs.fadeIn(150, "linear").addClass("current");
    //hide the current fieldset with style
    current_fs.fadeOut(0, "linear").removeClass("current");
    // change nav class //
    if ($("fieldset.current").attr("id") == "step2") {
      $(".progress_holder:nth-child(2)").addClass("activated_step");
    }
    if ($("fieldset.current").attr("id") == "step3") {
      $(".progress_holder:nth-child(3)").addClass("activated_step");
    }
    if ($("fieldset.current").attr("id") == "step4") {
      $(".progress_holder:nth-child(4)").addClass("activated_step");
    }
    if ($("fieldset.current").attr("id") == "step5") {
      $(".progress_holder:nth-child(5)").addClass("activated_step");
    }
    if ($("fieldset.current").attr("id") == "step6") {
      $(".progress_holder:nth-child(6)").addClass("activated_step");
    }
    if ($("fieldset.current").attr("id") == "step7") {
      $(".progress_holder:nth-child(7)").addClass("activated_step");
    }
  }
});
$(".prevStep").click(function (e) {
  e.preventDefault();
  current_fs = $(this).parents("fieldset");
  previous_fs = $(this).parents("fieldset").prev();
  //show the previous fieldset
  previous_fs.fadeIn(150, "linear");
  //hide the current fieldset with style
  current_fs.fadeOut(0, "linear");

  if ($(previous_fs).attr("id") == "step1") {
    $(".progress_holder:nth-child(2)").removeClass("activated_step");
  }
  if ($(previous_fs).attr("id") == "step2") {
    $(".progress_holder:nth-child(3)").removeClass("activated_step");
  }
  if ($(previous_fs).attr("id") == "step3") {
    $(".progress_holder:nth-child(4)").removeClass("activated_step");
  }
  if ($(previous_fs).attr("id") == "step4") {
    $(".progress_holder:nth-child(5)").removeClass("activated_step");
  }
});

// hire me page end

// document.addEventListener('DOMContentLoaded', function() {
//     var halfCircleDiv = document.querySelector('.half-cirkle-div');
//     var leftBlackEye = document.querySelector('.left-black-eye');
//     var rightBlackEye = document.querySelector('.right-black-eye');
//     var halfWidth = halfCircleDiv.offsetWidth / 2;
//     var halfHeight = halfCircleDiv.offsetHeight / 2;
//     var minTopPercent = 72; // Minimum top position in percentage

//     halfCircleDiv.addEventListener('mousemove', function(e) {
//         var mouseX = e.pageX - halfCircleDiv.offsetLeft;
//         var mouseY = e.pageY - halfCircleDiv.offsetTop;

//         var horizontalPercent = (mouseX - halfWidth) / halfWidth * 10;
//         var verticalPercent = (mouseY - halfHeight) / halfHeight * 10;

//         // Calculate the desired top position in pixels
//         var minTopPixels = halfCircleDiv.offsetHeight * minTopPercent / 100;
//         // Calculate the current top position in pixels
//         var currentTopPixels = mouseY - halfHeight + minTopPixels;
//         // Clamp vertical movement to start from minTopPercent
//         verticalPercent = Math.max(currentTopPixels / halfCircleDiv.offsetHeight * 100, minTopPercent);

//         leftBlackEye.style.left = 27 + horizontalPercent + '%';
//         leftBlackEye.style.top = verticalPercent + '%';

//         rightBlackEye.style.right = 27 - horizontalPercent + '%';
//         rightBlackEye.style.top = verticalPercent + '%';
//     });
// });

// Scroll to Top
function backToTop() {
  //Check to see if the window is top if not then display button
  $(".scrollToTop").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });
  //Click event to scroll to top
  $(".scrollToTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
}

//  thanks footer button
document.querySelectorAll(".gravityButton").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const h = rect.width / 2;

    const x = e.clientX - rect.left - h;
    const y = e.clientY - rect.top - h;

    const r1 = Math.sqrt(x * x + y * y);
    const r2 = (1 - r1 / h) * r1;

    const angle = Math.atan2(y, x);
    const tx = Math.round(Math.cos(angle) * r2 * 100) / 100;
    const ty = Math.round(Math.sin(angle) * r2 * 100) / 100;

    const op = r2 / r1 + 0.25;

    btn.style.setProperty("--tx", `${tx}px`);
    btn.style.setProperty("--ty", `${ty}px`);
    btn.style.setProperty("--opacity", `${op}`);
  });

  btn.addEventListener("mouseleave", (e) => {
    btn.style.setProperty("--tx", "0px");
    btn.style.setProperty("--ty", "0px");
    btn.style.setProperty("--opacity", `${0.25}`);
  });
});

// var tl = gsap.timeline();

// tl.to(".text-loader", {
//     opacity: 1,
//     duration: 0.07,
//     stagger: {
//         each: 0.14, //0.07 to show + 0.07 to hide = 0.14
//         repeat: 1,
//         yoyo: true
//     }
// })
//     .to(".loader", {
//         display: "none",
//     })
//     .to(".cntr-p", {
//         onStart: function () {
//             $(".cntr-p").scramble(2000, 50, "alphabet", true);

//         }
//     }, 'scr')
//     .to(".cntr-p2", {
//         onStart: function () {
//             $(".cntr-p2").scramble(2000, 50, "alphabet", true);

//         }
//     }, 'scr')
//     .to(".info", {
//         onStart: function () {
//             $(".info").scramble(2000, 50, "alphabet", true);

//         }
//     }, 'scr')
//     .to(".contact", {
//         onStart: function () {
//             $(".contact").scramble(2000, 50, "alphabet", true);

//         }
//     }, 'scr')

// var tl2 = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#one",
//         pin: true,
//         // markers: true,
//         start: "50% 50%",
//         end: "150% 50%",
//         scrub: true
//     }
// });

// tl2.to(".flex-p-content", {
//     scale: "0.8"
// })
//     .to("#one-text", {
//         top: "50%"
//     })

// gsap.timeline({
//     scrollTrigger: {
//         trigger: "#img-one",
//         start: "0% 90%",
//         end: "200% 90%",
//         scrub: true,
//         // markers: true,
//     }
// })
//     .to("#img-one", {
//         backgroundSize: "50%",
//     });

// gsap.timeline({
//     scrollTrigger: {
//         trigger: "#img-two",
//         start: "0% 90%",
//         end: "200% 90%",
//         scrub: true,
//         // markers: true,
//     }
// })
//     .to("#img-two", {
//         backgroundSize: "50%",
//     });

// gsap.timeline({
//     scrollTrigger: {
//         trigger: "#img-three",
//         start: "0% 90%",
//         end: "200% 90%",
//         scrub: true,
//         // markers: true,
//     }
// })
//     .to("#img-three", {
//         backgroundSize: "50%",
//     });

// gsap.timeline({
//     scrollTrigger: {
//         trigger: "#img-four",
//         start: "0% 90%",
//         end: "200% 90%",
//         scrub: true,
//         // markers: true,
//     }
// })
//     .to("#img-four", {
//         backgroundSize: "50%",
//     });

// gsap.timeline({
//     scrollTrigger: {
//         trigger: "#img-five",
//         start: "0% 90%",
//         end: "200% 90%",
//         scrub: true,
//         // markers: true,
//     }
// })
//     .to("#img-five", {
//         backgroundSize: "50%",
//     });

// gsap.timeline({
//     scrollTrigger: {
//         trigger: "#img-six",
//         start: "0% 90%",
//         end: "200% 90%",
//         scrub: true,
//         // markers: true,
//     }
// })
//     .to("#img-six", {
//         backgroundSize: "50%",
//     });

// gsap.timeline({
//     scrollTrigger: {
//         trigger: "#img-seven",
//         start: "0% 90%",
//         end: "200% 90%",
//         scrub: true,
//         // markers: true,
//     }
// })
//     .to("#img-seven", {
//         backgroundSize: "50%",
//     });

// gsap.timeline({
//     scrollTrigger: {
//         trigger: "#last",
//         start: "0% 90%",
//         end: "200% 90%",
//         scrub: true,
//         // markers: true,
//     }
// })
//     .to(".flex-p-content", {
//         scale: "1.2",
//     });

// city content tab start
const tabs = document.querySelectorAll(".work-page .navtab");
const contents = document.querySelectorAll(".work-page .content");
const underline = document.querySelector(".work-page .underline");
console.log("tabs", tabs);
// function updateUnderline() {
//   const activeTab = document.querySelector('.work-page .navtab.active');
//   underline.style.width = `${activeTab.offsetWidth}px`;
//   underline.style.left = `${activeTab.offsetLeft}px`;
// }

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const target = tab.getAttribute("data-target");

    contents.forEach((content) => {
      if (content.id === target) {
        content.classList.add("active");
        content.style.display = "block";
        setTimeout(() => {
          //   content.style.opacity = '1';
        }, 300);
      } else {
        // content.style.opacity = '0';
        setTimeout(() => {
          content.classList.remove("active");
          content.style.display = "none";
        }, 300);
      }
    });
    // updateUnderline();
  });
});

var header = document.getElementById("nav_ul");
if (header !== null) {
  var btns = header.getElementsByClassName("nav-item");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
}
