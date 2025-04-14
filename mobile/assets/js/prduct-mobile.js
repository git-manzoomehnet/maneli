const mainSlider = new Swiper('.mainSlider', {
  slidesPerView: 1,
  direction: "vertical",
  spaceBetween: 10,
  loop: true,


  speed: 1000,
  navigation: {
    nextEl: '.nextMain',
    prevEl: '.prevMain',
  },
  pagination: {
    el: '.mainFraction',
    type: 'fraction',
    formatFractionCurrent: function (number) {

      return number;

    }


  },
  on: {
    init: function (swiper) {



    },
  },
});



let shareBtn = document.querySelector(".shareBtn")
let share = document.querySelector(".share")
shareBtn.addEventListener("click", function (params) {
  share.classList.toggle("activeShare")
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
    else {
      emptyFlag = true
    }
  });

  textareas.forEach(element => {
    if (element.value.trim() === "") {
      emptyFlag = false;
    }
    else {
      emptyFlag = true
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




const relatedBlog = new Swiper('.relatedBlog', {
  // Optional parameters
  speed: 1000,
  // If we need pagination
  pagination: {
    el: '.relatedBlogPagination',
    clickable: true,
  },


});
const relatedProduct = new Swiper('.relatedProduct', {
  // Optional parameters
  speed: 1000,
  // If we need pagination
  pagination: {
    el: '.relatedProductPagination',
    clickable: true,
  },


});
const relatedProject = new Swiper('.relatedProject', {
  // Optional parameters
  speed: 1000,
  // If we need pagination
  pagination: {
    el: '.relatedProjectPagination',
    clickable: true,
  },


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
  console.log(captchaInput.value);
  setTimeout(() => {
    let allertData = document.querySelectorAll("[data-bc-validation-part] li")
    console.log(allertData, allertData);

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
      captchaContainerclass.style.border = "none";
      captchaInput.setAttribute("placeholder", "کد  امنیتی را وارد نمایید");
      captchaInput.classList.remove("errorPlaceholder");
    }, 3000);
  }
});
function onSource1(args) {
  console.log("onSource");
  const captcha = document.querySelector(
    ".homeForm1 #requestBox input[name='captcha']"
  ).value;
  const captchaid = document.querySelector(
    ".homeForm1 #requestBox input[name='captchaid']"
  ).value;
  const stringJson = JSON.stringify(args.source?.rows[0]);
  console.log("stringJson", stringJson);
  $bc.setSource("edit.object1", {
    value: stringJson,
    captcha: captcha,
    captchaid: captchaid,
  });
}

let responsMsg = document.querySelector(".responsMsg1");
let responsMsgIn = document.querySelector(".responsMsg1 span");
async function OnProcessedEditObject1(args) {
  console.log("OnProcessedEditObject1");
  const response = args.response;
  const json = await response.json();
  console.log(json);

  if (json.errorid == 6) {
    console.log(json);
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
    console.log(json);

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
    console.log(json);

    responsMsgIn.innerHTML = "لطفا کپچا را به درستی وارد کنید.";

    setTimeout(() => {
      formBtn.querySelector("span").style.display = "flex";
      loaderForm.style.display = "none";
      responsMsg.style.display = "block";
    }, 2000);
  }
}

function renderFn1(params) {


  document.querySelector(".qclass8").style.display = "block";
  captchaInput = document.querySelector(".captchaContainerclass .codeinputm");
  captchaContainerclass = document.querySelector(".captchaContainerclass");
  loaderContainer.style.display = "none";
  console.log(loaderContainer, 'loaderContainer');
  let questions = document.querySelectorAll(".homeForm1 div[data-bc-question]");
  questions.forEach((element) => {
    element.classList.add("afterStar");

    //   let title = element.querySelector(".homeForm1 [data-bc-question-title]");
    //   let qInput = element.querySelector(".homeForm1 input");
    //   let qTxtArea = element.querySelector(".homeForm1 textarea");
    //   if (title) {
    //     title = element.querySelector(
    //       ".homeForm1 [data-bc-question-title]"
    //     ).innerHTML;
    //     if (qInput) {
    //       qInput.setAttribute("placeholder", title);
    //       qInput.setAttribute("aria-label", title);
    //     } else if (qTxtArea) {
    //       qTxtArea.setAttribute("placeholder", title);
    //       qTxtArea.setAttribute("aria-label", title);
    //     }
    //   }
  });
}

function renderEditobject(params) {
  loaderContainer.style.display = "none";
}
