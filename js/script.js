console.log("script.js loaded");

function displayHeader() {
  console.log("displayHeader");
  const header = document.createElement("header");
  header.innerHTML = `
            <img src="../img/assets/ez-bike_logo.svg" id="logo">
            <ul class="navbar-desktop rmm">
                <li><a  href="../index.html">Accueil</a></li>
                <li><a  href="../PageHtml/modeEmploi.html">Mode d'emploi</a></li>
                <li><a  href="../PageHtml/maps.html">Trouver un vélo</a></li>
                <li><a  href="../PageHtml/calculator.html">Calculateur</a></li>
                <li><a  href="../PageHtml/contact.html">Contact</a></li>
            </ul>
            <div class="navmob">
            <input type="checkbox" class="mobile-check " id="check" />
<label for="check" class="label-for-check rm navbar-toggle bg-btn" id="navbar-toggle" onclick="burgerMenu()"><i class="fa-solid fa-bars" style="color: var(--blanc);"></i></label>
<nav class="mobile-nav ">
            <ul class="navbar-mobile d-flox " id="navbar-mobile">
            <li><a href="/index.html">Accueil</a></li>
            <li><a href="/pages/modeEmploi.html">Mode d'emploi</a></li>
            <li><a href="/pages/maps.html">Trouver un vélo</a></li>
            <li><a href="/pages/calculateur.html">Calculateur</a></li>
            <li><a href="/pages/contact.html">Contact</a></li>
            </ul>
          </nav>
          </div>
    `;
 
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
  const navbarMobile = document.getElementById("navbar-mobile");
  navbarMobile.classList.toggle("d-none");
}

window.addEventListener('resize', function () {
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  // Adjust this value based on your breakpoint for desktop view
  var desktopBreakpoint = 1366;

  var mobileCheckbox = document.getElementById('check');

  if (viewportWidth >= desktopBreakpoint) {
      // Uncheck the checkbox if the viewport is in desktop mode
      mobileCheckbox.checked = false;
  }
});
