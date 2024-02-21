console.log("script.js loaded");

// Burger menu
function burgerMenu() {
    console.log('burgerMenu')
    const navbarMobile = document.getElementById('navbar-mobile')
    navbarMobile.classList.toggle('d-none')
}

function displayHeader() {
    console.log('displayHeader')
    const header = document.createElement('header')
    header.innerHTML = `
        <nav>
            <img src="../img/assets/ez-bike_logo.svg" id="logo">
            <ul class="navbar-desktop">
                <li><a href="../index.html">Accueil</a></li>
                <li><a href="./PageHtml/modeEmploi.html">Mode d'emploi</a></li>
                <li><a href="../PageHtml/maps.html">Trouver un vélo</a></li>
                <li><a href="../PageHtml/calculator.html">Calculateur</a></li>
                <li><a href="../PageHtml/contact.html">Contact</a></li>
            </ul>
        </nav>
    `
    document.body.prepend(header)
}

// Afficher le footer sur tt les pages
function displayFooter() {
    console.log('displayFooter')
    const footer = document.createElement('footer')
    footer.innerHTML = `
    <p>&copy; 2024 EZ-BIKE</p>
    `
    document.body.append(footer)
}