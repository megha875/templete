
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
            clipPath: "ellipse(120% 90% at 50% 0%)",
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

// gsap.registerPlugin(ScrollTrigger);

// const slideHeight = 180;

// document.querySelectorAll(".process-item").forEach((item)=>{

//     const step = parseInt(item.dataset.step);

//     ScrollTrigger.create({
//         trigger:item,
//         start:"top 10%",
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
// // data section start
// // Ensure GSAP and ScrollTrigger only run AFTER the page loads
// document.addEventListener("DOMContentLoaded", function() {
  
//   gsap.registerPlugin(ScrollTrigger);

//   // 1. Stat Cards ke liye ek alag Scroll-Bound Parallax Timeline
//   // Yeh timeline section ke enter hone se lekar exit hone tak chalegi
//   gsap.timeline({
//     scrollTrigger: {
//       trigger: ".data-section",
//       start: "top bottom",      // Jab section ka top screen ke bottom se enter karega
//       end: "bottom 10%",        // Jab section ka bottom screen ke top se baahar nikal jayega
//       scrub: 5.8,               // ✅ Smooth scrolling trailing effect (Neeche scroll par move hoga, upar par wapas)
//      // markers: true           // Tasalli ke liye markers check kar sakte hain
//     }
//   })
//   .from(".stat-card", {
//     // Even index (0, 2, 4) upar se neeche aayenge (-120px)
//     // Odd index (1, 3, 5) neeche se upar jayenge (120px)
//     y: (index) => (index % 2 === 0 ? -120 : 120),
//     opacity: 0,                 // Scroll ke sath-sath fade-in honge
//     duration: 1,
//     ease: "none"                // Scrub ke sath "none" ease sabse smooth linear movement deta hai
//   });

//   // 2. Headings aur Baaki Content ke liye Normal Entrance Timeline
//   // Yeh content ko ek hi jagah lock karke smoothly animate karega
//   const contentTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".data-section",
//       start: "top 15%",
//       toggleActions: "play none none reverse" // Normal play/reverse behavior
//     }
//   });

//   contentTl.from(".logo-box", {
//     duration: 1.2,
//     scale: 0,
//     opacity: 0,
//     // ease: "back.out(1.5)"
//   }, 0)
//   .from(".main-heading", {
//     duration: 0.8,
//     y: 30,
//     opacity: 0,
//     // stagger: 0.15,
//     // ease: "power2.out"
//   }, 0.2)
//   .from(".highlight", {
//     duration: 0.8,
//     scale: 0,
//     opacity: 1,
//     // ease: "back.out(1.5)"
//   }, 0.4)
//   .from(".sub-text", {
//     duration: 0.8,
//     y: 20,
//     opacity: 1,
//     // ease: "power2.out"
//   }, 0.5);

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

// ==========================================
// DATA SECTION START
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
  
  gsap.registerPlugin(ScrollTrigger);

  // 1. Stat Cards Parallax Timeline
  gsap.timeline({
    scrollTrigger: {
      trigger: ".data-section",
      start: "top bottom",      
      end: "bottom top",        
      scrub: 1.2,               
    }
  })
  .from(".stat-card", {
   
    y: (index) => (index % 2 === 0 ? -60 : 60),
    opacity: 0,                 
    duration: 1,
    ease: "none"                
  });

  // 2. Headings aur Baaki Content Entrance Timeline
  const contentTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".data-section",
      start: "top 75%", 
      toggleActions: "play none none reverse" 
    }
  });

  contentTl.from(".logo-box", {
    duration: 1.2,
    scale: 0,
    opacity: 1,
    ease: "back.out(1.5)" 
  }, 0)
  .from(".main-heading", {
    duration: 0.8,
    y: 30,
    opacity: 1,
    stagger: 0.15,
    ease: "power2.out"
  }, 0.2)
  .from(".highlight", {
    duration: 0.8,
    scale: 0,
    opacity: 1, 
    ease: "back.out(1.5)"
  }, 0.4)
  .from(".sub-text", {
    duration: 0.8,
    y: 20,     
    opacity: 1, 
    ease: "power2.out"
  }, 0.5);

});
//Add section Start
// document.addEventListener("DOMContentLoaded", function () {

//     gsap.registerPlugin(ScrollTrigger);

//     // ==========================================
//     // ALL Clicks Permanently Disable
//     // ==========================================
//     document.querySelectorAll("#service-tab .nav-link").forEach((btn) => {
//         btn.style.pointerEvents = "none";
//         btn.style.cursor = "default";
//         btn.removeAttribute("data-bs-toggle");
//         btn.removeAttribute("data-bs-target");
//         btn.removeAttribute("href");
//     });

