
let showRoomBox = document.querySelectorAll(".showRoomBox")
showRoomBox.forEach(element => {
    let idMember = element.getAttribute("data-id")
    fetch(`/load-showroom.inc?id=${idMember}&refresh=true`)
    .then(response => response.text())

    .then(userData => {
    
      
      element.innerHTML=userData

      let mapSectoin = document.querySelectorAll(".mapSectoin")
      if (mapSectoin.length > 0) {

          mapSectoin.forEach(element2 => {

              let xLat = element2.getAttribute("data-x").replace(/<p>|<\/p>/g, "");
              let yLat = element2.getAttribute("data-y")
   
         
              const map = L.map('map').setView([xLat, yLat], 20);
              const config = {
                  center: [xLat, yLat], // مختصات دقیق تجریش
                  zoom: 10,
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
              L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                  attribution: '© OpenStreetMap contributors © CartoDB'
              }).addTo(map);
          });
      }


    })
    .catch(error => {
      console.error('Error:', error);
    });
});