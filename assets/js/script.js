
//Slider Footer
var swiper = new Swiper(".partnerSwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    speed: 3000,

    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },

    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        }
    }
});

// Testimonals Section

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {

    const cards = gsap.utils.toArray(".cards_section .custom-card");

    // First card ko chhodkar sab 40% niche
    cards.forEach((card, index) => {
        if (index > 0) {
            gsap.set(card, {
                yPercent: 90,
                scale: 1,
                opacity: 1
            });
        }
    });

    // const tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".testimonial-section",
    //         pin: ".cards_section",
    //         start: "top+=50 top",
    //         end: `+=${cards.length * 300}`,
    //         scrub: 1,
    //         pinSpacing: false
    //     }
    // });
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".testimonial-section",
        pin: ".cards_section",
        start: "top+=50 top",
        end: `+=${cards.length * 300}`,
        scrub: 1,pinSpacing: false,
        anticipatePin: 1
    }
});
    cards.forEach((card, index) => {

        if (index === cards.length - 1) return;

        tl.to(card, {
            scale: 0.9,
            opacity: 0.5,
            duration: 1
        })
        .to(cards[index + 1], {
            yPercent: 0,
            duration: 1
        }, "<");

    });

    ScrollTrigger.refresh();

});
// gsap.registerPlugin(ScrollTrigger);

// window.addEventListener("DOMContentLoaded", () => {

//     const testimonialCards = gsap.utils.toArray(".cards_section .testimonial-card");

//     // Hide all except first card
//     testimonialCards.forEach((card, index) => {

//         if (index > 0) {
//             gsap.set(card, {
//                 yPercent: 100,
//                 opacity: 1,
//                 scale: 1
//             });
//         }

//     });

//     const testimonialTimeline = gsap.timeline({

//         scrollTrigger: {
//             trigger: ".testimonial-section",
//             pin: ".cards_section",
//             start: "top top",
//             end: `+=${testimonialCards.length * 800}`,
//             scrub: 1,
//             pinSpacing: true,
//             anticipatePin: 1,
//             invalidateOnRefresh: true,
//             // markers: true
//         }

//     });

//     testimonialCards.forEach((card, index) => {

//         if (index === testimonialCards.length - 1) return;

//         testimonialTimeline
//             .to(card, {
//                 scale: 0.9,
//                 opacity: 0.5,
//                 duration: 1
//             })
//             .to(testimonialCards[index + 1], {
//                 yPercent: 0,
//                 duration: 1
//             }, "<");

//     });

//     ScrollTrigger.refresh();

// });
// gsap.registerPlugin(ScrollTrigger);

// const cards = gsap.utils.toArray(".custom-card");

// // hide all except first
// cards.forEach((card, index) => {

//   if(index > 0){
//     gsap.set(card,{
//       yPercent:100,
//       opacity:1,
//       scale:1
//     });
//   }

// });

// let tl = gsap.timeline({
//   scrollTrigger:{
//     trigger:".cards",
//     start:"top top",
//     end:`+=${cards.length * 1000}`,
//     pin:true,
//     scrub:1
//   }
// });

// cards.forEach((card,index)=>{

//   if(index === cards.length - 1) return;

//   const nextCard = cards[index + 1];

//   tl.to(card,{
//       scale:0.9,
//       opacity:0.5,
//       duration:1
//   })

//   .to(nextCard,{
//       yPercent:0,
//       duration:1
//   },"<");

// });



// gsap.from(".graph-item",{
//     scaleY:0,
//     transformOrigin:"bottom",
//     duration:1.5,
//     stagger:0.2,
//     ease:"power4.out",
//     scrollTrigger:{
//         trigger:".bars-wrapper",
//         start:"top 80%"
//     }
// });

// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".graph-img").forEach((item, index) => {

//     gsap.fromTo(
//         item,
//         {
//             y: 200,
            
//         },
//         {
//             y: 0,
            
//             duration: 1.1,
//             ease: "power3.out",

//             scrollTrigger: {
//                 trigger: item,
//                 start: "top 85%",
//                 end: "bottom 20%",
//                 scrub: 1
//             }
//         }
//     );

// });


// Grapiic Section
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {

    gsap.fromTo(".graph-img",
        {
            y: 150,
            scale: 1.09,
            opacity: 1
        },
        {
            y: 0,
            scale: 1,
            opacity: 1,
            stagger: 1.09,      // 0.08 → 0.02 (faster)
            ease: "none",
            scrollTrigger: {
                trigger: ".why-choose-section",
                start: "top 70%",     // jaldi start
                end: "top 45%",       // chhota scroll distance = fast animation
                scrub: 0.2,           // 1.2 → 0.2 (bahut fast response)
                invalidateOnRefresh: true,
                // markers: true
            }
        }
    );

});

// gsap.registerPlugin(ScrollTrigger);

// window.addEventListener("DOMContentLoaded", () => {

//     gsap.fromTo(".graph-img",
//         {
//             y: 150,
//             scale: 1.04,
//             opacity: 1
//         },
//         {
//             y: 0,
//             scale: 1,
//             opacity: 1,
//             stagger: 0.08,
//             ease: "none",
//             scrollTrigger: {
//                 trigger: ".why-choose-section",
//                 start: "top 85%",
//                 end: "bottom 40%",
//                 scrub:1.2,   // ya scrub: 0.1
//                 invalidateOnRefresh: true,
//                 // markers: true
//             }
//         }
//     );

