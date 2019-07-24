var rnd = document.querySelector("li").getAttribute("random");
console.log(rnd);

document.querySelector("li").setAttribute("random", 666);
document.querySelector("h1").setAttribute("class", "cool-title");
document.querySelector("h1").style.color = "cyan";

document.querySelector("li").classList.add("done");
document.querySelector("li").classList.remove("done");
document.querySelector("li").classList.toggle("done");

document.querySelectorAll("li")[1].innerHTML = "<strong>JELOOOOO!!!</strong>"

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(String(input.value).trim()));
    ul.appendChild(li);
    input.value = "";
}

function addListElementAfterClick() {
    if (String(input.value).trim().length > 0) {
        createListElement();
    }
}

function addListElemenAfterKeypress(event) {
    if (String(input.value).trim().length > 0 && event.code === "Enter") {
        createListElement();
    }
}

button.addEventListener("click", addListElementAfterClick);
input.addEventListener("keypress", addListElemenAfterKeypress);