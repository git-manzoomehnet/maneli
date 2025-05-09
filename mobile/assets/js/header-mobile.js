const header = document.querySelector('header');
const darkLogo = "/images/darkLogo-m.png"
const lightLogo = "/images/logo-light-m.png"
let actualScroll = 0
let darkFlag = false
if (header.classList.contains("darkHeader")) {
    darkFlag=true

}
window.addEventListener('scroll',()=>{
  const top = Math.min(-(window.scrollY - actualScroll + header.clientHeight), 0)
  if (window.scrollY  > actualScroll) {
    actualScroll = window.scrollY
    header.classList.add("-translate-y-[100%]")
    // header.classList.add("activeHeader")

}

if (top === 0) {
    actualScroll = window.scrollY + header.clientHeight
    header.classList.remove("-translate-y-[100%]")
    if (window.scrollY>50) {
        header.classList.add("activeHeader")
        document.querySelector("header .logo img").setAttribute("src" , darkLogo)
        if (document.querySelector("main").classList.contains("productShow")) {
            header.style.backgroundColor="white"
        }
    }
    else{
        if (document.querySelector("main").classList.contains("productShow")) {
            header.style.backgroundColor="transparent"
        }
        if (!darkFlag) {
            header.classList.remove("activeHeader")
            document.querySelector("header .logo img").setAttribute("src" , lightLogo)
        }
    
    }
  }
})

if (darkFlag) {
    document.querySelector("header .logo img").setAttribute("src" , darkLogo)
}

let menuBar = document.querySelector(".menuBar")
let megaMenu = document.querySelector(".megaMenu")
let closeMagaMenu = document.querySelector(".closeMagaMenu")
menuBar.addEventListener("click" , function (params) {
    megaMenu.classList.remove("translate-x-[100%]")
})
closeMagaMenu.addEventListener("click" , function (params) {
    megaMenu.classList.add("translate-x-[100%]")
})

let productsBtm = document.querySelector(".productsBtm")
let megaProducts = document.querySelector(".megaProducts")
productsBtm.addEventListener("click" , function (params) {
    megaProducts.classList.toggle("activeMegaProducts")
    productsBtm.classList.toggle("!text-gray2")
})