// });




// Card Ecllipse

// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".bg-reveal").forEach((bg) => {

//     gsap.fromTo(
//         bg,
//         {
//             clipPath: "ellipse(150% 0% at 50% 0%)"
//         },
//         {
//             clipPath: "ellipse(120% 90% at 50% 0%)",
//             ease: "none",
//             scrollTrigger: {
//                 trigger: bg.closest(".cs-card"),
//                 start: "top 85%",
//                 end: "bottom 40%",
//                 scrub: true
//             }
//         }
//     );

// });
gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".bg-reveal").forEach((bg) => {
//     gsap.fromTo(
//         bg,
//         {
//             clipPath: "ellipse(150% 0% at 50% 0%)"
//         },
//         {
//             clipPath: "ellipse(150% 150% at 50% 0%)",
//             ease: "none",
//             scrollTrigger: {
//                 trigger: bg.closest(".cs-card"),
//                 start: "top 90%",  
//                 end: "bottom 20%", 
//                 scrub: 1,
//                 // Isse screen par indicators dikhenge ki scroll kahan touch ho raha hai
//                 // markers: true 
//             }
//         }
//     );
// });




// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".bg-reveal").forEach((bg) => {

//     gsap.fromTo(
//         bg,
//         {
//             clipPath: "circle(25px at 50% 0%)"
//         },
//         {
//             clipPath: "circle(150% at 50% 0%)",
//             ease: "none",
//             scrollTrigger: {
//                 trigger: bg.closest(".cs-card"),
//                 start: "top 80%",
//                 end: "bottom 30%",
//                 scrub: true
//             }
//         }
//     );

// }); 
// gsap.registerPlugin(ScrollTrigger);

//     // Har .bg-reveal par loop chalayein
//     gsap.utils.toArray(".bg-reveal").forEach((bg) => {
//         const card = bg.closest(".cs-card");

//         gsap.fromTo(
//             bg,
//             {
//                 clipPath: "ellipse(150% 0% at 50% 0%)" // Shuruat me background chhupa rahega
//             },
//             {
//                 clipPath: "ellipse(150% 150% at 50% 0%)", // Scroll karne par poora khulega
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: card,
//                     scroller: ".scroll-strip", // FIXED: Ab yeh main window ko nahi, balki slider box ke scroll ko track karega
//                     horizontal: true,          // FIXED: Yeh batata hai ki scroll left-to-right chal raha hai
//                     start: "left 95%",         // Jab card right side se screen me aaye
//                     end: "right 20%",          // Jab card left side se screen ke bahar jaye
//                     scrub: 1                   // Animation smoothly finger/mouse ke sath scroll hogi
//                 }
//             }
//         );
//     });

// Jab poora page load ho jaye, tabhi code chale
window.addEventListener("DOMContentLoaded", () => {
    
    // Check karein ki kya GSAP load hua hai
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".bg-reveal").forEach((bg) => {
            const card = bg.closest(".cs-card");

            gsap.fromTo(bg,
                { clipPath: "ellipse(46.8864% 22.5867% at 50% 0%)" },
                {
                    clipPath: "ellipse(150% 150% at 50% 0%)",
                    ease: "none",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",    // Jab card screen me aaye
                        end: "bottom 30%",   // Jab card screen se jaane lage
                        scrub: true          // Scroll ke sath smoothly chalega
                    }
                }
            );
        });
    } else {
        // FALLBACK: Agar GSAP load nahi bhi hua, toh normal scroll check karega
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const bg = entry.target.querySelector(".bg-reveal");
                if (bg) {
                    if (entry.isIntersecting) {
                        bg.style.transition = "clip-path 0.8s ease-out";
                        bg.style.clipPath = "ellipse(150% 150% at 50% 0%)";
                    } else {
                        bg.style.clipPath = "ellipse(150% 0% at 50% 0%)";
                    }
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll(".cs-card").forEach(card => observer.observe(card));
    }
});


// Adds Section
// gsap.registerPlugin(ScrollTrigger);

// const sections = [
//   {
//     tab: document.querySelector('[data-bs-target="#paidads"]'),
//     content: document.querySelector('#paid-content'),
//     pane: document.querySelector('#paidads')
//   },
//   {
//     tab: document.querySelector('[data-bs-target="#seo"]'),
//     content: document.querySelector('#seo-content'),
//     pane: document.querySelector('#seo')
//   },
//   {
//     tab: document.querySelector('[data-bs-target="#smm"]'),
//     content: document.querySelector('#smm-content'),
//     pane: document.querySelector('#smm')
//   }
// ];

// let currentIndex = -1;

// function activateSection(index) {

//   if (currentIndex === index) return;
//   currentIndex = index;

//   // Remove active
//   sections.forEach(item => {
//     item.tab.classList.remove("active");
//     item.content.classList.remove("active");
//     item.pane.classList.remove("show", "active");

//     gsap.set(item.content, {
//       display: "none",
//       opacity: 0
//     });
//   });

//   // Add active
//   const active = sections[index];

//   active.tab.classList.add("active");
//   active.content.classList.add("active");
//   active.pane.classList.add("show", "active");

//   gsap.set(active.content, {
//     display: "block"
//   });

