const memberSlides = new Swiper('.memberSlides', {
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


const productsSlider = new Swiper('.productsSlider', {
  slidesPerView: 3,
  spaceBetween: 100,
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
const awardsSlider = new Swiper('.awardsSlider', {
  slidesPerView: 3,
  spaceBetween: 100,
  loop: true,
  centeredSlides:true,
  parallax: true,

  speed:1000,
  navigation: {
      nextEl: '.nextAwards',
      prevEl: '.prevAwards',
    },
  pagination: {
      el: '.awardsFraction',
      type: 'fraction',
      formatFractionCurrent: function (number) {
        
              return number;
          
      }


    },

});




let swipers = document.querySelectorAll(".memberSlides .swiper-slide")


swipers.forEach((element,i) => {
  let idMember = element.getAttribute("data-id")
  fetch(`/person-info.inc?id=${idMember}`)
  .then(response => response.text())

  .then(userData => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(userData, 'text/html');
 
    
    
    const socialInfo = element.querySelector(".socialInfo")
    socialInfo.innerHTML=userData
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

