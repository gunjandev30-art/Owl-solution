// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ScrollTrigger.normalizeScroll(true);

// let smoother = ScrollSmoother.create({
//     smooth: 5,  // Default smooth value
//     effects: true,
//     normalizeScroll: true
// });

// let lastScrollTop = 0;
// let upScrollSpeed = 2; // Adjust this value for up scroll speed
// let downScrollSpeed = 5; // Adjust this value for down scroll speed

// window.addEventListener("scroll", function () {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollTop > lastScrollTop) {
//         // Down scroll
//         smoother.smooth(downScrollSpeed);
//     } else {
//         // Up scroll
//         smoother.smooth(upScrollSpeed);
//     }
//     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
// });

// console.clear();

// gsap.registerPlugin(ScrollTrigger);

// const panels = gsap.utils.toArray(".panel");
// const contentoEls = gsap.utils.toArray(".animcontento");
    
// const toggleReveal = (index) => {
//     const next = contentoEls[index];
//     const prev = contentoEls[index - 1];
//     next && next.classList.toggle("revealed");
//     prev && prev.classList.toggle("revealed");
// };

// gsap.set(panels, {
//     yPercent: (i) => (i ? 100 : 0)
// });
// gsap.set(contentoEls, {
//     yPercent: (i) => (i ? 100 : 0)
// });

// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".sections",
//         start: "top top",
//         end: () => "+=" + 100 * panels.length + "%",
//         pin: true,
//         scrub: 1
//     }
// });

// panels.forEach((panel, index) => {
//     if (index) {
//         tl.to(
//             panel,
//             {
//                 yPercent: 0,
//                 ease: "none"
//             },
//             "+=0.25" // This creates the pause or wait between panels
//         );
//         tl.to(
//             contentoEls[index],
//             {
//                 yPercent: 0,
//                 ease: "none"
//             },
//             "<"
//         );
//         if (contentoEls[index] && index != 0) {
//             tl.call(toggleReveal, [index], "<+=0.1");
//         }
//     } else if (index == 0) {
//         return;
//     } else {
//         tl.call(toggleReveal, [index], 0.01);
//     }
// });