//   // Text Animation
//   gsap.fromTo(
//     active.content,
//     {
//       opacity: 0,
//       y: 30
//     },
//     {
//       opacity: 1,
//       y: 0,
//       duration: 0.6,
//       ease: "power3.out"
//     }
//   );

//   // List Animation
//   gsap.from(active.content.querySelectorAll("li"), {
//     opacity: 0,
//     x: -30,
//     stagger: 0.1,
//     duration: 0.5
//   });

//   // Right Image/Lottie Animation
//   gsap.fromTo(
//     active.pane,
//     {
//       opacity: 0,
//       x: 80
//     },
//     {
//       opacity: 1,
//       x: 0,
//       duration: 0.8,
//       ease: "power3.out"
//     }
//   );
// }

// ScrollTrigger.create({
//   trigger: ".services-section",
//   start: "top top",
//   end: "+=1500",
//   pin: true,
//   scrub: true,

//   onUpdate: (self) => {

//     const progress = self.progress;

//     if (progress < 0.33) {
//       activateSection(0);
//     } else if (progress < 0.66) {
//       activateSection(1);
//     } else {
//       activateSection(2);
//     }
//   }
// });





// video Section Start
//         // Register ScrollTrigger Plugin
//         gsap.registerPlugin(ScrollTrigger);

//         // ==========================================
//         // 1. Background Color Change: Yellow to Orange
//         // ==========================================
//         gsap.to("#animatedSection", {
//             backgroundColor: "orange",  // Target Color
//             scrollTrigger: {
//                 trigger: "#animatedSection",
//                 start: "top center",      
//                 end: "bottom center",     // End when bottom of section hits center
//                 scrub: true,              // Smooth animation tied to scroll
//                 markers: false            // Set true for debugging
//             }
//         });

//         // ==========================================
//         // 2. Floating Boxes Animation
//         // ==========================================
//         gsap.from(".box", {
//             scale: 0,
//             rotation: 180,
//             opacity: 0,
//             duration: 1.5,
//             stagger: 0.2,
//             ease: "back.out(1.7)",
//             scrollTrigger: {
//                 trigger: "#animatedSection",
//                 start: "top 80%",
//                 toggleActions: "play none none reverse"
//             }
//         });

//         // ==========================================
//         // 3. Text Animation
//         // ==========================================
//         gsap.from("h1", {
//             y: -100,
//             opacity: 0,
//             duration: 1,
//             ease: "power3.out",
//             scrollTrigger: {
//                 trigger: "#animatedSection",
//                 start: "top 70%",
//                 toggleActions: "play none none reverse"
//             }
//         });

//         gsap.from("p", {
//             y: 50,
//             opacity: 0,
//             duration: 1,
//             delay: 0.3,
//             ease: "power3.out",
//             scrollTrigger: {
//                 trigger: "#animatedSection",
//                 start: "top 70%",
//                 toggleActions: "play none none reverse"
//             }
//         });

//         // ==========================================
//         // 4. Continuous Rotation of Boxes on Scroll
//         // ==========================================
//         gsap.to(".box", {
//             rotation: 360,
//             scrollTrigger: {
//                 trigger: "#animatedSection",
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: 2
//             }
//         });
    
// let tl = gsap.timeline();

// tl.from(".brand-box", {
//   scale: 0,
//   opacity: 0,
//   duration: 1,
//   ease: "elastic.out(1,0.5)"
// })

// .from(".email-card", {
//   x: 0,
//   y: 0,
//   scale: 0,
//   opacity: 0,
//   duration: 1,
//   ease: "back.out(2)"
// }, "-=0.4")

// .from(".ads-card", {
//   x: 0,
//   y: 0,
//   scale: 0,
//   opacity: 0,
//   duration: 1,
//   ease: "back.out(2)"
// }, "-=0.8");




// Ready Section Start



