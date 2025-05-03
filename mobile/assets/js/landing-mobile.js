
const accordions = document.querySelectorAll(".accordion");

const openAccordion = (accordion) => {
    const content = accordion.querySelector(".accordion__content");
    accordion.classList.add("accordion__active");
    accordion.querySelector(".arrow").style.rotate = "180deg"
    content.style.maxHeight = content.scrollHeight + 30 + "px";
};

const closeAccordion = (accordion) => {
    const content = accordion.querySelector(".accordion__content");
    accordion.classList.remove("accordion__active");
    accordion.querySelector(".arrow").style.rotate = "0deg"
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

const projectsSlider = new Swiper('.projectsSlider', {
    slidesPerView: 1.5,
    spaceBetween: 12,
    loop: true,
    centeredSlides: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
});
const commentsSlider = new Swiper('.commentsSlider', {
    slidesPerView: 1,
    spaceBetween: 12,
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
    text.innerHTML = 'درخواست شما با موفقیت ثبت شد'
    commentP.reset()
    messageSend.style.display = "block"

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

    setTimeout(() => {
      messageSend.style.display = "none"
    }, 3500)

  }


})
