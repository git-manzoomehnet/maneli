document.querySelectorAll(".card").forEach((card) => {
    const tilt = card.querySelector("[data-tilt]");
    const img = card.querySelector(".imgS");
  
    const scale = parseFloat(tilt.getAttribute("data-tilt-scale")) || 1;
    const speed = parseFloat(tilt.getAttribute("data-tilt-speed")) || 300;
  
    tilt.style.transformStyle = "preserve-3d";
    tilt.style.transition = `transform ${speed}ms ease`;
    img.style.transition = `transform 0.2s ease`;
  
    card.addEventListener("mouseenter", () => {
      const rect = card.getBoundingClientRect();
      card.dataset.width = rect.width;
      card.dataset.height = rect.height;
      card.dataset.left = rect.left;
      card.dataset.top = rect.top;
    });
  
    card.addEventListener("mousemove", (e) => {
      const width = card.dataset.width;
      const height = card.dataset.height;
      const left = card.dataset.left;
      const top = card.dataset.top;
  
      const x = e.clientX - left;
      const y = e.clientY - top;
  
      // Tilt
      const rotateX = ((y / height) - 0.5) * -40;
      const rotateY = ((x / width) - 0.5) * 40;
      tilt.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
  
      // Move image
      const moveX = ((x / width) - 0.5) * 20;
      const moveY = ((y / height) - 0.5) * 20;
      img.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  
    card.addEventListener("mouseleave", () => {
      tilt.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
      img.style.transform = `translate(0px, 0px)`;
    });
  });



  const productsSlider = new Swiper('.productsSlider', {
    slidesPerView: 3,
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

  
  let swipers = document.querySelectorAll(".memberSlides .swiper-slide")
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



  const relatedProject = new Swiper('.relatedProject', {
    // Optional parameters
    speed: 1000,
    slidesPerView:3,
    // If we need pagination
    navigation: {
        nextEl: '.nextRelatedProject',
        prevEl: '.prevRelatedProject',
    },
loop:true,
    autoplay: {
        delay: 3000,
      },
    spaceBetween: 61,
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