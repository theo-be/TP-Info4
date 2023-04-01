var date = Date.now();

document.getElementById("rouge").addEventListener("click", () => {
    document.body.style.backgroundColor = "#f00";
    date = Date.now();
});
document.getElementById("vert").addEventListener("click", () => {
    document.body.style.backgroundColor = "#0f0";
    date = Date.now();
});
document.getElementById("bleu").addEventListener("click", () => {
    document.body.style.backgroundColor = "#00f";
    date = Date.now();
});
document.getElementById("jauneclair").addEventListener("click", () => {
    document.body.style.backgroundColor = "lightyellow";
    date = Date.now();
});

document.getElementById("bouton").addEventListener("click", () => {
    var temps = (Date.now() - date) / 1000;
    document.getElementById("temps").innerText = `${temps}s s\'est écoulé`;
});