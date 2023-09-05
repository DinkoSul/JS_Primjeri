// function ispis() {
//   console.log("Ispis funkcije!");
//   return "radi!"; //ako nema return vraća se vrijednost undefined
// }
// ispis();
// console.log(ispis());

// function imeFunkcije() {
//   var value = 1;
//   return value;
// }
// console.log(imeFunkcije());

function imeFunkcije() {
  var value = 1;
  return value;
  value += 1; //funkcija završava kod naredbe return, ova linija
  //   se ne izvodi
}
console.log(imeFunkcije());
var funkcija = imeFunkcije(); // spremanje funkcije u varijablu
console.log(funkcija);
