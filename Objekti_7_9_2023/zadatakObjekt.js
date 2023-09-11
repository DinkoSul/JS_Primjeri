// 1. Kreiraj objekt koji reprezentira neki specifični auto, sa bar 8 svojstava, od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.), a jedna je također objekt. Probajte referencirati druge vrijednosti objekta u funkcijama. Svaka funkcija mora primati argumente i vracati neku vrijednost.

// 2. Pozovite funkcije svog objekta sa argumentima i ispisite rezultat.
// 2. Sa petljom pristupi svim brojivim svojstvima tvog auto objekta i ispiši vrijednosti u konzoli zajedno sa njihovim imenima (kljucevima) (npr. ime: Ivan)
// 3. Ispiši u konzoli razumljivu rečenicu koja uključuje bar 2 svojstva tvog objekta.
// 4. Pretvori svoj objekt u JSON string.

var auto = {
  brend: {
    tip: "Volvo",
    model: "V40",
  },
  boja: "crvena",
  brzina: 60,
  maxBrzina: 160,
  godinaProizvodnje: 1998,
  kretanje: function () {
    return "Auto se kreće brzinom: " + this.brzina;
  },

  ubrzaj: function (brojSekundi) {
    while (brojSekundi && this.brzina <= this.maxBrzina) {
      this.brzina += 5;
      brojSekundi--;
    }
    return this.brzina;
  },
  zakoci: function (brojSekundi) {
    while (brojSekundi && this.brzina > 0) {
      this.brzina -= 20;
      brojSekundi--;
    }
    return this.brzina;
  },
  promijeniBoju: function (boja) {
    this.boja = boja;
    return this.boja;
  },
};

console.log(auto.kretanje());

// console.log(auto.zakoci(4));
// console.log(auto.ubrzaj(10));

// for (const key in auto) {
//   if (Object.hasOwnProperty.call(auto, key)) {
//     const element = auto[key];
//     console.log(key + ":" + element);
//   }
// }
Object.defineProperty(auto, "kretanje", { enumerable: false });

for (const key in auto) {
  if (Object.hasOwnProperty.call(auto, key)) {
    const element = auto[key];

    if (auto.propertyIsEnumerable(key)) {
      console.log(key + ": " + element);
    }
  }
}

// for (key in auto) {
//   const value = auto[key];

//   if (auto.propertyIsEnumerable(key)) {
//     console.log(key + ": " + value);
//   }
// }

console.log("Boja mog " + auto.brend.tip + " auta je " + auto.boja);
// auto.promijeniBoju("žuta");
console.log("Boja mog " + auto.brend.tip + " auta je " + auto.boja);
console.log(JSON.stringify(auto));
