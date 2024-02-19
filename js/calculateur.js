let form = document.getElementById("calc")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("oki");

    //distance par jour
    //jour travailes par semaine
    const dist = parseFloat(document.getElementById("distance").value);
    const trav = parseFloat(document.getElementById("travailDays").value);


    if (isNaN(dist) || isNaN(trav)) {
        alert("veuillez entrer une valeur");
        return;
    };


    const totalem = (dist * trav) * 0.12;
    const monthlyem = totalem * 4

    alert("les émissions de co2 pour les trajets dom/trav sont de: " + monthlyem + " kg par mois.");
});
//                 <button class="navbar-toggle bg-btn" id="navbar-toggle" onclick="burgerMenu()"><i class="fa-solid fa-bars" style="color: #ffffff;"></i></button>
// <ul class="navbar-mobile d-none d-flex" id="navbar-mobile">
//     <li><a href="/index.html">Accueil</a></li>
//                 <li><a href="/pages/modeEmploi.html">Mode d'emploi</a></li>
//                 <li><a href="/pages/maps.html">Trouver un vélo</a></li>
//                 <li><a href="/pages/calculateur.html">Calculateur</a></li>
//                 <li><a href="/pages/contact.html">Contact</a></li>