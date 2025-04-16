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
    centeredSlides: true,
    speed: 1000,
    navigation: {
        nextEl: '.nextMembers',
        prevEl: '.prevMembers',
      },
 
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
  console.log(args);

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

console.log(emptyFlag);

  if (emptyFlag) {

    let val = document.querySelector(".commentP textarea").value;
    let userName = document.querySelector(".commentP .userName").value;
    console.log("val", val);
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
  