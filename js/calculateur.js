let form = document.getElementById("calc");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("oki");

  //distance par jour
  //jour travailes par semaine
  const dist = parseFloat(document.getElementById("distance").value);
  const trav = parseFloat(document.getElementById("travailDays").value);

  if (isNaN(dist) || isNaN(trav)) {
    alert("veuillez entrer une valeur");
    return;
  }

  if (trav > 7) {
    alert("Vous ne pouvez pas choisir au dela de 7 jours");
    return;
  }
  const totalem = dist * trav * 0.12;
  const monthlyem = Math.floor(totalem * 4);

  alert(
    "vos émissions de co2 pour vos trajets domicile-travail sont de: " +
      monthlyem +
      " kg par mois."
  );
});