gsap.registerPlugin(ScrollTrigger);

        // ============================================
        // GSAP SCROLL ANIMATION - Background Color Change
        // ============================================
        
        // Animate background color from Yellow to Orange+Yellow mix
        gsap.to("#animatedSection", {
            background: " linear-gradient(135deg, #FF8C00 0%, #FFD700 50%, #FF6347 100%)" ,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: "#animatedSection",
                start: "top 80%",
                end: "center center",
                scrub: true,
            }
        });

        // Text animation
        gsap.from(".content-wrapper h1", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#animatedSection",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

       



  








// gsap.registerPlugin(ScrollTrigger);

// const slideHeight = 180;

// document.querySelectorAll(".process-item").forEach((item)=>{

//     const step = parseInt(item.dataset.step);

//     ScrollTrigger.create({
//         trigger:item,
//         start:"top 60%",
//         end:"bottom 40%",

//         onEnter:()=>{
//             animateNumber(step);
//         },

//         onEnterBack:()=>{
//             animateNumber(step);
//         }
//     });

// });

// function animateNumber(step){

//     gsap.to(".number-track",{
//         y: -(step - 1) * slideHeight,
//         duration:1.2,
//         ease:"power4.inOut"
//     });

// }

// ==========================================
// DATA SECTION START
// ==========================================
// document.addEventListener("DOMContentLoaded", function() {
  
//   gsap.registerPlugin(ScrollTrigger);

//   // 1. Stat Cards Parallax Timeline
//   gsap.timeline({
//     scrollTrigger: {
//       trigger: ".data-section",
//       start: "top 20%",      
//       end: "bottom 200%",        
//       scrub: 1.2,               
//     }
//   })
//   .from(".stat-card", {
   
//     y: (index) => (index % 2 === 0 ? -60 : 60),
//     opacity: 1,                 
//     duration: 1,
//     ease: "none"                
//   });

//   // 2. Headings aur Baaki Content Entrance Timeline
//   const contentTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".data-section",
//       start: "top 15%", 
//       toggleActions: "play none none reverse" 
//     }
//   });

//   contentTl.from(".logo-box", {
//     duration: 1.2,
//     scale: 0,
//     opacity: 1,
//     ease: "back.out(1.5)" 
//   }, 0)
//   .from(".main-heading", {
//     duration: 0.8,
//     y: 30,
//     opacity: 1,
//     stagger: 0.15,
//     ease: "power2.out"
//   }, 0.2)
//   .from(".highlight", {
//     duration: 0.8,
//     scale: 0,
//     opacity: 1, 
//     // ease: "back.out(1.5)"
//   }, 0.4)
//   .from(".sub-text", {
//     duration: 0.8,
//     y: -20,     
//     opacity: 1, 
//     // ease: "power2.out"
//   }, 0.5);

// });


// document.addEventListener("DOMContentLoaded", function() {
  
//   gsap.registerPlugin(ScrollTrigger);

//   // 1. Stat Cards Parallax Timeline (Fixed Trigger Spacing)
//   gsap.timeline({
//     scrollTrigger: {
//       trigger: ".data-section",
//       start: "top bottom",    // Jab section ka top view-port ke bottom par aaye
//       end: "bottom top",      // Jab section ka bottom view-port ke top se bahar nikal jaye
//       scrub: 1.2,              
//     }
//   })
//   .from(".stat-card", {
//     // Parallax dynamic movement amount thoda standard kiya taaki overflow na kare
//     y: (index) => (index % 2 === 0 ? -40 : 40),
//     duration: 1,
//     ease: "none"                
//   });

//   // 2. Headings & Center Logo Entrance Timeline
//   const contentTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".data-section",
//       start: "top 75%", // Viewport me enter hote hi animation chalega smoothly
//       toggleActions: "play none none reverse" 
//     }
//   });

//   contentTl.from(".logo-box", {
//     duration: 1.2,
//     scale: 0,
//     opacity: 0, // 1 se 0 kiya taaki fadeIn effect kaam kare
//     ease: "back.out(1.5)" 
//   }, 0)
//   .from(".main-heading", {
//     duration: 0.8,
//     y: 30,
//     opacity: 0, 
//     stagger: 0.15,
//     ease: "power2.out"
//   }, 0.2)
//   .from(".highlight", {
//     duration: 0.8,
//     scale: 0,
//     opacity: 0, 
//     ease: "back.out(1.5)"
//   }, 0.4)
//   .from(".sub-text", {
//     duration: 0.8,
//     y: 20,     
//     opacity: 0, 
//     ease: "power2.out"
//   }, 0.5);

// });


// document.addEventListener("DOMContentLoaded", function() {
  
//   gsap.registerPlugin(ScrollTrigger);

//   // 1. Stat Cards Parallax Timeline with 3D Transform
//   gsap.timeline({
//     scrollTrigger: {
//       trigger: ".data-section",
//       start: "top 190%",    // Jab section view-port ke bottom se enter karega
//       end: "bottom 5%",      // Jab section view-port ke top se bahar nikal jaye
//       scrub: 1,              
//     }
//   })
//   .from(".stat-card", {
//     // Dynamic Y offset + Inspect element ki 3D Z-index value (20px)
//     y: (index) => (index % 2 === 0 ? -40 : 40),
//     // z: 20,                    // Aapke inspect element ki 3D depth value
//     // force3D: true,            // Isse browser hamesha translate3d() use karega
//     duration: 1,
//     ease: "none"                
//   });

//   // 2. Headings & Center Logo Entrance Timeline
//   const contentTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".data-section",
//       start: "top 75%", 
//       toggleActions: "play none none reverse" 
//     }
//   });

//   contentTl.from(".logo-box", {
//     duration: 1.2,
//     scale: 0,
//     opacity: 0, 
//     ease: "back.out(1.5)" 
//   }, 0)
//   .from(".main-heading", {
//     duration: 0.8,
//     y: 30,
//     opacity: 0, 
//     stagger: 0.15,
//     ease: "power2.out"
//   }, 0.2)
//   .from(".highlight", {
//     duration: 0.8,
//     scale: 0,
//     opacity: 0, 
//     ease: "back.out(1.5)"
//   }, 0.4)
//   .from(".sub-text", {
//     duration: 0.8,
//     y: 20,     
//     opacity: 0, 
//     ease: "power2.out"
//   }, 0.5);

// });
// GSAP aur ScrollTrigger register karein
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    "(min-width: 992px)": function() {
        
        // Ek SINGLE timeline jo poore section ko control karegi
        const masterTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".data-section",
                start: "top bottom",  // Jab section screen ke bottom se enter kare
                end: "bottom top",    // Jab section poora top se bahar nikal jaye
                scrub: 1.5,           // Extra smoothness (no sudden jerks)
            }
        });

        // Step 1: Saare cards UPAR se NEECHE enter karenge apni actual position (0) par
        masterTl.fromTo([".scroll-up", ".scroll-down"], 
            { 
                y: "-120px",          // Starting position: upar hawa me
                opacity: 1 
            }, 
            { 
                y: "0px",             // Center me aakar rukenge
                opacity: 1, 
                duration: 1.9,
                stagger: 0.05         // Ek ke baad ek card aayega smoothly
            }
        )
        
        // Step 2: Beech me thoda sa delay (smooth hold) taaki elements ek sath overlap na lagein
        .to({}, { duration: 0.5 }) 

        // Step 3: Ab saare cards smoothly NEECHE se UPAR ki taraf nikal jayenge (Exit)
        .to([".scroll-up", ".scroll-down"], 
            { 
                y: "-150px",          // Screen se upar exit kar jayenge
                opacity: 1, 
                duration: 1.9,
                stagger: 0.03
            }
        );
    }
});

