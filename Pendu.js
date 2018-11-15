
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

var Second = [];

// Generer et Recuperer un mot aleatoirement

let AleatoireMots = motsadeviner[Math.floor(Math.random() * motsadeviner.length)];

console.log(AleatoireMots);
// Pour le 'Cest gagnée'

let Rep = 0;


// Nombre de vie au départ

let vie = 10;

// Bouton Reset

function Verif () {
    for (var y = 0; y < Second.length; y++) {

        if (Recuperer == Second[y])

            return true;
    }
}


function Inpuut () {

    // Vider l'input après proposition

    document.getElementById("Input").value = "";

}

function Focuus () {

    document.getElementById("Input").focus();

}

let Recuperer = document.getElementById("Input").value;

// Evenement click sur le bouton Valider

document.getElementById("Valider").addEventListener("click", function () {

    // On recupere la valeur de l'input

    Recuperer = document.getElementById("Input").value;

    if (!Verif ()) {

        // Boucle pour les résultats et indications

        for (let i = 0; i < AleatoireMots.length; i++) {

            if (Recuperer === AleatoireMots[i]) {

                // alors ca mets la lettre qui est

                document.getElementById("lettre" + i).innerHTML = " " + AleatoireMots[i];

                Second.push(Recuperer);

                // Incrémentation pour qui comptabilise que les bonnes réponses

                Rep++;

            } else {


                // Sinon ca afficher une barre vide

                document.getElementById("lettre" + i).innerHTML += " ";

            }


            if (Rep === AleatoireMots.length) {

                document.getElementById("Resultat").innerHTML = "Bravo tu as gagné, il te restait " + vie + " vies, tu peux générer un nouveau mot en cliquant sur le bouton 'Reset'";
                document.getElementById("Input").style.display = "none";
                document.getElementById("Valider").style.display = "none";
                document.getElementById("Gagner").style.height = "100px";
            }

        }

        if (AleatoireMots.indexOf(Recuperer) === -1) {

            document.getElementById("Indication").innerHTML = "La lettre proposé n'est pas dans le mot";


            // Incrémentation quand on click sur le bouton une vie s'enlève

            vie--;
            console.log(vie);


        } else {

            document.getElementById("Indication").innerHTML = "";

        }


        // Affiche le nombre de tentatives qui reste à l'utilisateur

        document.getElementById("Chance").innerHTML = "Il vous reste " + vie + " vies";


        // Affiche la lettre saisie dans l'input

        document.getElementById('Valeur').innerHTML += Recuperer + "<br>";

        if (vie === 0) {

            document.getElementById("Resultat").innerHTML = "Vous avez perdu le mot était " + AleatoireMots + " Pour avoir un nouveau mot clique sur le bouton 'Reset'";
            document.getElementById("Input").style.display = "none";
            document.getElementById("Valider").style.display = "none";
            document.getElementById("Pendu").style.height = "200px"

        }

        Inpuut();

        Focuus();

    }

    });

// Boucle pour avoir le nombre de tirer en fonction du nombre de lettre dans le mot

for (let i = 0; i < AleatoireMots.length; i++) {

    document.getElementById('lettre' + i).innerHTML = "_";

}


function REset () {

    AleatoireMots = motsadeviner[Math.floor(Math.random() * motsadeviner.length)];

    console.log(AleatoireMots);

    Rep = 0;

    vie = 10;

    document.getElementById("Chance").innerHTML = "Il vous reste " + vie + " vies";

    Recuperer = document.getElementById("Input").value;

    document.getElementById('Valeur').innerHTML += Recuperer + "<br>";

    for (let i = 0; i < AleatoireMots.length; i++) {

        document.getElementById("lettre" + i ).innerHTML += "";

        document.getElementById('lettre' + i).innerHTML = "_";

    }

    document.getElementById("Indication").innerHTML = "";
    document.getElementById("Input").style.display = "block";
    document.getElementById("Valider").style.display = "block";
    document.getElementById("Gagner").style.height = "0px";
    document.getElementById("Pendu").style.height = "0px";

}



document.getElementById('Reset').addEventListener("dblclick", function () {

    REset ();

});

/*

document.getElementById ("Facile").addEventListener("click", function () {

    REset ();

    vie;

    document.getElementById("Chance").innerHTML = "Il vous reste " + vie + " vies";

}); */


/*
document.getElementById("Normal").addEventListener("click", function () {

    REset ();

    vie = 6;

    for (let i = 0; i < AleatoireMots.length; i++) {

        document.getElementById("Chance").innerHTML = "Il vous reste " + vie + " vies";

        if (Recuperer === AleatoireMots[i]) {

            // alors ca mets la lettre qui est

            document.getElementById("lettre" + i).innerHTML = " " + AleatoireMots[i];

            // Incrémentation pour qui comptabilise que les bonnes réponses

            Rep++;

        } else {


            // Sinon ca afficher une barre vide

            document.getElementById("lettre" + i).innerHTML += " ";

        }

    }

}); */



/*
document.getElementById("Difficile").addEventListener("click", function () {

    REset ();

    vie = 3;

    document.getElementById("Chance").innerHTML = "Il vous reste " + vie + " vies";

    for (let i = 0; i < AleatoireMots.length; i++) {

        document.getElementById("Chance").innerHTML = "Il vous reste " + vie + " vies";

        if (Recuperer === AleatoireMots[i]) {

            // alors ca mets la lettre qui est

            document.getElementById("lettre" + i).innerHTML = " " + AleatoireMots[i];

            // Incrémentation pour qui comptabilise que les bonnes réponses

            Rep++;

        } else {


            // Sinon ca afficher une barre vide

            document.getElementById("lettre" + i).innerHTML += " ";

        }

    }

}); */


