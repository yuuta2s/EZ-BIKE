
projet deployé sur Live Server.


# Header, Footer, et Burger Menu Responsive

Ce script JavaScript gère l'affichage d'un en-tête (header), d'un pied de page (footer) et d'un menu hamburger (burger menu) pour rendre votre site web réactif. Voici un guide pour comprendre et utiliser ces fonctionnalités.

## Comment l'utiliser


1. **Affichage de l'en-tête (Header) :**
   - Utilisez la fonction `displayHeader()` pour générer et afficher l'en-tête sur vos pages. Cette fonction crée une structure d'en-tête avec un logo, une barre de navigation pour le mode bureau, et un menu hamburger pour les appareils mobiles.
     ```
     displayHeader();
     ```

2. **Affichage du pied de page (Footer) :**
   - Nous avons créer la fonction `displayFooter()` pour générer et afficher le pied de page sur vos pages. Cette fonction crée une structure de pied de page simple.
     ```
     displayFooter();
     ```
3. **Menu burger (Burger Menu) :**
   - Nous avons créer la fonction `burgerMenu()` pour activer/désactiver le menu hamburger. Cette fonction est liée à la case à cocher (checkbox) du menu hamburger.
     ```
     burgerMenu();
     ```

4. **Réactivité (Responsive) :**
   - Le script inclut également une fonction pour gérer la réactivité du menu. Si la largeur de la fenêtre dépasse un certain point de rupture (breakpoint), la case à cocher du menu hamburger sera désactivée.
     ```
     window.addEventListener('resize', function () {
         // ... reste du code ...
     });
     ```



# Partie Acceuil :

La page d'acceuille est la premiére page sur laquelle la plupart des utilisateurs vont attérir.

## Elles est composée de trois bloc : "Roulez vert"; "Comment ça marche ?" et "Se rendre à la station".

Sous les deux premiers blocs se trouve des fléches pointants vers le bas et si l'utilisateur clique dessus, la page scroll de maniére "smooth" vers la partie suivante.

-La premiére partie posséde une particularitée, elle contient deux boutons : "Calculer CO2" & "Trouver une station".

Chacuns de ses boutons redirigent vers la page concerné (Calculateur pour le premier et trouver un vélo pour le second).

- La page à été crée dans une dynamique de "Mobile first" et est dnc responsive dans les dimensions 1920*1080 & 360*800.

En+ = LA page HTML à été alimenté en css grace à la méthode BEM via un fichier css générique crée en amont.

Enfin pour l'index comme pour chacunes des pages le header et le footer ont été rajoutés dynamiquement en utilisant un fichier javascript commun pour tout le projet.




## Mode emploi:

-la page contient 3 images sur chaque image contient des information sur le fonctionnement.

en ce qui concernent le Javascript,  un caroussel a été creer pour la version mobile avec 2 boutons au click sur un bouton  réagit comme slide  pour facilité la présentation du mode emploi en inserant le titre et les paragraphe a l'interieur du caroussel.

partie responsive pour que sa soit adapter version mobile

