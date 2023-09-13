var description = document.querySelector(".description");
var content = description.innerHTML;
console.log(content);

description.innerHTML = "Ima <span>4 rijeke</span>";
// description.textContent = "Ima <span>4 rijeke</span>";
// description.innerText = "Ima <span>4 rijeke</span>";

var image = document.querySelector("img");
image.src = "orange.png";

console.log(image.getAttribute("width"));
// dohvaćanje vrijednosti atributa 30
image.setAttribute("height", 40);
// postavljanje vrijednosti atributa height na 40
image.removeAttribute("height");
// uklanjanje atributa Height

var ul = document.querySelector("ul");

ul.dataset.index = 2;
