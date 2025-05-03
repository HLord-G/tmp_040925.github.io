 
  
gsap.registerPlugin(ScrollTrigger);

 const timelineLoad = gsap.timeline({ defaults: { duration: .6 }})
 timelineLoad
 .to('[animatiomotion="headertitled"]', {
    opacity: 1, // kinahanglan naa gyud animatable property
    onStart: () => {
      document.querySelector('[animatiomotion="headertitled"]').classList.add('slide-in-left');
    }
  }).to('[animatiomotion="subtitles_06785"]', {
  opacity: 1, // kinahanglan naa gyud animatable property
  onStart: () => {
    document.querySelector('[animatiomotion="subtitles_06785"]').classList.add('slide-in-left');
  }
}).to('[animatiomotion="imagefron_fsefdsl"]', {
  opacity: 1, // kinahanglan naa gyud animatable property
  onStart: () => {
    document.querySelector('[animatiomotion="imagefron_fsefdsl"]').classList.add('swing-in-left-bck');
  }
}).to('[animatiomotion="imagefron_fsefdsr"]', {
  opacity: 1, // kinahanglan naa gyud animatable property
  onStart: () => {
    document.querySelector('[animatiomotion="imagefron_fsefdsr"]').classList.add('slide-in-left');
  }
})

for (let i = 1; i <= 6; i++) {
  const itemId = `[animatiomotion="item${i}"]`;

  gsap.timeline({
    scrollTrigger: {
      trigger: itemId,
      start: "top 40%",
      toggleActions: "play none none none"
    },
    defaults: { duration: 0.1 }
  })
  .to(itemId, {
    duration: 0.6,
    opacity: 1,
    onStart: () => {
      document.querySelector(itemId).classList.add('slide-in-blurred-bottom');
    }
  });
};




for (let i = 1; i <= 10; i++) {
        const itemId = `[animatiomotion="cards_${i}"]`;
      
        gsap.timeline({
          scrollTrigger: {
            trigger: itemId,
            start: "top 40%",
            toggleActions: "play none none none"
          },
          defaults: { duration: 0.1 }
        })
        .to(itemId, {
          duration: 0.6,
          opacity: 1,
          onStart: () => {
            document.querySelector(itemId).classList.add('tilt-in-bottom-2');
          }
        });
      };

 
    

      gsap.timeline({
        scrollTrigger: {
          trigger: '[animation="text_1"]',
          start: "top 70%",
          toggleActions: "play none none none"
        },
        defaults: { duration: 0.1 }
      })
      .to('[animation="text_1"]', {
        duration: 0.2,
        opacity: 1,
        onStart: () => {
          document.querySelector('[animation="text_1"]').classList.add('slide-in-blurred-bottom');
        }
      })
      .to('[animation="text_2"]', {
        duration: 0.4,
        opacity: 1,
        onStart: () => {
          document.querySelector('[animation="text_2"]').classList.add('slide-in-blurred-bottom');
        }
      })
      .to('[animation="text_3"]', {
        duration: 0.6,
        opacity: 1,
        onStart: () => {
          document.querySelector('[animation="text_3"]').classList.add('slide-in-blurred-bottom');
        }
      });

 









 
 
gsap.timeline({
    scrollTrigger: {
      trigger: '[animatiomotion="futuresanims"]',  // Asa imong container or section (ex: div nga nag wrap sa tanan hover_view)
      start: "center center",        // Kung top sa section maabot na sa 40% sa screen, mo-play
      toggleActions: "play none none none"
    },
    defaults: { duration: .1 }
  })
  .to('[animatiomotion="futuresanims"]', {                // Correctly chaining .to() method to timeline
    duration: 0.6,
    opacity: 1,
    onStart: () => {
      document.querySelector('[animatiomotion="futuresanims"]').classList.add('slide-in-blurred-left');
    }
  });


    const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".your-section",  // Asa imong container or section (ex: div nga nag wrap sa tanan hover_view)
      start: "top 50%",          // Kung top sa section maabot na sa 50% sa screen, mo-play
      toggleActions: "play none none none"
    },
    defaults: { duration: .1 } 
  });

  timeline
    .from('[hover_view="1"]', { y: '100%', opacity: 0, ease: 'bounce' })
    .to('[hover_view="1"]', { opacity: 1, y: '0%', ease: 'bounce' })
    .from('[hover_view="2"]', { y: '100%', opacity: 0, ease: 'bounce' })
    .to('[hover_view="2"]', { opacity: 1, y: '0%', ease: 'bounce' })
    .from('[hover_view="3"]', { y: '100%', opacity: 0, ease: 'bounce' })
    .to('[hover_view="3"]', { opacity: 1, y: '0%', ease: 'bounce' })
    .from('[hover_view="4"]', { y: '100%', opacity: 0, ease: 'bounce' })
    .to('[hover_view="4"]', { opacity: 1, y: '0%', ease: 'bounce' })
    .from('[hover_view="5"]', { y: '100%', opacity: 0, ease: 'bounce' })
    .to('[hover_view="5"]', { opacity: 1, y: '0%', ease: 'bounce' })
    .from('[hover_view="6"]', { y: '100%', opacity: 0, ease: 'bounce' })
    .to('[hover_view="6"]', { opacity: 1, y: '0%', ease: 'bounce' });



    // text_view
    // hover_view

    for (let index = 0; index < $("[hover_view]").length +1; index++) {
         
        $(`[text_view = ${index}]`).text($(`[hover_view=${index}]`).text())
        
    }


    function updateSectionClass() {
        if (window.innerWidth > 994) {
            $('[animatiomotion="selectionshovers"]').removeClass('your-section');
            // $("#selectionshovers").addClass('triggerss');

        } else {
            $('[animatiomotion="selectionshovers"]').addClass('your-section');
            // $("#selectionshovers").removeClass('triggerss');

        }
    }
    updateSectionClass();

    // Run also every time user resizes the window
    $(window).on('resize', function() {
        updateSectionClass();
    });



