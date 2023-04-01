
// Question 1
var x = Number(prompt("Choisissez le premier nombre"));
var y = Number(prompt("Choisissez le deuxieme nombre"));

if (!x || !y) alert("Le produit est nul");
else if ((x > 0 && y > 0) || (x < 0 && y < 0)) alert("Le produit est positif") ;
else alert("Le produit est negatif");


// Question 2

function multiplication(x, y) {
    var res = 0;
    for (var i = 0; i < y; i++) {
        res += x;
    }
    return res;
}

function division(x, y) {
    if (!y) {
        alert("Division par 0");
        return null;
    }
    var res = 0;
    while (x > 0) {
        x -= y;
        res++;
    }
    return res;
}

function elevation(x, y) {
    var res = 1;
    for (var i = 0; i < y; i++) {
        res *= x;
    }
    return res;
}

// Question 3
function somme(tab) {
    res = 0;
    for(var i = 0; i < tab.length; i++) {
        res += tab[i];
    }
    return res;
}

var tab = [23, 77, 99, 1];
alert(`La somme est ${somme(tab)}`);


// Question 4
function moyenne() {
    var nbNotes = Number(prompt("Saisissez le nombre des notes"));
    var win;
    var moy = 0;
    for (var i = 0; i < nbNotes; i++) {
        win = window.open();
        moy += Number(win.prompt(`Saisissez la ${i + 1} eme note`))
        win.close()
    }
    moy /= nbNotes;
    win = window.open();
    win.alert(`Moyenne : ${moy}`);
    win.close();
}

moyenne();