//     // Bootstrap tab events bhi band karo
//     document.querySelectorAll(".tab-pane").forEach((pane) => {
//         pane.classList.remove("active", "show", "fade");
//     });

//     // ==========================================
//     // Initial Setup
//     // ==========================================
//     gsap.set(".tab-content", {
//         position: "relative",
//         minHeight: "500px",
//         overflow: "visible"
//     });

//     gsap.set(".tab-pane", {
//         position: "absolute",
//         top: 0, left: 0,
//         width: "100%",
//         autoAlpha: 0,
//         display: "block",
//         overflow: "visible"
//     });

//     // Pehla graphic visible
//     gsap.set("#paidads", { autoAlpha: 1 });

//     // Accordion setup
//     gsap.set(".acc-content", {
//         display: "block",
//         height: 0,
//         autoAlpha: 0,
//         overflow: "visible"
//     });
//     gsap.set("#paid-content", {
//         display: "block",
//         height: "auto",
//         autoAlpha: 1,
//         overflow: "visible"
//     });

//     // Nav colors
//     gsap.set("#service-tab .nav-link", { color: "#000" });
//     gsap.set("#service-tab .nav-link:first-child", { color: "#022d63" });

//     // Sab list items hidden + offset
//     ["#paid-content li", "#seo-content li", "#smm-content li"].forEach((sel) => {
//         gsap.utils.toArray(sel).forEach((li, i) => {
//             gsap.set(li, { opacity: 0, y: i % 2 === 0 ? -50 : 50 });
//         });
//     });

//     // ==========================================
//     // Master Timeline — ONLY Scroll Driven
//     // ==========================================
//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: ".services-section",
//             start: "top top",
//             end: "+=4000",
//             pin: true,
//             scrub: 2,
//             invalidateOnRefresh: true
//         }
//     });

//     // Parallax
//     tl.fromTo(".tab-content", { y: -20 }, { y: 20, ease: "none" }, 0);

//     // ==========================================
//     // PAID — List ek ek karke aaye
//     // ==========================================
//     gsap.utils.toArray("#paid-content li").forEach((li, i) => {
//         tl.to(li, {
//             y: 0,
//             opacity: 1,
//             duration: 0.6,
//             // ease: "power3.out"
//         }, 0.1 + i * 0.15);
//     });

//     tl.to({}, { duration: 2 }); // Read time

//     // ==========================================
//     // STEP 1: Paid → SEO
//     // ==========================================

//     // Paid list exit
//     gsap.utils.toArray("#paid-content li").forEach((li, i) => {
//         tl.to(li, {
//             y: i % 2 === 0 ? 50 : -50,
//             opacity: 0,
//             duration: 0.35,
//             // ease: "power2.in"
//         }, `s1_exit+=${i * 0.08}`);
//     });

//     // Paid accordion close
//     tl.to("#paid-content", {
//         height: 0,
//         autoAlpha: 0,
//         duration: 0.8,
//         // ease: "power2.inOut"
//     }, "s1_close");

//     // Right graphic switch
//     tl.to("#paidads", { autoAlpha: 0, duration: 0.6 }, "s1_close")
//       .to("#seo",     { autoAlpha: 1, duration: 0.6 }, "s1_close");

//     // Nav color switch
//     // tl.to("#service-tab .nav-link:nth-child(1)", { color: "#000",    duration: 0.5 }, "s1_close")
//     //   .to("#service-tab .nav-link:nth-child(2)", { color: "#022d63", duration: 0.5 }, "s1_close");

//     // SEO accordion open
//     tl.to("#seo-content", {
//         display: "block",
//         height: "auto",
//         autoAlpha: 1,
//         overflow: "visible",
//         duration: 0.8,
//         // ease: "power2.inOut"
//     }, "s1_open");

//     // SEO list ek ek karke aaye
//     gsap.utils.toArray("#seo-content li").forEach((li, i) => {
//         tl.to(li, {
//             y: 0,
//             opacity: 1,
//             duration: 0.6,
//             // ease: "power3.out"
//         }, `s1_in+=${0.3 + i * 0.15}`);
//     });

//     tl.to({}, { duration: 2 }); // Read time

//     // ==========================================
//     // STEP 2: SEO → SMM
//     // ==========================================

//     // SEO list exit
//     gsap.utils.toArray("#seo-content li").forEach((li, i) => {
//         tl.to(li, {
//             y: i % 2 === 0 ? 50 : -50,
//             opacity: 0,
//             duration: 0.35,
//             // ease: "power2.in"
//         }, `s2_exit+=${i * 0.08}`);
//     });

//     // SEO accordion close
//     tl.to("#seo-content", {
//         height: 0,
//         autoAlpha: 0,
//         duration: 0.8,
//         // ease: "power2.inOut"
//     }, "s2_close");

