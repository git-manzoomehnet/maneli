const projectsSlider = new Swiper('.projectsSlider', {
    slidesPerView: 1.5,
    spaceBetween: 12,
    loop: true,
    centeredSlides:true,
    speed:1000,
    autoplay: {
        delay: 3000,
      },
  });
const mainSlider = new Swiper('.mainSlider', {
    slidesPerView: 1,
    loop: true,
    speed:1000,
    draggable:false,
    allowTouchMove:false,
    effect: 'fade',
  fadeEffect: {
    crossFade: false
  },
    autoplay: {
        delay: 3000,
      },
  });
const productsSlider = new Swiper('.productsSlider', {
    slidesPerView: 1.5,
    spaceBetween: 10,
    loop: true,
    centeredSlides:true,
    parallax: true,

    speed:1000,
    navigation: {
        nextEl: '.nextProducts',
        prevEl: '.prevProducts',
      },
    pagination: {
        el: '.productsFraction',
        type: 'fraction',
        formatFractionCurrent: function (number) {
          
                return number;
            
        }


      },

  });
const membersSlider = new Swiper('.membersSlider', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
 

    speed:1000,
    navigation: {
        nextEl: '.nextMembers',
        prevEl: '.prevMembers',
      },
    pagination: {
        el: '.membersFraction',
        type: 'fraction',
        formatFractionCurrent: function (number) {
          
                return number;
            
        }


      },
      on: {
        init: function(swiper){

    
          
        }, 
      },
  });


  let swipers = document.querySelectorAll(".membersSlider .swiper-slide")
  console.log("swipers",swipers);
  
  swipers.forEach((element,i) => {
    let idMember = element.getAttribute("data-id")
    fetch(`/person-info.inc?id=${idMember}`)
    .then(response => response.text())

    .then(userData => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(userData, 'text/html');
      console.log("element",element);
      console.log(".socialInfo",element.querySelector(".socialInfo"));
      
      const socialInfo = element.querySelector(".socialInfo")
      socialInfo.innerHTML=userData
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });





  const accordions = document.querySelectorAll(".accordion");

const openAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.add("accordion__active");
    accordion.querySelector(".arrow").style.rotate="180deg"
	content.style.maxHeight = content.scrollHeight+30 + "px";
};

const closeAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.remove("accordion__active");
    accordion.querySelector(".arrow").style.rotate="0deg"
	content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
	const intro = accordion.querySelector(".accordion__intro");
	const content = accordion.querySelector(".accordion__content");

	intro.onclick = () => {
		if (content.style.maxHeight) {
			closeAccordion(accordion);
		} else {
			accordions.forEach((accordion) => closeAccordion(accordion));
			openAccordion(accordion);
		}
	};
});