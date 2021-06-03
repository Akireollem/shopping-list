let button = document.getElementById("item-button");
let ul = document.getElementById("items");

function criarElementos() {
    let input = document.getElementById("item-input");

    let li = document.createElement("li");
    let XButton = document.createElement("button")
    XButton.innerHTML = "X";
    li.appendChild(XButton);
    li.innerHTML += input.value;
    document.createTextNode(input.value) 
    ul.appendChild(li);
    input.value = ""


}

button.addEventListener("click", criarElementos)