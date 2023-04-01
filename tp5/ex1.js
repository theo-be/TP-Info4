
// Question 1

function min_majv1(chaine) {
    var tab = chaine.split(' ');
    console.log(tab);
    for (var i = 0; i < tab.length; i++) {
        var lettre = tab[i][0].toUpperCase();
        var chaine = tab[i].substring(1);
        chaine = chaine.toLowerCase();
        tab[i] = lettre + chaine;
    }
    return tab.join(' ');
}



document.write(min_majv1("wELCome pRenOm NoM"));
document.write("<br><br><br>");

// Question 2


function freqvoyelles(chaine) {
    var freq = [];
    freq['a'] = 0;
    freq['e'] = 0;
    freq['i'] = 0;
    freq['o'] = 0;
    freq['u'] = 0;
    freq['y'] = 0;
    chaine = chaine.toLowerCase();
    for (var i = 0; i < chaine.length; i++) {
        if (chaine[i] == 'a' || chaine[i] == 'e' || chaine[i] == 'i' || chaine[i] == 'o' || chaine[i] == 'u' || chaine[i] == 'y') {
            freq[chaine[i]]++;
        }
    }    
    return freq;
}


var voyelles = freqvoyelles("AAEEee iiIIAA YY uY Naya");

for (var lettr in voyelles) {
    var value = voyelles[lettr];
    document.write(`${lettr} = ${value} <br>`);
}


