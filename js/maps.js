
// // console.log("js loaded");

// // var map = L.map("map-container").setView([43.2977, 5.3751], 13); 

// // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //     attribution: '© OpenStreetMap contributors'
// // }).addTo(map);





// // //  var bikeStation = L.marker([stationLatitude, stationLongitude]).addTo(map);
// // //  bikeStation.bindPopup("Nom de la station de vélo");

// // Récupérer l'élément DOM de la carte
// var mapElement = document.getElementById('map');

// // Vérifier si l'élément existe avant d'initialiser la carte
// if (mapElement) {
//     // Initialiser la carte Leaflet
//     var map = L.map('map').setView([43.3002, 5.3694], 16); // Coordonnées géographiques du Panier à Marseille et niveau de zoom

//     // // Ajouter une couche de tuiles (tiles layer) pour afficher la carte de fond
//     // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     //     attribution: '© OpenStreetMap contributors'
//     // }).addTo(map);

//     // Ajouter un marqueur pour illustrer le quartier du Panier
//     L.marker([43.3002, 5.3694]).addTo(map)
//         .bindPopup('Quartier du Panier, Marseille')
//         .openPopup();
// }