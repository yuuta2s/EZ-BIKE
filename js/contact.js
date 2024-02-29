document.addEventListener("click", function(event){
    event.preventDefault()
  });
  
let nameRegex = /^[a-z\d]{1,12}$/i;
let surnameRegex = /^[a-z\d]{1,12}$/i;
let mailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
let telephoneRegex = /^\d{10}$/;

let prenom = document.getElementById("prenom").value;
let nom = document.getElementById("nom").value;
let email = document.getElementById("email").value;
let tel = document.getElementById("tel").value;

if (!nameRegex.test(nom)) {
    alert('Veuillez entrer votre nom.');
    return false;
}