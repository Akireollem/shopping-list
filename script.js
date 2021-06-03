const button = document.getElementById("item-button");
const ul = document.getElementById("items");

function excluirElemento(li) {
    li.remove();
}

function criarElementos() {
    const input = document.getElementById("item-input");
    const li = document.createElement("li");
    const XButton = document.createElement("button");
    const label = document.createElement("span")

    label.innerHTML = input.value;

    XButton.innerHTML = "X";
    XButton.type = "button";
    XButton.onclick = function() {
        excluirElemento(li);
    }
    
    li.appendChild(XButton); 
    li.appendChild(label)

    ul.appendChild(li);
    input.value = "";
}

button.addEventListener("click", criarElementos)