## Trouver un vélib (maps):
-La page "maps" affiche une carte (grâce à l'API Leaflet) et permet à l'utilisateur de chercher un vélo.

-Les stations sont représentées sur la carte grâce à l'API de "levélo" (GBFS General Bikeshare Feed Specification) et l'utilisateur peut prendre connaissance de l'emplacement précis des stations ainsi que du nombre de vélos disponibles. 

-Spécificités : les icones ne sont pas celles disponibles sur le site de Leaflet mais celles fournies dans le brief.

-La barre de recherche fonctionne grâce aux méthodes .filter et .includes

-la combinaison des données (extraites des objet JSON) est effectué grâce à leur ID

-Promise.all() est une fonction qui prend un tableau de promesses en entrée et renvoie une nouvelle promesse. Cette nouvelle promesse est résolue lorsque toutes les promesses dans le tableau d'entrée sont résolues, ou rejetée dès que l'une des promesses est rejetée.
Elle combine leurs résultats en un seul tableau. 
Une des deux requêtes récupère des informations sur les stations de vélos (stationInformation()), tandis que l'autre récupère les statuts actuels de ces stations (stationStatus()).
Plus précisément, une fois que les données sur les stations de vélos et leurs statuts sont récupérées, Promise.all() associe les informations de chaque station avec son statut en utilisant l'identifiant de station comme point de correspondance. Cela vous permet ensuite de construire un tableau contenant les informations sur chaque station, y compris son statut actuel, pour une utilisation ultérieure dans votre application.

-Points qui pourraient être améliorés prioritairement : augmenter le nombre de fonctions et factoriser.


##Calculateur d'émissions de CO2 pour les trajets domicile-travail
Ce script JavaScript est conçu pour calculer les émissions de CO2 mensuelles résultant des trajets domicile-travail en voiture. 

#Comment l'utiliser ?

-Structure du formulaire :

-Le formulaire contient deux champs :
Un champ pour la distance parcourue par jour (en kilomètres) avec l'ID "distance".
Un champ pour le nombre de jours travaillés dans la semaine avec l'ID "travailDays".


<form id="calc">
    <label for="distance">Distance parcourue par jour (en kilomètres) :</label>
    <input type="text" id="distance" class="text" name="distance" required>
    <label for="travailDays">Nombres de jours travaillés dans la semaine :</label>
    <input type="text" id="travailDays" class="text" name="travailDays" required>
    <input type="submit" value="Calculer" id="calculerButton">
</form>


-Écouteur d'événement :

Le script utilise un écouteur d'événement pour le formulaire, ce qui signifie que le calcul sera déclenché lorsque le formulaire est soumis.
let form = document.getElementById("calc");
form.addEventListener('submit', (e) => {
    // ...reste du code
});


-Calcul des émissions :

Le script effectue le calcul des émissions de CO2 mensuelle en fonction de la distance quotidienne et du nombre de jours travaillés en utilisant le facteur moyen de 0.12kg/km.
 Les résultats sont affichés dans une alerte et sont aussi arrondis avec la méthode Math.floor qui renvoie une valeur « double » égale au plus grand entier inférieur ou égal à l'argumen

-Conditions de fonctionnement:

Les distances et les jours travaillés doivent être des nombres valides.
Le nombre de jours travaillés ne peut pas dépasser 7 par semaine.

-Exemple d'utilisation:
Remplissez les champs du formulaire avec les informations appropriées. 32 km par jour, avec 5 jours travailles dans la semaine.
Cliquez sur le bouton "Calculer".
Consultez l'alerte avec les émissions de CO2 mensuelles estimées pour vos trajets domicile-travail. résultat attendu : 76 kg de C02 par mois. 




##Contact:
La page de contact a pour objectif d'établir une communication entre l'utilisateur et EZ-BIKE.

Ainsi, le code HTML contient uniquement un formulaire comprenant 5 champs de type texte.
Ces 5 champs sont organisés grâce à un affichage flex pour la version mobile, tandis qu'un affichage grid est utilisé pour les autres appareils. Le reste du style est conforme à la charte graphique choisie lors du maquettage.

En ce qui concerne le JavaScript, le code vise à valider un formulaire de contact avant son envoi. Il utilise des expressions régulières pour vérifier que les entrées de l'utilisateur correspondent à des formats spécifiques pour le prénom, le nom, l'adresse e-mail et le numéro de téléphone.
Les expressions régulières utilisées sont les suivantes :

  
- nameRegex : permet d'accepter les prénoms et noms composés de lettres et de chiffres, avec une longueur minimale de 1 caractère et maximale de 12 caractères.
- surnameRegex : utilisé pour valider le nom de famille selon les mêmes critères que le prénom.
- mailRegex : vérifie que l'adresse e-mail est au format valide. Cette expression régulière autorise les adresses e-mail avec un nom d'utilisateur (lettres, chiffres, points, tirets), suivi d'un "@" et d'un nom de domaine valide (lettres, chiffres, tirets), suivi d'une extension de domaine (2 à 8 lettres) avec éventuellement une sous-extension.
- telephoneRegex : vérifie que le numéro de téléphone est composé exactement de 10 chiffres.




