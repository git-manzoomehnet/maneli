const gallerySlider = new Swiper('.gallerySlider', {
  // Optional parameters
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
});

const commentsSlider = new Swiper('.commentsSlider', {
  slidesPerView: 3,
  spaceBetween: 57,
  loop: true,
  centeredSlides: false,
  speed: 1000,
  navigation: {
      nextEl: '.nextMembers',
      prevEl: '.prevMembers',
    },

<<<<<<< HEAD
=======
  const commentsSlider = new Swiper('.commentsSlider', {
    slidesPerView: 3,
    spaceBetween: 57,
    loop: true,
    centeredSlides: false,
    speed: 1000,
    navigation: {
        nextEl: '.nextMembers',
        prevEl: '.prevMembers',
      },
 
>>>>>>> 47819a86bffc7101a1d2b8ea685dd2705b621a54
});


const host = {
  debug: !1,
  settings: {
    "connection.web.callcommand": "/",
    "connection.web.trust_login": "https://basispanel.ir/apicms",
    "connection.web.basiscore": "https://basispanel.ir/apicms",
    "connection.web.media": "https://basispanel.ir/apicms",
    "connection.web.userbehavior": "https://basispanel.ir/apicms",
    "default.dbsource.verb": "post",
    "default.call.verb": "get",
    "default.viewCommand.groupColumn": "prpid",
    "default.dmnid": "4945",
    "default.binding.regex": "\\{##([^#]*)##\\}",
  },
};

let messageSend = document.querySelector(".messageSend")
let commentP = document.querySelector(".commentP")

function renderCommentFn(args) {

  
}
document.querySelector('.submitComment').addEventListener('click', (event) => {
//  let input1  = document.querySelector('.namee')
event.preventDefault();
let textar = document.querySelectorAll('.commentP input')
let textareas = document.querySelectorAll('.commentP textarea')
let emptyFlag = false;

textar.forEach(element => {
if (element.value.trim() === "") {
  emptyFlag = false;
}
else{
  emptyFlag=true
}
});

textareas.forEach(element => {
if (element.value.trim() === "") {
  emptyFlag = false;
}
else{
  emptyFlag=true
}
});



if (emptyFlag) {

  let val = document.querySelector(".commentP textarea").value;
  let userName = document.querySelector(".commentP .userName").value;

  $bc.setSource('db.send', true)
  $bc.setSource('db.senduserName', userName)
  $bc.setSource('db.sendcomment', val)
  $bc.setSource('db.run', true)
  let sendbox = document.querySelector('.messageSend')
  let text = sendbox.querySelector('p')
  text.innerHTML = 'درخواست شما با موفقیت ثبت گردید.'

  commentP.reset()
  messageSend.style.display = "block"
  messageSend.style.color = "#1EB100"

  document.querySelector(".commentP").reset();
  setTimeout(() => {
    messageSend.style.display = "none"
  }, 3500)
}
else {
  let sendbox = document.querySelector('.messageSend')
  let text = sendbox.querySelector('p')
  text.innerHTML = 'فیلدهای الزامی را پر کنید'
  messageSend.style.display = "block"
  messageSend.style.color = "#FF0000"

  setTimeout(() => {
    messageSend.style.display = "none"
  }, 3500)

}


})




const relatedBlog = new Swiper('.relatedBlog', {
  // Optional parameters
  speed:1000,
  
  spaceBetween: 78,

  slidesPerView:3,
  // If we need pagination
  pagination: {
    el: '.relatedBlogPagination',
    clickable:true,
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


const popSlider = new Swiper('.popSlider', {
  // Optional parameters
  speed:1000,
  // If we need pagination
  speed:1000,
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
let gallerySliders = document.querySelectorAll(".gallerySlider .swiper-slide")
gallerySliders?.forEach((element,i) => {
  element.addEventListener("click" , function (params) {
      popUpImgs.style.scale="1"
      popSlider.slideTo(i,0)
  })
});

closePop?.addEventListener("click" , function (params) {
  popUpImgs.style.scale="0"
})




let shareBtn = document.querySelector(".shareBtn")
let share = document.querySelector(".share")
share.addEventListener("mousemove" , function (params) {
<<<<<<< HEAD
  share.classList.add("activeShare")
})
share.addEventListener("mouseout" , function (params) {
  share.classList.remove("activeShare")
=======
    share.classList.add("activeShare")
})
share.addEventListener("mouseout" , function (params) {
    share.classList.remove("activeShare")
>>>>>>> 47819a86bffc7101a1d2b8ea685dd2705b621a54
})


document.querySelector('.copyLink').addEventListener('click', function () {
  const currentUrl = window.location.href;

  // استفاده از Clipboard API
  navigator.clipboard.writeText(currentUrl)
    .then(() => {

      
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
<<<<<<< HEAD

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
=======
  




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
>>>>>>> 47819a86bffc7101a1d2b8ea685dd2705b621a54
