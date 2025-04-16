const gallerySlider = new Swiper('.gallerySlider', {
    // Optional parameters
    speed: 1000,
    // If we need pagination
  
    spaceBetween: 78,

    slidesPerView:3,
    
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
shareBtn.addEventListener("mouseenter" , function (params) {
    share.classList.add("activeShare")
})
shareBtn.addEventListener("mouseout" , function (params) {
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
  