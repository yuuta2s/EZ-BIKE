let map = L.map('map').setView([43.2965, 5.3698], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Contributeurs OpenStreetMap'
}).addTo(map);

var apiKey = "MjE0ZDNmMGEtNGFkZS00M2FlLWFmMWItZGNhOTZhMWQyYzM2";

// Fonction pour obtenir les informations des stations
function stationInformation() {
    return fetch("https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/station_information.json?key=" + apiKey)
        .then(response => response.json())
        .then(data => data.data.stations);
}

// Fonction pour obtenir le status des stations (vélos disponibles)
function stationStatus() {
    return fetch("https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/station_status.json?key=" + apiKey)
        .then(response => response.json())
        .then(data => data.data.stations);
}

// Fonction pour obtenir l'icône de vélo en fonction du nombre de vélos disponibles
function getBikeIcon(numBikesAvailable) {
    if (numBikesAvailable > 5) {
        return L.icon({
            iconUrl: '../img/assets/bike-green.svg',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        });
    } else if (numBikesAvailable > 0) {
        return L.icon({
            iconUrl: '../img/assets/bike-orange.svg',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        });
    } else {
        return L.icon({
            iconUrl: '../img/assets/bike-red.svg',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        });
    }
}

// Fonction pour ajouter les marqueurs/ popup sur la carte avec les informations
Promise.all([stationInformation(), stationStatus()])
    .then(([stationsInfo, stationsStatus]) => {
        stationsInfo.forEach(stationInfo => {
            var stationStatusInfo = stationsStatus.find(status => status.station_id === stationInfo.station_id);
            if (stationInfo.lat && stationInfo.lon && stationStatusInfo) {

                var marker = L.marker([parseFloat(stationInfo.lat), parseFloat(stationInfo.lon)], {
                    icon: getBikeIcon(stationStatusInfo.num_bikes_available)
                }).addTo(map);

                marker.bindPopup('<b>Nom de la station:</b> ' + stationInfo.name + '<br><b>Vélos disponibles:</b> ' + stationStatusInfo.num_bikes_available);
            }
        });
    })
    .catch(error => console.error('Erreur lors de la récupération des données:', error));

//Pour rechercher une station
let inputSearchbar = document.getElementById("findStation");

async function fetchvelo() {
    inputSearchbar.addEventListener("input", function (e) {
        let userChoice = inputSearchbar.value.toLowerCase();
        stationInformation().then(stationsInfo => {
            stationStatus().then(stationsStatus => {
                //retourne le tableau filtré
                let stationPostfilter = stationsInfo.filter(station => station.name.toLowerCase().includes(userChoice));
                map.eachLayer(layer => {
                    if (layer instanceof L.Marker) {
                        map.removeLayer(layer);
                    }
                    //suppression des points fitrés
                });
                // affichage icônes
                stationPostfilter.forEach((stationInfo) => {
                    var stationStatusInfo = stationsStatus.find(status => status.station_id === stationInfo.station_id);
                    if (stationInfo.lat && stationInfo.lon && stationStatusInfo) {
                        var marker = L.marker([parseFloat(stationInfo.lat), parseFloat(stationInfo.lon)], {
                            icon: getBikeIcon(stationStatusInfo.num_bikes_available)
                        }).addTo(map);
                        marker.bindPopup('<b>Nom de la station:</b> ' + stationInfo.name + '<br><b>Vélos disponibles:</b> ' + stationStatusInfo.num_bikes_available);
                    }
                });
            });
        });
    });
}

fetchvelo();

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function resetMap() {
    map = map.off();
    map = map.remove();

  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.body.scrollTop = 0; // For Safari
 map = L.map('map').setView([43.2965, 5.3698], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Contributeurs OpenStreetMap'
}).addTo(map);

var apiKey = "MjE0ZDNmMGEtNGFkZS00M2FlLWFmMWItZGNhOTZhMWQyYzM2";

// Fonction pour obtenir les informations sur les stations
function stationInformation() {
    return fetch("https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/station_information.json?key=" + apiKey)
        .then(response => response.json())
        .then(data => data.data.stations);
}

// Fonction pour obtenir les status des stations (vélos disponibles)
function stationStatus() {
    return fetch("https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/station_status.json?key=" + apiKey)
        .then(response => response.json())
        .then(data => data.data.stations);
}

// Fonction pour obtenir l'icône de vélo en fonction du nombre de vélos disponibles
function getBikeIcon(numBikesAvailable) {
    if (numBikesAvailable > 5) {
        return L.icon({
            iconUrl: '../img/assets/bike-green.svg',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        });
    } else if (numBikesAvailable > 0) {
        return L.icon({
            iconUrl: '../img/assets/bike-orange.svg',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        });
    } else {
        return L.icon({
            iconUrl: '../img/assets/bike-red.svg',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        });
    }
}

// Fonction pour ajouter les marqueurs/ popup sur la carte avec les informations
Promise.all([stationInformation(), stationStatus()])
    .then(([stationsInfo, stationsStatus]) => {
        stationsInfo.forEach(stationInfo => {
            var stationStatusInfo = stationsStatus.find(status => status.station_id === stationInfo.station_id);
            //si tous les IDs sont identiques et que la latitude, la longitude et les infos sur le statut existent : 
            if (stationInfo.lat && stationInfo.lon && stationStatusInfo) {
                //marqueur sur la carte
                var marker = L.marker([parseFloat(stationInfo.lat), parseFloat(stationInfo.lon)], {
                    icon: getBikeIcon(stationStatusInfo.num_bikes_available)
                }).addTo(map);
                //Popup
                marker.bindPopup('<b>Nom de la station:</b> ' + stationInfo.name + '<br><b>Vélos disponibles:</b> ' + stationStatusInfo.num_bikes_available);
            }
        });
    })
    .catch(error => console.error('Erreur lors de la récupération des données:', error));
}

