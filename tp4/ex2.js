
// Question 1

function elmtDansListe(recurrence, x) {
    for (var i = 0; i < recurrence.length; i++) {
        if (recurrence[i].e == x) return i;
    }
    return null;
}

var tab = [3, 'B', 'B', 'B', 2, 3, 4, 3, 'a', 2, 4, 9, 3, 3, 3];
var recurrence = [];
var indice = 0;
for (var i = 0; i < tab.length; i++) {
    indice = elmtDansListe(recurrence, tab[i]);
    if (indice === null) {
        recurrence.push({e: tab[i], nb: 1});
    } else {
        recurrence[indice].nb++;
    }
}
var max = recurrence[0];
for (var i = 1; i < recurrence.length; i++) {
    if (recurrence[i].nb > max.nb) max = recurrence[i];
}

alert(`Caractere le plus present : ${max.e}, ${max.nb} fois`);


// Question 2

function dernier(tab, n) {
    var elmts = [];
    if (n === undefined) n = tab.length;
    var depart = (tab.length - n >= 0) ? tab.length - n : 0;
    for (var i = depart; i < tab.length; i++) {
        elmts.push(tab[i]);
    }
    alert(`${n} derniers elements : ${elmts}`);
}

dernier([9, 3, 0, -5], 6);