//Add section Start

document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);

    // ==========================================
    // ALL Clicks Permanently Disable
    // ==========================================
    // Target the unique trigger buttons
    document.querySelectorAll("#paid-ads-trigger, #seo-trigger, #smm-trigger").forEach((btn) => {
        btn.style.pointerEvents = "none";
        btn.style.cursor = "default";
        btn.removeAttribute("data-bs-toggle");
        btn.removeAttribute("data-bs-target");
        btn.removeAttribute("href");
    });

    // ==========================================
    // Initial Setup
    // ==========================================
    gsap.set(".tab-content", {
        position: "relative",
        minHeight: "500px",
        overflow: "visible"
    });

    // Ensure all unique graphic panes are stacked but hidden except the first one
    gsap.set(".tab-pane-unique", {
        position: "absolute",
        top: 0, 
        left: 0,
        width: "100%",
        autoAlpha: 0,
        display: "block",
        overflow: "visible"
    });

    // Initial State: Paid Ads graphic visible, Paid Ads accordion open
    gsap.set("#paid-ads-graphic", { autoAlpha: 1 });
    
    gsap.set("#paid-content-accordion", {
        display: "block",
        height: "auto",
        autoAlpha: 1,
        overflow: "visible"
    });

    // Accordion setup for others (start closed)
    gsap.set("#seo-content-accordion, #smm-content-accordion", {
        display: "block",
        height: 0,
        autoAlpha: 0,
        overflow: "visible"
    });

    // Nav colors initial state
    // gsap.set(".services-section .nav-pills .nav-link", { color: "#000" });
    // gsap.set("#paid-ads-trigger", { color: "#022d63" });

   
  const animationFlow = gsap.timeline({
    scrollTrigger: {
        trigger: ".services-section",
        start: "top top",
        end: "+=4000",
        pin: true,
        scrub: 1.9,
        invalidateOnRefresh: true
    }
});




    // Right side panel subtle movement logic
    animationFlow.fromTo(".tab-content", { y: -20 }, { y: 20, ease: "none" }, 0);

    // Paid Ads view hold gap
    animationFlow.to({}, { duration: 2 }); 

    // ==========================================
    // STEP 1: Paid → SEO
    // ==========================================

    // Smoothly close Paid Ads accordion
    animationFlow.to("#paid-content-accordion", {
        height: 0,
        autoAlpha: 0,
        duration: 0.4,
        // ease: "power2.inOut"
    }, "s1_close");

    // CROSS-FADE: Paid Ads graphic goes away, SEO graphic appears
    animationFlow.to("#paid-ads-graphic", { autoAlpha: 0, duration: 0.6, ease: "power2.inOut" }, "s1_close")
      .to("#seo-graphic",      { autoAlpha: 1, duration: 0.6, ease: "power2.inOut" }, "s1_close");

    // Nav text color transition
    // animationFlow.to("#paid-ads-trigger", { color: "#000",    duration: 0.5 }, "s1_close")
    //   .to("#seo-trigger",      { color: "#022d63", duration: 0.5 }, "s1_close");

    // Smoothly open SEO accordion
    animationFlow.to("#seo-content-accordion", {
        height: "auto",
        autoAlpha: 1,
        overflow: "visible",
        duration: 0.4,
        ease: "power2.inOut"
    }, "s1_close+=0.1");

    // SEO view hold gap
    animationFlow.to({}, { duration: 2 }); 

    // ==========================================
    // STEP 2: SEO → SMM
    // ==========================================

    // Smoothly close SEO accordion
    animationFlow.to("#seo-content-accordion", {
        height: 0,
        autoAlpha: 0,
        duration: 0.4,
        // ease: "power2.inOut"
    }, "s2_close");

    // CROSS-FADE: SEO graphic goes away, SMM graphic appears
    animationFlow.to("#seo-graphic", { autoAlpha: 0, duration: 0.6, ease: "power2.inOut" }, "s2_close")
      .to("#smm-graphic", { autoAlpha: 1, duration: 0.6, ease: "power2.inOut" }, "s2_close");

    // Nav text color transition
    // animationFlow.to("#seo-trigger", { color: "#000",    duration: 0.5 }, "s2_close")
    //   .to("#smm-trigger", { color: "#022d63", duration: 0.5 }, "s2_close");

    // Smoothly open SMM accordion
    animationFlow.to("#smm-content-accordion", {
        height: "auto",
        autoAlpha: 1,
        overflow: "visible",
        duration: 0.4,
        // ease: "power2.inOut"
    }, "s2_close+=0.1");

    // Final state hold gap
    animationFlow.to({}, { duration: 1}); 
});