$(".hoverview").hover(
 
    function() {
        setTimeout(() => {
            let numact = $(this).attr("hover_view")
        let image = $(`[hover_image='${numact}']`).attr("src")
        $('[animatiomotion="hoverview"]').attr("src", image)

        gsap.to('[animatiomotion="hoverview"]', {
            duration: 0.6,
            opacity: 1,
            onStart: () => {
                document.querySelector('[animatiomotion="hoverview"]').classList.remove('slide-out-blurred-top');
                document.querySelector('[animatiomotion="hoverview"]').classList.add('slide-in-blurred-bottom');
            }
        });
        }, 200);
    },
    function() {
        gsap.to('[animatiomotion="hoverview"]', {
            duration: 0.6,
            opacity: 0,
            onStart: () => {
                document.querySelector('[animatiomotion="hoverview"]').classList.remove('slide-in-blurred-bottom');
                document.querySelector('[animatiomotion="hoverview"]').classList.add('slide-out-blurred-top');
            }
        });
    }
);










    // Create a <style> tag
        const style = document.createElement('style');
  style.textContent = `
.slide-in-elliptic-bottom-bck {
	-webkit-animation: slide-in-elliptic-bottom-bck 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-elliptic-bottom-bck 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}


.slide-in-left {
	-webkit-animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}


.swing-in-left-bck {
	-webkit-animation: swing-in-left-bck 0.7s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
	        animation: swing-in-left-bck 0.7s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
}
 
.slide-in-blurred-bottom {
	-webkit-animation: slide-in-blurred-bottom 0.7s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
	        animation: slide-in-blurred-bottom 0.7s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
}


.slide-out-blurred-top {
	-webkit-animation: slide-out-blurred-top 0.2s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
	        animation: slide-out-blurred-top 0.2s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
}

.slide-in-blurred-left {
	-webkit-animation: slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
	        animation: slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
}


.tilt-in-bottom-2 {
	-webkit-animation: tilt-in-bottom-2 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: tilt-in-bottom-2 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

 
 
@-webkit-keyframes tilt-in-bottom-2 {
  0% {
    -webkit-transform: rotateY(-30deg) translateY(300px) skewY(30deg);
            transform: rotateY(-30deg) translateY(300px) skewY(30deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0deg) translateY(0) skewY(0deg);
            transform: rotateY(0deg) translateY(0) skewY(0deg);
    opacity: 1;
  }
}
@keyframes tilt-in-bottom-2 {
  0% {
    -webkit-transform: rotateY(-30deg) translateY(300px) skewY(30deg);
            transform: rotateY(-30deg) translateY(300px) skewY(30deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0deg) translateY(0) skewY(0deg);
            transform: rotateY(0deg) translateY(0) skewY(0deg);
    opacity: 1;
  }
}




 
@-webkit-keyframes slide-in-blurred-left {
  0% {
    -webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
    -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
@keyframes slide-in-blurred-left {
  0% {
    -webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
            transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
    -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
 


@-webkit-keyframes slide-in-blurred-bottom {
  0% {
    -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
            transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
@keyframes slide-in-blurred-bottom {
  0% {
    -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
            transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}



 
@-webkit-keyframes slide-out-blurred-top {
  0% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-1000px) scaleY(2) scaleX(0.2);
            transform: translateY(-1000px) scaleY(2) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
}
@keyframes slide-out-blurred-top {
  0% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-1000px) scaleY(2) scaleX(0.2);
            transform: translateY(-1000px) scaleY(2) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
}


 
@-webkit-keyframes slide-in-elliptic-bottom-bck {
  0% {
    -webkit-transform: translateY(600px) rotateX(-30deg) scale(6.5);
            transform: translateY(600px) rotateX(-30deg) scale(6.5);
    -webkit-transform-origin: 50% -100%;
            transform-origin: 50% -100%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 500px;
            transform-origin: 50% 500px;
    opacity: 1;
  }
}
@keyframes slide-in-elliptic-bottom-bck {
  0% {
    -webkit-transform: translateY(600px) rotateX(-30deg) scale(6.5);
            transform: translateY(600px) rotateX(-30deg) scale(6.5);
    -webkit-transform-origin: 50% -100%;
            transform-origin: 50% -100%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 500px;
            transform-origin: 50% 500px;
    opacity: 1;
  }
}





 
@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}

 
@-webkit-keyframes swing-in-left-bck {
  0% {
    -webkit-transform: rotateY(-70deg);
            transform: rotateY(-70deg);
    -webkit-transform-origin: left;
            transform-origin: left;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
    -webkit-transform-origin: left;
            transform-origin: left;
    opacity: 1;
  }
}
@keyframes swing-in-left-bck {
  0% {
    -webkit-transform: rotateY(-70deg);
            transform: rotateY(-70deg);
    -webkit-transform-origin: left;
            transform-origin: left;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
    -webkit-transform-origin: left;
            transform-origin: left;
    opacity: 1;
  }
}

  `;
  document.head.appendChild(style);


  


 