const thumbSlider = new Swiper('.thumbSlider', {
  // Optional parameters
  direction: 'vertical',
  slidesPerView: 2.5,
  spaceBetween: 25,  

speed:1000,
  // Navigation arrows
  navigation: {
    nextEl: '.nextThumb',
    prevEl: '.prevThumb',
  },

});
const gallerySlider = new Swiper('.gallerySlider', {
  // Optional parameters
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 25,  

speed:1000,
thumbs: {
  swiper: thumbSlider
},
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


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

      
    })
    .catch(err => {
      console.error('Error copying to clipboard: ', err);
    });
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







let popUpForm = document.querySelector(".popUpForm")
let closePop = document.querySelector(".closePop")
let openpopUpForm = document.querySelector(".openpopUpForm")
openpopUpForm.addEventListener("click", function (params) {
popUpForm.style.scale = "1"
})

closePop?.addEventListener("click", function (params) {
popUpForm.style.scale = "0"
})

let captchaInput;
let captchaContainerclass;

let loaderContainer = document.querySelector(".loaderContainer");
let formBtn = document.querySelector(".formBtn");
let loaderForm = document.querySelector(".loaderForm");
formBtn.addEventListener("click", function (params) {
// formBtn.querySelector("span").style.display = "none";
loaderForm.style.display = "block";

setTimeout(() => {
  let allertData = document.querySelectorAll("[data-bc-validation-part] li")

  
  allertData.forEach(element => {
    let prevInput = element.parentElement.previousElementSibling
    if (prevInput?.value == "") {
      prevInput.classList.add("errorPlaceholder");
      prevInput.setAttribute("placeholder", "پر کردن این فیلد الزامی است");
    }

    setTimeout(() => {
      prevInput.setAttribute("placeholder", "");

      prevInput.classList.remove("errorPlaceholder");
    }, 3000);
  })
}, 100);
if (captchaInput.value == "") {
  captchaInput.setAttribute("placeholder", "پر کردن این فیلد الزامی است");
  captchaInput.classList.add("errorPlaceholder");
  setTimeout(() => {
    captchaContainerclass.style.borderBottom = "1px solid black";
    captchaInput.setAttribute("placeholder", "کد  امنیتی را وارد نمایید");
    captchaInput.classList.remove("errorPlaceholder");
  }, 3000);
}
});
function onSource1(args) {

  const captcha = document.querySelector(
  ".homeForm1 #requestBox input[name='captcha']"
).value;
const captchaid = document.querySelector(
  ".homeForm1 #requestBox input[name='captchaid']"
).value;
const stringJson = JSON.stringify(args.source?.rows[0]);

$bc.setSource("edit.object1", {
  value: stringJson,
  captcha: captcha,
  captchaid: captchaid,
});
}

let responsMsg = document.querySelector(".responsMsg1");
let responsMsgIn = document.querySelector(".responsMsg1 span");
async function OnProcessedEditObject1(args) {

  const response = args.response;
const json = await response.json();


if (json.errorid == 6) {

  responsMsg.style.display = "block";
  responsMsgIn.innerHTML = "درخواست شما با موفقیت ثبت گردید";
  responsMsgIn.style.color = "#1A6902";
  document.querySelector("form").reset();
  let questions = document.querySelectorAll(
    ".homeForm1 div[data-bc-question]"
  );
  setTimeout(() => {
    responsMsg.style.display = "none";
    formBtn.querySelector("span").style.display = "flex";
    loaderForm.style.display = "none";
  }, 2000);
}
if (json.errorid == 4) {

  
  responsMsgIn.innerHTML = "مشکلی پیش آمده، لطفا مجدد تلاش فرمایید.";

  responsMsg.style.display = "block";
  responsMsgIn.style.color = "#FF2727";
  document.querySelector("form").reset();

  setTimeout(() => {
    formBtn.querySelector("span").style.display = "flex";
    loaderForm.style.display = "none";
    responsMsg.style.display = "block";
  }, 2000);
}
if (json.errorid == 15 && captchaInput.value != "") {

  
  responsMsgIn.innerHTML = "لطفا کپچا را به درستی وارد کنید.";

  setTimeout(() => {
    formBtn.querySelector("span").style.display = "flex";
    loaderForm.style.display = "none";
    responsMsg.style.display = "block";
  }, 2000);
}
}

function renderFn1(params) {


document.querySelector(".qclass8").style.display = "flex";
captchaInput = document.querySelector(".captchaContainerclass .codeinputm");
captchaContainerclass = document.querySelector(".captchaContainerclass");
loaderContainer.style.display = "none";

let questions = document.querySelectorAll(".homeForm1 div[data-bc-question]");
questions.forEach((element) => {
  element.classList.add("afterStar");


});
}

function renderEditobject(params) {
loaderContainer.style.display = "none";
}




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