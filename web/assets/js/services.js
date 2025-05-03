
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
      captchaContainerclass.style.border = "none";
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
