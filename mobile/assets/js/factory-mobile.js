const gallerySlider = new Swiper('.gallerySlider', {
    // Optional parameters
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: '.nextMembers',
        prevEl: '.prevMembers',
    },

});

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

    thumbs: {
        swiper: videoThumbGallery
    },
    on: {
        slideChange: function () {
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