//     // Right graphic switch
//     tl.to("#seo", { autoAlpha: 0, duration: 0.6 }, "s2_close")
//       .to("#smm", { autoAlpha: 1, duration: 0.6 }, "s2_close");

//     // Nav color switch
//     tl.to("#service-tab .nav-link:nth-child(2)", { color: "#000",    duration: 0.5 }, "s2_close")
//       .to("#service-tab .nav-link:nth-child(3)", { color: "#022d63", duration: 0.5 }, "s2_close");

//     // SMM accordion open
//     tl.to("#smm-content", {
//         // display: "block",
//         height: "auto",
//         autoAlpha: 1,
//         // overflow: "visible",
//         duration: 0.8,
//         // ease: "power2.inOut"
//     }, "s2_open");

//     // SMM list ek ek karke aaye
//     gsap.utils.toArray("#smm-content li").forEach((li, i) => {
//         tl.to(li, {
//             y: 0,
//             opacity: 1,
//             duration: 0.6,
//             // ease: "power3.out"
//         }, `s2_in+=${0.3 + i * 0.15}`);
//     });

//     tl.to({}, { duration: 2 }); // End hold

// });
// document.addEventListener("DOMContentLoaded", function () {

//     gsap.registerPlugin(ScrollTrigger);

//     // ==========================================
//     // ALL Clicks Permanently Disable
//     // ==========================================
//     document.querySelectorAll("#service-tab .nav-link").forEach((btn) => {
//         btn.style.pointerEvents = "none";
//         btn.style.cursor = "default";
//         btn.removeAttribute("data-bs-toggle");
//         btn.removeAttribute("data-bs-target");
//         btn.removeAttribute("href");
//     });

//     // Bootstrap tab events bhi band karo
//     document.querySelectorAll(".tab-pane").forEach((pane) => {
//         pane.classList.remove("active", "show", "fade");
//     });

//     // ==========================================
//     // Initial Setup
//     // ==========================================
//     gsap.set(".tab-content", {
//         position: "relative",
//         minHeight: "500px",
//         overflow: "visible"
//     });

//     gsap.set(".tab-pane", {
//         position: "absolute",
//         top: 0, 
//         left: 0,
//         width: "100%",
//         autoAlpha: 0,
//         display: "block",
//         overflow: "visible"
//     });

//     // Pehla graphic/image initial state mein visible rahega
//     gsap.set("#paidads", { autoAlpha: 1 });

//     // Accordion setup
//     gsap.set(".acc-content", {
//         display: "block",
//         height: 0,
//         autoAlpha: 0,
//         overflow: "visible"
//     });
    
//     // Pehla accordion content shuruat mein open dikhega
//     gsap.set("#paid-content", {
//         display: "block",
//         height: "auto",
//         autoAlpha: 1,
//         overflow: "visible"
//     });

//     // Nav colors initial state
//     gsap.set("#service-tab .nav-link", { color: "#000" });
//     gsap.set("#service-tab .nav-link:first-child", { color: "#022d63" });

//     // 🌟 FIX: Sabhi list items ko pehle se hi normal visible (opacity: 1) rakha hai (No hidden offset)
//     ["#paid-content li", "#seo-content li", "#smm-content li"].forEach((sel) => {
//         gsap.set(sel, { opacity: 1, y: 0 });
//     });

//     // ==========================================
//     // Master Timeline — ONLY Scroll Driven
//     // ==========================================
//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: ".services-section",
//             start: "top top",
//             end: "+=4000", 
//             pin: true,
//             scrub: 1.5,    // Smooth fluid scrub matching right side image speed
//             invalidateOnRefresh: true
//         }
//     });

//     // Right side panel parallax logic
//     tl.fromTo(".tab-content", { y: -20 }, { y: 20, ease: "none" }, 0);

//     // Paid Ads stable view hold gap
//     tl.to({}, { duration: 2 }); 

//     // ==========================================
//     // STEP 1: Paid → SEO
//     // ==========================================

//     // Paid accordion smoothly close hoga
//     tl.to("#paid-content", {
//         height: 0,
//         autoAlpha: 0,
//         duration: 0.8,
//         ease: "power2.inOut"
//     }, "s1_close");

//     // 🌟 RIGHT SIDE IMAGE CROSS-FADE: Paid Ads image jayegi aur SEO image aayegi
//     tl.to("#paidads", { autoAlpha: 0, duration: 0.6, ease: "power2.inOut" }, "s1_close")
//       .to("#seo",     { autoAlpha: 1, duration: 0.6, ease: "power2.inOut" }, "s1_close");

//     // Nav text color transition
//     tl.to("#service-tab .nav-link:nth-child(1)", { color: "#000",    duration: 0.5 }, "s1_close")
//       .to("#service-tab .nav-link:nth-child(2)", { color: "#022d63", duration: 0.5 }, "s1_close");