// Video Section Start Section 

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    // --- 1. CENTER BRAND BOX: Upar se neeche aayega aur wapas upar jayega ---
    gsap.fromTo(".brand-box", 
        { 
            y: -200,       // Shuruat me screen ke upar (hidden) rahega
            opacity: 0 
        }, 
        {
            y: 0,          // Apni asli CSS center position par aa jayega
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".automation-section",
                start: "top 80%",              // Jab section screen par aane lage
                end: "bottom 20%",
                toggleActions: "play reverse play reverse" // Scroll back par wapas upar chala jayega
            }
        }
    );

    // --- 2. LEFT SIDE CARDS: Center se left ki taraf jayenge ---
    gsap.fromTo(".email-card, .ads-card, .social-card", 
        { 
            x: 100,        // Shuruat me thoda center ki taraf compressed rahenge
            opacity: 0 
        }, 
        {
            x: 0,          // Apni asli left-side wali positions par chale jayenge
            opacity: 1,
            duration: 1,
            stagger: 0.1,  // Ek ke baad ek card khulega
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".automation-section",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

    // --- 3. RIGHT SIDE CARDS: Center se right ki taraf jayenge ---
    gsap.fromTo(".crm-card, .chatbot-card, .ticket-card", 
        { 
            x: -100,       // Shuruat me thoda center ki taraf compressed rahenge
            opacity: 0 
        }, 
        {
            x: 0,          // Apni asli right-side wali positions par chale jayenge
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".automation-section",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse"
            }
        }
    );
});
// // Our Process Section
// gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded", () => {
//     const items = gsap.utils.toArray(".process-item");
//     const slides = gsap.utils.toArray(".step-slide");

//     const totalSlides = items.length;
//     const slideHeight = 180; 
//     const totalMoveAmount = (totalSlides - 1) * slideHeight;

   
//     gsap.to(".number-track", {
//         y: -totalMoveAmount,
//         ease: "none", 
//         scrollTrigger: {
//             trigger: ".process-section",
//             start: " top 20%",
//             end: "bottom 10% ", 
//             scrub: 1,
//             // pin: true, // Pure section ko screen par lock (pin) karega
//             // anticipatePin: 1
//         }
//     });

//     // 2. RIGHT TEXT COUPLING CONTROLLER
//     items.forEach((item, index) => {
//         const content = item.querySelector(".process-content");

//         ScrollTrigger.create({
//             trigger: ".process-section", // Pura section hi track base rahega
//             start: "top 40%", 
//             end: "bottom 10%", 
//             // scrub: true,
//             onToggle: (self) => {
//                 if (self.isActive) {
//                     // Jab yeh index active ho toh text fully visible hoga
//                     gsap.to(content, { 
//                         opacity: 1, 
//                         scale: 1,
//                         duration: 0.3 
//                     });
                    
//                     // Left box ke andar active number white hoga
//                     slides.forEach(s => s.style.color = "rgba(255, 255, 255, 0.15)");
//                     if(slides[index]) slides[index].style.color = "#ffffff";
//                 } else {
//                     // Baaki numbers aur text translucent ho jayenge
//                     gsap.to(content, { 
//                         opacity: 0.1, 
//                         scale: 0.95,
//                         duration: 0.3 
//                     });
//                 }
//             }
//         });
//     });
// });


// gsap.registerPlugin(ScrollTrigger);

// const items = gsap.utils.toArray(".process-item");
// const contents = gsap.utils.toArray(".process-content");
// const images = gsap.utils.toArray(".process-image");
// const numbers = gsap.utils.toArray(".step-slide");

// const slideHeight = 180;

// // Initial State
// gsap.set(contents,{
//     opacity:.2,
//     y:60
// });

// gsap.set(images,{
//     opacity:0,
//     scale:.8
// });

// gsap.set(contents[0],{
//     opacity:1,
//     y:0
// });

// gsap.set(images[0],{
//     opacity:1,
//     scale:1
// });

// numbers[0].style.color="#fff";

// ScrollTrigger.create({
//     trigger:".process-section",
//     start:"top top",
//     end:()=>"+=" + (items.length*1000),
//     pin:".left-panel",
//     scrub:true
// });

// items.forEach((item,index)=>{

//     ScrollTrigger.create({

//         trigger:item,

//         start:"top 30%",

//         end:"bottom 30%",

//         onEnter:()=>{

//             gsap.to(".number-track",{
//                 y:-(index*slideHeight),
//                 duration:.6
//             });

//             gsap.to(contents,{
//                 opacity:.2,
//                 y:60,
//                 duration:.3
//             });

//             gsap.to(images,{
//                 opacity:0,
//                 scale:.8,
//                 duration:.3
//             });

//             gsap.to(contents[index],{
//                 opacity:1,
//                 y:0,
//                 duration:.5
//             });

//             gsap.to(images[index],{
//                 opacity:1,
//                 scale:1,
//                 duration:.5
//             });

//             numbers.forEach(n=>{
//                 n.style.color="rgba(255,255,255,.15)";
//             });

//             numbers[index].style.color="#fff";

//         },

//         onEnterBack:()=>{

//             gsap.to(".number-track",{
//                 y:-(index*slideHeight),
//                 duration:.6
//             });

