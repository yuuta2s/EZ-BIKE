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
