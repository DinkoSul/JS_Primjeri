var naslov = document.getElementById("crveni");
naslov.style.color = "red";

//https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp

const element = document.getElementById("test");
const cssObj = window.getComputedStyle(element, null);
console.log(cssObj);
