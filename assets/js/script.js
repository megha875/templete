
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


gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".custom-card");

// hide all except first
cards.forEach((card, index) => {

  if(index > 0){
    gsap.set(card,{
      yPercent:100,
      opacity:1,
      scale:1
    });
  }

});

let tl = gsap.timeline({
  scrollTrigger:{
    trigger:".cards",
    start:"top top",
    end:`+=${cards.length * 1000}`,
    pin:true,
    scrub:1
  }
});

cards.forEach((card,index)=>{

  if(index === cards.length - 1) return;

  const nextCard = cards[index + 1];

  tl.to(card,{
      scale:0.9,
      opacity:0.5,
      duration:1
  })

  .to(nextCard,{
      yPercent:0,
      duration:1
  },"<");

});



gsap.from(".graph-item",{
    scaleY:0,
    transformOrigin:"bottom",
    duration:1.5,
    stagger:0.2,
    ease:"power4.out",
    scrollTrigger:{
        trigger:".bars-wrapper",
        start:"top 80%"
    }
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".graph-img").forEach((item, index) => {

    gsap.fromTo(
        item,
        {
            y: 200,
            
        },
        {
            y: 0,
            
            duration: 1.1,
            ease: "power3.out",

            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                end: "bottom 20%",
                scrub: 1
            }
        }
    );

});



// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".bg-reveal").forEach((bg) => {

//     gsap.fromTo(bg,
//         {
//             clipPath: "ellipse(150% 0% at 50% 0%)"
//         },
//         {
//             clipPath: "ellipse(150% 70% at 50% 0%)", // half card curved fill
//             ease: "none",
//             scrollTrigger: {
//                 trigger: bg.parentElement,
//                 start: "top 80%",
//                 end: "center center",
//                 scrub: true
//             }
//         }
//     );

// });

// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".curve-bg").forEach((bg) => {

//   gsap.fromTo(
//     bg,
//     {
//       clipPath: "ellipse(180% 0% at 50% 100%)"
//     },
//     {
//       clipPath: "ellipse(120% 60% at 50% 100%)",
//       ease: "none",
//       scrollTrigger: {
//         trigger: bg.parentElement,
//         start: "top 85%",
//         end: "center center",
//         scrub: true
//       }
//     }
//   );

// });
// gsap.to(".cs-card navy",{
//    y:"-50%",
//    scrollTrigger:{
//       trigger:".cs-card",
//       start:"top 80%",
//       end:"center center",
//       scrub:true
//    }
// });

// gsap.fromTo(
//     bg,
//     {
//         clipPath: "ellipse(150% 0% at 50% 100%)"
//     },
//     {
//         clipPath: "ellipse(150% 120% at 50% 100%)",
//         ease: "none",
//         scrollTrigger: {
//             trigger: bg.closest(".cs-card"),
//             start: "top 85%",
//             end: "bottom 40%",
//             scrub: true
//         }
//     }
// );


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".bg-reveal").forEach((bg) => {

    gsap.fromTo(
        bg,
        {
            clipPath: "ellipse(150% 0% at 50% 0%)"
        },
        {
            clipPath: "ellipse(150% 120% at 50% 0%)",
            ease: "none",
            scrollTrigger: {
                trigger: bg.closest(".cs-card"),
                start: "top 85%",
                end: "bottom 40%",
                scrub: true
            }
        }
    );

});



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

        // gsap.from(".cta-btn", {
        //     y: 30,
        //     opacity: 0,
        //     duration: 1,
        //     delay: 0.3,
        //     ease: "power3.out",
        //     scrollTrigger: {
        //         trigger: "#animatedSection",
        //         start: "top 70%",
        //         toggleActions: "play none none reverse"
        //     }
        // });
// Adds Section Start
document.querySelectorAll("#service-tab .nav-link").forEach((btn) => {

    btn.addEventListener("click", function () {

        const target = this.dataset.bsTarget;

        let currentContent;

        if(target === "#paidads"){
            currentContent = document.getElementById("paid-content");
        }
        else if(target === "#seo"){
            currentContent = document.getElementById("seo-content");
        }
        else if(target === "#smm"){
            currentContent = document.getElementById("smm-content");
        }

        // Hide all
        document.querySelectorAll(".acc-content").forEach((content) => {

            content.style.display = "none";
            content.classList.remove("active");

        });

        // Show current
        currentContent.style.display = "block";
        currentContent.classList.add("active");

        gsap.fromTo(
            currentContent,
            {
                height: 0,
                opacity: 0
            },
            {
                height: "auto",
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            }
        );

    });

});



// 


    
// gsap.registerPlugin(ScrollTrigger);

// const indicator = document.querySelector("#scroll_number");

// document.querySelectorAll(".process-item").forEach((item)=>{

//     const step = item.dataset.step;

//     ScrollTrigger.create({
//         trigger:item,
//         start:"top center",
//         end:"bottom center",

//         onEnter:()=>moveIndicator(step),
//         onEnterBack:()=>moveIndicator(step)
//     });

// });

// function moveIndicator(step){

//     const target =
//         document.querySelector(`.step-box[data-num="${step}"]`);

