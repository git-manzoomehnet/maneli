let scrollTotop = document.querySelector(".scrollTotop")
if (window.pageYOffset>50) {
    scrollTotop.style.scale="1"
}
else{
    
    scrollTotop.style.scale="0"
}
document.addEventListener("scroll" , function (params) {
    if (window.pageYOffset>50) {
        scrollTotop.style.scale="1"
    }
    else{
        
        scrollTotop.style.scale="0"
    }
})

scrollTotop.addEventListener("click" , function(params) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})