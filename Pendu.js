
// Tableau avec les mots à deviner

let motsadeviner = [
  "ORDINATEUR",
    "TELEPHONE",
    "TOUR",
    "SOURIS",
    "ASCENCEURS",
    "ASSASSINS",
    "FUSIL",
    "COCA",
    "ICE",
    "PAIN",
    "CROISSANT",
    "STYLO",
    "BOUTEILLE",
    "COUPLE",
    "CLAVIER",
    "DOUDOU"
];


// Generer et Recuperer un mot aleatoirement

let AleatoireMots = motsadeviner[Math.floor(Math.random() * motsadeviner.length)];

document.getElementById("Aleatoire").innerHTML = AleatoireMots;

for (let i = 0; i <= AleatoireMots.length; i++) {

    document.getElementById('lettre' + i).innerHTML = "_";

}


// Evenement click sur le bouton Valider

document.getElementById("Valider").addEventListener("click", function () {


    // Boucle pour les résultats et indications

    for (let i = 0; i < AleatoireMots.length; i++) {


        // On recupere la valeur de l'input

        let Recuperer = document.getElementById("Input").value;


        // Affiche la lettre saisie dans l'input

        document.getElementById('Valeur').innerHTML = Recuperer;


        // Indiquer au joueur si La lettre est bonne ou non

        // Si la lettre entrée dans l'input est strictement égale à -1 (-1 vaut la valeur de la lettre qui n'existe pas dans la chaine)
        if (AleatoireMots.indexOf(Recuperer) === -1) {


            // alors la lettre proposé n'est pas bonne
            document.getElementById("Indication").innerHTML = "La lettre proposé n'est pas dans le mot"

        } else {


            // Sinon la lettre proposé fait parti du mot
            document.getElementById("Indication").innerHTML = "La lettre proposé est dans le mot";

        }

        // Affiche la lettre si elle est bonne ou affiche rien

        // Si la valeur est strictement égale au mot aleatoire ++
        if (Recuperer === AleatoireMots[i]) {

            // alors ca mets la lettre qui est bonne
            document.getElementById("lettre" + i).innerHTML = " " + AleatoireMots[i];

        } else {


            // Sinon ca afficher une barre vide
            document.getElementById("lettre" + i).innerHTML += " ";

        }

    }

    // Vider l'input après proposition

    document.getElementById("Input").value = "";

});


