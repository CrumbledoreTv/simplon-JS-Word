var tab = document.getElementById('tableau');
var row = tab.insertRow();

function tableau(mot) {
    var cell = row.insertCell();
    cell.innerHTML = mot;
}

function word() {
    row = tab.insertRow();

    // mot
    var mot = prompt("Entrer un mot");

    // Mot en gras
    var motG;
    motG = "<strong>" + mot + "</strong>";
    tableau(motG);

    // mot en minuscule
    var min;
    min = mot.toLowerCase();
    tableau(min);

    // mot en majuscule
    var maj;
    maj = mot.toUpperCase();
    tableau(maj);

    // Nb voyelles + consonnes
    // var v = mot.match(/[eaiouy]/gi).length;
    // var c = mot.match(/[^eaiouy]/gi).length;
    var v = 0,
        c = 0;
    for (var i = 0; i < mot.length; i++) {
        if (min[i] == "a" || min[i] == "e" || min[i] == "i" || min[i] == "o" || min[i] == "u" || min[i] == "y") {
            v++;
        } else {
            c++;
        }
    }
    tableau(v + " Voyelle(s)");
    tableau(c + " Consonne(s)");

    // Lettres inversées
    var inv;
    var motInv = '';

    for (var k = mot.length - 1; k >= 0; k--) {
        motInv += mot[k];
    }
    motInv = motInv.toLowerCase();
    tableau(motInv);

    //Palindrome
    var pal;
    if (motInv == mot.toLowerCase()) {
        tableau("OUI");
    } else {
        tableau("NON");
    }
}
