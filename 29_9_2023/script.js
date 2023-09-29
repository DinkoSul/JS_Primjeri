// Koraci:
// 1. Pohraniti u varijablu vrijednost polja "input"
var input = document.querySelector("input");
// 2. Pohraniti u varijablu lokaciju, klasu, koja se nalazi na gumbu button
var addButton = document.querySelector(".addButton");
// 3. pohraniti u varijablu lokaciju UL elementa kako bi mu pridodali naknadno LI elemente koje kreiramo klikom na gumb.
var list = document.querySelector("ul");
console.log("input:" + input);
console.log("addButton:" + addButton);
console.log("list:" + list);
//kreirati funkciju koja kreira novi LI element klikom na gumb addButton
//spremiti vrijednost inputa u varijablu -> .value
//dodati novom li elementu vrijednost inputa
//vrijednost input polja postavimo da je prazno
// function addItem() {
//   var item = document.createElement("li");
//   var text = input.value;
//   item.innerText = text;
//   list.appendChild(item);
//   input.value = "";
// }
function createItem(text) {
  var item = document.createElement("li");
  item.innerText = text;
  list.appendChild(item);
}

function addItem() {
  var textInput = input.value;
  createItem(textInput);
  input.value = "";
}
//dodati eventListener na gumb
addButton.addEventListener("click", addItem);