//     // SEO accordion smoothly open hoga (li items automatic normal load honge)
//     tl.to("#seo-content", {
//         // display: "block",
//         height: "auto",
//         autoAlpha: 1,
//         overflow: "visible",
//         duration: 0.8,
//         ease: "power2.inOut"
//     }, "s1_close+=0.1");

//     // SEO stable view hold gap
//     tl.to({}, { duration: 2 }); 

//     // ==========================================
//     // STEP 2: SEO → SMM
//     // ==========================================

//     // SEO accordion smoothly close hoga
//     tl.to("#seo-content", {
//         height: 0,
//         autoAlpha: 0,
//         duration: 0.8,
//         ease: "power2.inOut"
//     }, "s2_close");

//     // 🌟 RIGHT SIDE IMAGE CROSS-FADE: SEO image jayegi aur SMM image aayegi
//     tl.to("#seo", { autoAlpha: 0, duration: 0.6, ease: "power2.inOut" }, "s2_close")
//       .to("#smm", { autoAlpha: 1, duration: 0.6, ease: "power2.inOut" }, "s2_close");

//     // Nav text color transition
//     tl.to("#service-tab .nav-link:nth-child(2)", { color: "#000",    duration: 0.5 }, "s2_close")
//       .to("#service-tab .nav-link:nth-child(3)", { color: "#022d63", duration: 0.5 }, "s2_close");

//     // SMM accordion smoothly open hoga
//     tl.to("#smm-content", {
//         // display: "block",
//         height: "auto",
//         autoAlpha: 1,
//         overflow: "visible",
//         duration: 0.8,
//         ease: "power2.inOut"
//     }, "s2_close+=0.1");

//     // Final state hold gap
//     tl.to({}, { duration: 2 }); 
// });
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
    gsap.set(".services-section .nav-pills .nav-link", { color: "#000" });
    gsap.set("#paid-ads-trigger", { color: "#022d63" });

    // ==========================================
    // Master Timeline — ONLY Scroll Driven
    // ==========================================
    const tl = gsap.timeline({
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
    tl.fromTo(".tab-content", { y: -20 }, { y: 20, ease: "none" }, 0);

    // Paid Ads view hold gap
    tl.to({}, { duration: 2 }); 

    // ==========================================
    // STEP 1: Paid → SEO
    // ==========================================

    // Smoothly close Paid Ads accordion
    tl.to("#paid-content-accordion", {
        height: 0,
        autoAlpha: 0,
        duration: 0.8,
        // ease: "power2.inOut"
    }, "s1_close");

    // CROSS-FADE: Paid Ads graphic goes away, SEO graphic appears
    tl.to("#paid-ads-graphic", { autoAlpha: 0, duration: 0.6, ease: "power2.inOut" }, "s1_close")
      .to("#seo-graphic",      { autoAlpha: 1, duration: 0.6, ease: "power2.inOut" }, "s1_close");

    // Nav text color transition
    tl.to("#paid-ads-trigger", { color: "#000",    duration: 0.5 }, "s1_close")
      .to("#seo-trigger",      { color: "#022d63", duration: 0.5 }, "s1_close");

    // Smoothly open SEO accordion
    tl.to("#seo-content-accordion", {
        height: "auto",
        autoAlpha: 1,
        overflow: "visible",
        duration: 0.8,
        ease: "power2.inOut"
    }, "s1_close+=0.1");

    // SEO view hold gap
    tl.to({}, { duration: 2 }); 

    // ==========================================
    // STEP 2: SEO → SMM
    // ==========================================

    // Smoothly close SEO accordion
    tl.to("#seo-content-accordion", {
        height: 0,
        autoAlpha: 0,
        duration: 0.8,
        // ease: "power2.inOut"
    }, "s2_close");

    // CROSS-FADE: SEO graphic goes away, SMM graphic appears
    tl.to("#seo-graphic", { autoAlpha: 0, duration: 0.6, ease: "power2.inOut" }, "s2_close")
      .to("#smm-graphic", { autoAlpha: 1, duration: 0.6, ease: "power2.inOut" }, "s2_close");

    // Nav text color transition
    tl.to("#seo-trigger", { color: "#000",    duration: 0.5 }, "s2_close")
      .to("#smm-trigger", { color: "#022d63", duration: 0.5 }, "s2_close");

    // Smoothly open SMM accordion
    tl.to("#smm-content-accordion", {
        height: "auto",
        autoAlpha: 1,
        overflow: "visible",
        duration: 0.8,
        // ease: "power2.inOut"
    }, "s2_close+=0.1");

    // Final state hold gap
    tl.to({}, { duration: 2 }); 
});