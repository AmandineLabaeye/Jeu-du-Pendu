
// Tableau avec les mots à deviner

let motsadeviner = [
  "ordinateur",
    "telephone",
    "tour",
    "souris",
    "ascenceurs",
    "assassins",
    "fusil",
    "coca",
    "ice",
    "pain",
    "croissant",
    "stylo",
    "bouteille",
    "couple",
    "clavier",
    "doudou"
];


// Generer et Recuperer un mot aleatoirement

let AleatoireMots = motsadeviner[Math.floor(Math.random() * motsadeviner.length)];

console.log(AleatoireMots);
// Pour le 'Cest gagnée'

let Rep = 0;


// Nombre de vie au départ

let vie = 0;


function Inpuut () {

    // Vider l'input après proposition

    document.getElementById("Input").value = "";

}

function Focuus () {

    document.getElementById("Input").focus();

}

// Evenement click sur le bouton Valider

document.getElementById("Valider").addEventListener("click", function () {


    // On recupere la valeur de l'input

    let Recuperer = document.getElementById("Input").value;


    // Affiche la lettre saisie dans l'input

    document.getElementById('Valeur').innerHTML = Recuperer;

    // Boucle pour les résultats et indications

    for (let i = 0; i < AleatoireMots.length; i++) {

        if (Recuperer === AleatoireMots[i]) {

            // alors ca mets la lettre qui est

            document.getElementById("lettre" + i).innerHTML = " " + AleatoireMots[i];

            // Incrémentation pour qui comptabilise que les bonnes réponses

            Rep++;

        } else {


            // Sinon ca afficher une barre vide

            document.getElementById("lettre" + i).innerHTML += " ";

        }


        if (Rep === AleatoireMots.length) {

            document.getElementById("Resultat").innerHTML = "Bravo tu as gagné tu as utilisé " + vie  + " vies sur 10, tu peux générer un nouveau mot en cliquant sur le bouton 'Reset'";
            document.getElementById("Input").style.display = "none";
            document.getElementById("Valider").style.display = "none";
        }

    }

    if (AleatoireMots.indexOf(Recuperer) === -1) {

        document.getElementById("Indication").innerHTML = "La lettre proposé n'est pas dans le mot";


        // Incrémentation quand on click sur le bouton une vie s'enlève

        vie++;
        console.log(vie);


    }


    // Affiche le nombre de tentatives qui reste à l'utilisateur

    document.getElementById("Chance").innerHTML = "Vous avez utilisé " + vie + " vies sur 10";

    if (vie >= 10) {

        document.getElementById("Resultat").innerHTML = "Vous avez perdu le mot était " + AleatoireMots + " Pour avoir un nouveau mot clique sur le bouton 'Reset'";
        document.getElementById("Input").style.display = "none";
        document.getElementById("Valider").style.display = "none";

    }

    Inpuut ();

    Focuus ();

});


// Boucle pour avoir le nombre de tirer en fonction du nombre de lettre dans le mot

for (let i = 0; i < AleatoireMots.length; i++) {

    document.getElementById('lettre' + i).innerHTML = "_";

}


// Bouton Reset

document.getElementById('Reset').addEventListener("dblclick", function () {

    location.reload();

});



/*
document.getElementById("Facile").addEventListener("click", function () {

    AleatoireMots = motsadeviner[Math.floor(Math.random() * motsadeviner.length)];

    console.log(AleatoireMots);



});

document.getElementById("Normal").addEventListener("click", function () {

    AleatoireMots = motsadeviner[Math.floor(Math.random() * motsadeviner.length)];

    console.log(AleatoireMots);

});

document.getElementById("Difficile").addEventListener("click", function () {

    AleatoireMots = motsadeviner[Math.floor(Math.random() * motsadeviner.length)];

    console.log(AleatoireMots);


});

*/
