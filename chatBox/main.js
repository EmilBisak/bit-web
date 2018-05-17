var container = document.querySelector(".container");
var input = document.querySelector("#text");
var button = document.querySelector(".btn");

button.onclick = sendMessage;
input.focus();

function sendMessage() {
    input.focus();
    var inputValue = input.value;

    var span = document.createElement("span");
    span.textContent = inputValue;
    
    container.appendChild(span);
    input.value = "";
}