var h3 = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");

function changeGradient() {
    body.style.backgroundImage =
        "linear-gradient(to right, " +
        color1.value +
        "," +
        color2.value +
        ")";

    h3.textContent = body.style.backgroundImage + ";";
}

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);