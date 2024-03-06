
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
 
let nameRegex = /^[a-z\d]{1,12}$/i;
let surnameRegex = /^[a-z\d]{1,12}$/i;
let mailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
let telephoneRegex = /^\d{10}$/;

let prenomInput = document.getElementById("prenom");
let nomInput = document.getElementById("nom");
let emailInput = document.getElementById("email");
let telInput = document.getElementById("tel");

let prenom = prenomInput.value.trim();
let nom = nomInput.value.trim();
let email = emailInput.value.trim();
let tel = telInput.value.trim();

if (!nameRegex.test(prenom)) {
  e.preventDefault();
  alert('Veuillez entrer un prénom valide.');
}

if (!surnameRegex.test(nom)) {
  e.preventDefault();
  alert('Veuillez entrer un nom valide.');

}

if (!mailRegex.test(email)) {
  e.preventDefault();
    alert('Veuillez entrer une adresse e-mail valide.');
}

if (!telephoneRegex.test(tel)) {
  e.preventDefault();
    alert('Veuillez entrer un numéro de téléphone valide.');
} 

})
});