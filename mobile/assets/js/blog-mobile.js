let filterBtn =  document.querySelectorAll(".filterBtn")
let blogContainer = document.querySelector(".blogContainer")
filterBtn[0].classList.add("activeFilter")
filterBtn.forEach(element => {
    element.addEventListener("click",function (params) {
        filterBtn.forEach(element2 => {
            element2.classList.remove("activeFilter")
        });
    
        element.classList.add("activeFilter")
        let idMember = element.getAttribute("data-blog")
        fetch(idMember)
        .then(response => response.text())
        .then(userData => {       
          blogContainer.innerHTML="";
          blogContainer.innerHTML=userData;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    })
});