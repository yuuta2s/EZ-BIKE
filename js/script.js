console.log("script.js loaded");


function displayHeader() {
    console.log("displayHeader");
    const header = document.createElement("header");
    header.innerHTML = `
      <header>  <nav>
            <img src="../img/assets/ez-bike_logo.svg" id="logo">
            <ul class="navbar-desktop">
                <li><a href="../index.html">Accueil</a></li>
                <li><a href="../PageHtml/modeEmploi.html">Mode d'emploi</a></li>
                <li><a href="../PageHtml/maps.html">Trouver un vélo</a></li>
                <li><a href="../PageHtml/calculator.html">Calculateur</a></li>
                <li><a href="../PageHtml/contact.html">Contact</a></li>
            </ul>
            <button class="navbar-toggle bg-btn" id="navbar-toggle" onclick="burgerMenu()">NYA</i></button>
            <ul class="navbar-mobile d-flox" id="navbar-mobile">
            <li><a href="/index.html">Accueil</a></li>
            <li><a href="/pages/modeEmploi.html">Mode d'emploi</a></li>
            <li><a href="/pages/maps.html">Trouver un vélo</a></li>
            <li><a href="/pages/calculateur.html">Calculateur</a></li>
            <li><a href="/pages/contact.html">Contact</a></li>
            </ul>
            </nav>
            </header>
    `;
    //les deux nav sont presentes et la desktop disparait quand l'ecran (media screen) est mobile et inversement mais la ca marche pas les deux apparaisent
    document.body.prepend(header);
}

// Afficher le footer sur tt les pages
function displayFooter() {
    console.log("displayFooter");
    const footer = document.createElement("footer");
    footer.innerHTML = `
    <p>&copy; 2024 EZ-BIKE</p>
    `;
    document.body.append(footer);
}

// Burger menu
function burgerMenu() {
    const navbarMobile = document.getElementById('navbar-mobile');
    navbarMobile.classList.toggle('d-none');
}