//             gsap.to(contents,{
//                 opacity:.2,
//                 y:60,
//                 duration:.3
//             });

//             gsap.to(images,{
//                 opacity:0,
//                 scale:.8,
//                 duration:.3
//             });

//             gsap.to(contents[index],{
//                 opacity:1,
//                 y:0,
//                 duration:.5
//             });

//             gsap.to(images[index],{
//                 opacity:1,
//                 scale:1,
//                 duration:.5
//             });

//             // numbers.forEach(n=>{
//             //     n.style.color="rgba(255,255,255,.15)";
//             // });

//             // numbers[index].style.color="#fff";
//              gsap.to(".number-track",{
//     y: -(index * slideHeight),
//     duration: .6,
//     ease: "power2.out"
// });
//         }

//         // markers:true

//     });

// });



// gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded", () => {

//     const items = gsap.utils.toArray(".process-item");
//     const contents = gsap.utils.toArray(".process-content");
//     const images = gsap.utils.toArray(".process-image");
//     const numbers = gsap.utils.toArray(".step-slide");

//     const numberTrack = document.querySelector(".number-track");

//     // const slideHeight = 180;
//     const slideHeight = document.querySelector(".step-slide").offsetHeight;
//     const totalMove = (items.length - 1) * slideHeight;

//     // Initial State
//     gsap.set(contents, {
//         opacity: 0.2,
//         y: 60
//     });

//     if (images.length) {
//         gsap.set(images, {
//             opacity: 0,
//             scale: 0.85
//         });
//     }

//     gsap.set(contents[0], {
//         opacity: 1,
//         y: 0
//     });

//     if (images.length) {
//         gsap.set(images[0], {
//             opacity: 1,
//             scale: 1
//         });
//     }

//     numbers.forEach(num => {
//         num.style.color = "rgba(255,255,255,.15)";
//     });

//     numbers[0].style.color = "#fff";

//     // Left Panel Pin
//     ScrollTrigger.create({
//         trigger: ".process-section",
//         start: "top top",
//         end: () => "+=" + (items.length * window.innerHeight),
//         pin: ".left-panel",
//         pinSpacing: false
//     });

//     // Number Scroll
//     gsap.to(numberTrack, {
//         y: -totalMove,
//         ease: "none",
//         scrollTrigger: {
//             trigger: ".process-section",
//             start: "top top",
//             end: () => "+=" + (items.length * window.innerHeight),
//             scrub: true,
//             invalidateOnRefresh: true
//         }
//     });

//     // Content Animation
//     items.forEach((item, index) => {

//         ScrollTrigger.create({

//             trigger: item,

//             start: "top 35%",

//             end: "bottom 35%",

//             onEnter: () => {

//                 gsap.to(contents, {
//                     opacity: 0.2,
//                     y: 60,
//                     duration: 0.35
//                 });

//                 gsap.to(contents[index], {
//                     opacity: 1,
//                     y: 0,
//                     duration: 0.45
//                 });

//                 if (images.length) {

//                     gsap.to(images, {
//                         opacity: 0,
//                         scale: 0.85,
//                         duration: 0.35
//                     });

//                     gsap.to(images[index], {
//                         opacity: 1,
//                         scale: 1,
//                         duration: 0.45
//                     });

//                 }

//                 numbers.forEach(num => {
//                     num.style.color = "rgba(255,255,255,.15)";
//                 });

//                 numbers[index].style.color = "#fff";

//             },

//             onEnterBack: () => {

//                 gsap.to(contents, {
//                     opacity: 0.2,
//                     y: 60,
//                     duration: 0.35
//                 });

//                 gsap.to(contents[index], {
//                     opacity: 1,
//                     y: 0,
//                     duration: 0.45
//                 });

//                 if (images.length) {

//                     gsap.to(images, {
//                         opacity: 0,
//                         scale: 0.85,
//                         duration: 0.35
//                     });

//                     gsap.to(images[index], {
//                         opacity: 1,
//                         scale: 1,
//                         duration: 0.45
//                     });

//                 }

//                 numbers.forEach(num => {
//                     num.style.color = "rgba(255,255,255,.15)";
//                 });

//                 numbers[index].style.color = "#fff";

//             }

//             // markers:true

//         });

//     });

// });


gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    const items = gsap.utils.toArray(".process-item");
    const contents = gsap.utils.toArray(".process-content");
    const images = gsap.utils.toArray(".process-image");
    const numbers = gsap.utils.toArray(".step-slide");
    const numberTrack = document.querySelector(".number-track");

    const slideHeight = document.querySelector(".step-slide").offsetHeight;

    // Initial State
    gsap.set(contents, {
        opacity: 0.2,
        y: 60
    });

    if (images.length) {
        gsap.set(images, {
            opacity: 0,
            scale: 0.85
        });
    }

    gsap.set(contents[0], {
        opacity: 1,
        y: 0
    });

    if (images.length) {
        gsap.set(images[0], {
            opacity: 1,
            scale: 1
        });
    }

    numbers.forEach(num => {
        num.style.color = "rgba(255,255,255,.15)";
    });

    numbers[0].style.color = "#fff";

    // Left Box Pin
    ScrollTrigger.create({
        trigger: ".process-section",
        start: "top top",
        end: () => "+=" + ((items.length - 1) * window.innerHeight),
        pin: ".left-panel",
        pinSpacing: false
    });

    // Each Section Animation
    // items.forEach((item, index) => {

    //     ScrollTrigger.create({

    //         trigger: item,

    //         start: "top 40%",
    //         end: "bottom 40%",

    //         onEnter: () => {

    //             // Number Slide
    //             gsap.to(numberTrack, {
    //                 y: -(index * slideHeight),
    //                 duration: 0.6,
    //                 ease: "power2.out"
    //             });

    //             // Content
    //             gsap.to(contents, {
    //                 opacity: 0.2,
    //                 y: 60,
    //                 duration: 0.3
    //             });

    //             gsap.to(contents[index], {
    //                 opacity: 1,
    //                 y: 0,
    //                 duration: 0.4
    //             });

    //             // Images
    //             if (images.length) {

    //                 gsap.to(images, {
    //                     opacity: 0,
    //                     scale: 0.85,
    //                     duration: 0.3
    //                 });

    //                 gsap.to(images[index], {
    //                     opacity: 1,
    //                     scale: 1,
    //                     duration: 0.4
    //                 });

    //             }

    //             // Active Number Color
    //             numbers.forEach(num => {
    //                 num.style.color = "rgba(255,255,255,.15)";
    //             });

    //             numbers[index].style.color = "#fff";

    //         },

    //         onEnterBack: () => {

    //             gsap.to(numberTrack, {
    //                 y: -(index * slideHeight),
    //                 duration: 0.6,
    //                 ease: "power2.out"
    //             });

    //             gsap.to(contents, {
    //                 opacity: 0.2,
    //                 y: 60,
    //                 duration: 0.3
    //             });

    //             gsap.to(contents[index], {
    //                 opacity: 1,
    //                 y: 0,
    //                 duration: 0.4
    //             });

    //             if (images.length) {

    //                 gsap.to(images, {
    //                     opacity: 0,
    //                     scale: 0.85,
    //                     duration: 0.3
    //                 });

    //                 gsap.to(images[index], {
    //                     opacity: 1,
    //                     scale: 1,
    //                     duration: 0.4
    //                 });

    //             }

    //             numbers.forEach(num => {
    //                 num.style.color = "rgba(255,255,255,.15)";
    //             });

    //             numbers[index].style.color = "#fff";

    //         }

    //         // markers:true

    //     });

    // });

    items.forEach((item, index) => {

    ScrollTrigger.create({

        trigger: item,
        start: "top 40%",
        end: "bottom 40%",

        onEnter: () => {

            // Number Track Animation
            gsap.to(numberTrack, {
                y: -(index * slideHeight),
                duration: 0.7,
                ease: "power2.inOut",

                onUpdate: () => {

                    const box = document
                        .querySelector(".step-box")
                        .getBoundingClientRect();

                    numbers.forEach((num, i) => {

                        const rect = num.getBoundingClientRect();

                        const center = rect.top + rect.height / 2;
                        const boxCenter = box.top + box.height / 2;

                        const distance = Math.abs(center - boxCenter);

                        // opacity
                        let opacity = 1 - (distance / slideHeight);
                        opacity = gsap.utils.clamp(0.15, 1, opacity);

                        gsap.set(num, {
                            opacity: opacity
                        });

                    });

                }

            });

            // Active Number Color
            numbers.forEach(num => {
                num.style.color = "rgba(255,255,255,.15)";
            });

            numbers[index].style.color = "#fff";

            // Content
            gsap.to(contents, {
                opacity: 0.2,
                y: 60,
                duration: 0.3
            });

            gsap.to(contents[index], {
                opacity: 1,
                y: 0,
                duration: 0.4
            });

            // Images
            if (images.length) {

                gsap.to(images, {
                    opacity: 0,
                    scale: 0.85,
                    duration: 0.3
                });

                gsap.to(images[index], {
                    opacity: 1,
                    scale: 1,
                    duration: 0.4
                });

            }

        },

        onEnterBack: () => {

            gsap.to(numberTrack, {

                y: -(index * slideHeight),
                duration: 0.7,
                ease: "power2.inOut",

                onUpdate: () => {

                    const box = document
                        .querySelector(".step-box")
                        .getBoundingClientRect();

                    numbers.forEach((num) => {

                        const rect = num.getBoundingClientRect();

                        const center = rect.top + rect.height / 2;
                        const boxCenter = box.top + box.height / 2;

                        const distance = Math.abs(center - boxCenter);

                        let opacity = 1 - (distance / slideHeight);
                        opacity = gsap.utils.clamp(0.15, 1, opacity);

                        gsap.set(num, {
                            opacity: opacity
                        });

                    });

                }

            });

            numbers.forEach(num => {
                num.style.color = "rgba(255,255,255,.15)";
            });

            numbers[index].style.color = "#fff";

            gsap.to(contents, {
                opacity: 0.2,
                y: 60,
                duration: 0.3
            });

            gsap.to(contents[index], {
                opacity: 1,
                y: 0,
                duration: 0.4
            });

            if (images.length) {

                gsap.to(images, {
                    opacity: 0,
                    scale: 0.85,
                    duration: 0.3
                });

                gsap.to(images[index], {
                    opacity: 1,
                    scale: 1,
                    duration: 0.4
                });

            }

        }

        // markers:true

    });

});

});