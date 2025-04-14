
let mapSectoin = document.querySelector(".mapSectoin")
let xLat = mapSectoin.getAttribute("data-x")
let yLat = mapSectoin.getAttribute("data-y")
const map = L.map('map').setView([xLat, yLat], 12);
const config = {
    center: [xLat, yLat], // مختصات دقیق تجریش
    zoom: 30,
    tileLayer: {
        url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        options: {
            maxZoom: 40,
            minZoom: 15,
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            detectRetina: true
        }
    },

};
// const customIcon = L.icon({
//     iconUrl: '/images/locationIcon.png',
//     iconSize: [28, 28],
//     iconAnchor: [12, 41]
// });
// استفاده از لایه تاریک CartoDB
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CartoDB'
}).addTo(map);


// L.marker(config.center, { icon: customIcon })
//     .addTo(map)


let shBox = document.querySelectorAll(".shBox")
shBox.forEach(element => {
    let idMember = element.getAttribute("data-sh")
    fetch(idMember)
    .then(response => response.text())
    .then(userData => {       
      element.innerHTML="";
      element.innerHTML=userData;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});