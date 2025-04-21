const gallerySlider = new Swiper('.gallerySlider', {
    // Optional parameters
    speed: 1000,
    // If we need pagination
  
    spaceBetween: 10,

    slidesPerView:1,
    
    navigation: {
        nextEl: '.nextMembers',
        prevEl: '.prevMembers',
    },

});

const relatedProduct = new Swiper('.relatedProduct', {
    // Optional parameters
    speed: 1000,
    // If we need pagination
  
    spaceBetween: 78,

    slidesPerView:3,
    navigation: {
        nextEl: '.nextRelatedProduct',
        prevEl: '.prevRelatedProduct',
    },

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


    spaceBetween: 61,
});
const videoThumbGallery = new Swiper('.videoThumbGallery', {
    // Optional parameters
    speed: 1000,
    slidesPerView: "auto",

    spaceBetween: 25.5,


});
let videosSlides = document.querySelectorAll(".videoGallery .swiper-slide")
videosSlides[0].querySelector("video").play()
const videoGallery = new Swiper('.videoGallery', {
    // Optional parameters
    spaceBetween: 10,
    speed: 1000,

    navigation: {
        nextEl: '.nextThumb',
        prevEl: '.prevThumb',
    },
    pagination: {
        el: '.thumbFraction',
        type: 'fraction',
        formatFractionCurrent: function (number) {

            return number;

        }


    },



    thumbs: {
        swiper: videoThumbGallery
    },
    on: {
        slideChange: function () {
            console.log(this.activeIndex);
            videosSlides.forEach(element => {
                element.querySelector("video").pause()
            });
            videosSlides[this.activeIndex].querySelector("video").play()
        },
    },
});

let popVideoSlides = document.querySelectorAll(".popSliderVideos .swiper-slide")

const popSliderVideos = new Swiper('.popSliderVideos', {
    // Optional parameters
    speed: 1000,
    // If we need pagination
    navigation: {
        nextEl: '.nextPopVideos',
        prevEl: '.prevPopVideos',
    },
    pagination: {
        el: '.popFractionVideos',
        type: 'fraction',
        formatFractionCurrent: function (number) {

            return number;

        }


    },

    on: {
        slideChange: function () {
            console.log(this.activeIndex);
            popVideoSlides.forEach(element => {
                element.querySelector("video").pause()
            });
            popVideoSlides[this.activeIndex].querySelector("video").play()
        },
    },
});


let popUpVideos = document.querySelector(".popUpVideos")
let closePopVideos = document.querySelector(".closePopVideos")

videosSlides.forEach((element,i) => {

    element.addEventListener("click", function (params) {
        popUpVideos.style.scale = "1"
        popVideoSlides.forEach(element => {
            element.querySelector("video").pause()
        });
        popSliderVideos.slideTo(i,0)
        popVideoSlides[i].querySelector("video").play()
    })
});

closePopVideos?.addEventListener("click", function (params) {
    popUpVideos.style.scale = "0"
    popVideoSlides.forEach(element => {
        element.querySelector("video").pause()
    });
})








const popSlider = new Swiper('.popSlider', {
    // Optional parameters
    speed: 1000,
    // If we need pagination
    navigation: {
        nextEl: '.nextPop',
        prevEl: '.prevPop',
    },
    pagination: {
        el: '.popFraction',
        type: 'fraction',
        formatFractionCurrent: function (number) {

            return number;

        }


    },

});


let popUpImgs = document.querySelector(".popUpImgs")
let closePop = document.querySelector(".closePop")
let openPopUpImgs = document.querySelector(".openPopUpImgs")
openPopUpImgs.addEventListener("click", function (params) {
    popUpImgs.style.scale = "1"
})

closePop?.addEventListener("click", function (params) {
    popUpImgs.style.scale = "0"
})



let shareBtn = document.querySelector(".shareBtn")
let share = document.querySelector(".share")
share.addEventListener("mouseover" , function (params) {
    share.classList.add("activeShare")
})
share.addEventListener("mouseout" , function (params) {
    share.classList.remove("activeShare")
})


document.querySelector('.copyLink').addEventListener('click', function () {
    const currentUrl = window.location.href;
  
    // استفاده از Clipboard API
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        console.log(currentUrl);
        
      })
      .catch(err => {
        console.error('Error copying to clipboard: ', err);
      });
  });
  

  

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