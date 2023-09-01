var x = 11;
var y = "Martinaa";

if (x > 4) {
  console.log("Broj je veći od 4 i iznosi: " + x);
} else {
  console.log("Broj je " + x + " je manji od 4");
}

if (y === "Marko") {
  console.log("Bok " + y);
} else if (y === "Dinko") {
  console.log("Baj " + y);
} else if (y === "Martina") {
  console.log("Ćao " + y);
} else {
  console.log("Bok novi " + y);
}

//Ispisati različitu poruku ovisno koji broj upišemo, jednoznamenkasti, dvoznamenkasti, troznamenkasti.
// Broj X je jednoznamenkast; Broj X je dvoznamenkast; Broj X je troznamenkast, Broj X je veći od 999
if (x > 0) {
  console.log("Bok " + y);
} else if (y === "Dinko") {
  console.log("Baj " + y);
} else if (y === "Martina") {
  console.log("Ćao " + y);
} else {
  console.log("Bok novi " + y);
}

var z = 2;

switch (z) {
  case 1:
    console.log("Broj 1!");
  // break;
  case 4:
    console.log("Broj 4!");
    break;

  case 2:
    console.log("Broj 2!");
  // break;
  case 3:
    console.log("Broj 3 i manji!");
    break;

  // primjer ispisa iste poruke za različite case grupe:
  //   case 1:
  //   case 4:
  //     console.log("Broj 1 ili 4!");
  //     break;

  //   case 2:
  //   case 3:
  //     console.log("Broj 3 i manji!");
  //     break;

  default:
    console.log("Čudan broj!");
    break;
}
