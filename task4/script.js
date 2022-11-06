document.querySelector('a').addEventListener("click", (event) => {
    event.preventDefault();

const textField = document.querySelector('#change')
textField.onclick = function(event) {
var promptText = prompt();
textField.textContent = promptText;}
})    