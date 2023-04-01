
function addRow() {
   var table = document.getElementById("myTable");
   createRow(table);
}

function deleteRow () {
    var table = document.getElementById("myTable");
    table.childNodes[table.childElementCount - 1].remove();
}
function deleteAll () {
    var table = document.getElementById("myTable");
    for (var i = table.childElementCount; i > 0; i--) {
        table.childNodes[i].remove();
    }
}
function addRows () {
    var table = document.getElementById("myTable");
    var nb = Number(prompt("Nombre de lignes à ajouter ?"));
    for (var i = 0; i < nb; i++) {
        createRow(table);
    }

}

function createRow (parent) {
    var ligne = document.createElement("tr");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");

    var text1 = document.createTextNode("PreNom 1 : ");
    var input1 = document.createElement("input");

    var text2 = document.createTextNode("Nom 1 : ");
    var input2 = document.createElement("input");

    col1.appendChild(text1);
    col1.appendChild(input1);

    col2.appendChild(text2);
    col2.appendChild(input2);

    ligne.appendChild(col1);
    ligne.appendChild(col2);
    parent.appendChild(ligne);
}