//     gsap.to(indicator,{
//         y:target.offsetTop,
//         duration:0.6,
//         ease:"power3.inOut"
//     });

//     gsap.fromTo(target,{
//         scale:0.9
//     },{
//         scale:1,
//         duration:0.4,
//         ease:"back.out(2)"
//     });

// }


// gsap.registerPlugin(ScrollTrigger);

//     // Function to activate a specific step number
//     function activateStep(stepNum) {
//         // Remove active class from all steps
//         document.querySelectorAll(".step-box, .step-number").forEach(el => {
//             el.classList.remove("active");
//         });

//         // Add active class to current step
//         const current = document.querySelector(`[data-num="${stepNum}"]`);
//         if (current) {
//             current.classList.add("active");
//         }
//     }

//     // Create ScrollTrigger for each process item
//     document.querySelectorAll(".process-item").forEach((item) => {
//         const step = item.dataset.step;

//         ScrollTrigger.create({
//             trigger: item,
//             start: "top 60%",
//             end: "bottom 40%",
            
//             onEnter: () => activateStep(step),
//             onEnterBack: () => activateStep(step),
            
//             onToggle: (self) => {
//                 if (self.isActive) {
//                     gsap.fromTo(
//                         item.querySelector(".process-content"),
//                         {
//                             opacity: 0.3,
//                             y: 50
//                         },
//                         {
//                             opacity: 1,
//                             y: 0,
//                             duration: 0.6,
//                             ease: "power3.out"
//                         }
//                     );
//                 }
//             }
//         });
//     });

//     // Optional: Animate step numbers on page load
//     gsap.from(".step-box, .step-number", {
//         scale: 0,
//         opacity: 0,
//         duration: 0.6,
//         stagger: 0.2,
//         ease: "back.out(1.7)",
//         delay: 0.3
//     });

//     // Refresh ScrollTrigger on resize
//     window.addEventListener("resize", () => {
//         ScrollTrigger.refresh();
// //     });
// gsap.registerPlugin(ScrollTrigger);

// // Initial State
// gsap.set(".number-track", {
//     y: 0
// });

// document.querySelectorAll(".process-item").forEach((item)=>{

//     const step = parseInt(item.dataset.step);

//     ScrollTrigger.create({
//         trigger:item,
//         start:"top center",
//         end:"bottom center",

//         onEnter:()=>{

//             // Number Animation
//             gsap.to(".number-track",{
//                 y: -(step - 1) * 180,
//                 duration:0.8,
//                 ease:"power3.inOut"
//             });

//             // Content Animation
//             gsap.fromTo(
//                 item.querySelector(".process-content"),
//                 {
//                     opacity:0,
//                     y:80
//                 },
//                 {
//                     opacity:1,
//                     y:0,
//                     duration:0.8,
//                     ease:"power3.out"
//                 }
//             );

//         },

//         onEnterBack:()=>{

//             gsap.to(".number-track",{
//                 y: -(step - 1) * 180,
//                 duration:0.8,
//                 ease:"power3.inOut"
//             });

//             gsap.fromTo(
//                 item.querySelector(".process-content"),
//                 {
//                     opacity:0,
//                     y:80
// //                 },
// //                 {
// //                     opacity:1,
// //                     y:0,
// //                     duration:0.8,
// //                     ease:"power3.out"
// //                 }
// //             );

// //         }

// //     });

// // });

// gsap.registerPlugin(ScrollTrigger);

// function moveNumber(step){

//     gsap.to(".number-track",{
//         y: -(step - 1) * 180,
//         duration:0.8,
//         ease:"power3.inOut"
//     });

// }

// document.querySelectorAll(".process-item").forEach((item)=>{

//     const step = Number(item.dataset.step);

//     ScrollTrigger.create({
//         trigger:item,
//         start:"top 50%",
//         end:"bottom 50%",

//         onEnter:()=>{
//             moveNumber(step);
//         },

//         onEnterBack:()=>{
//             moveNumber(step);
//         }
//     });

// });


// gsap.registerPlugin(ScrollTrigger);

// // Number animation function
// function moveNumber(step){

//     gsap.to(".number-track",{
//         y: -(step - 1) * 180,
//         duration:1,
//         ease:"expo.inOut"
//     });

// }

// // Trigger for each section
// document.querySelectorAll(".process-item").forEach((item)=>{

//     const step = Number(item.dataset.step);

//     ScrollTrigger.create({
//         trigger:item,
//         start:"top center",
//         end:"bottom center",

//         onEnter:()=>{
//             moveNumber(step);
//         },

//         onEnterBack:()=>{
//             moveNumber(step);
//         }
//     });

// });

gsap.registerPlugin(ScrollTrigger);

const slideHeight = 180;

document.querySelectorAll(".process-item").forEach((item)=>{

    const step = parseInt(item.dataset.step);

    ScrollTrigger.create({
        trigger:item,
        start:"top 60%",
        end:"bottom 40%",

        onEnter:()=>{
            animateNumber(step);
        },

        onEnterBack:()=>{
            animateNumber(step);
        }
    });

});

function animateNumber(step){

    gsap.to(".number-track",{
        y: -(step - 1) * slideHeight,
        duration:1.2,
        ease:"power4.inOut"
    });

}