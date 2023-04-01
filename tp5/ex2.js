document.getElementById("hide").addEventListener("click", () => {
    var input = document.getElementsByTagName("input");
    for (var i = 0; i < input.length; i++) {
        input[i].style.visibility = "hidden";
    }
});
document.getElementById("show").addEventListener("click", () => {
    var input = document.getElementsByTagName("input");
    for (var i = 0; i < input.length; i++) {
        input[i].style.visibility = "visible";
    }
});
