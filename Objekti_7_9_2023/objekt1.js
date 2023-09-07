var cat = {};
var dog = {
  breed: "Golden retriever",
  bark: function () {
    return "Wuf Wuf";
  },
  "has Toy": false,
};
console.log(cat);
// console.log(dog.breed);
console.log(dog.bark);
console.log(dog.bark());

dog.breed = "Pekinezer";
console.log(dog.breed);

//DZ za pročitati: https://medium.com/@shrijan00003/javascript-object-properties-writable-enumerable-configurable-eced27378256

var igracka = dog["has Toy"];
console.log(igracka);

cat.color = "grey";
cat.size = 30;
console.log(cat);

// delete dog.bark;

var ispisObjekta = JSON.stringify(dog); //pretvaranje u JSON objekt
console.log(dog);
console.log(ispisObjekta);

console.log(dog.propertyIsEnumerable(["has toy"]));

//više o svojstvima: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
//proučiti ostala navedena svojstva; min toString, valueOf

var dog1 = {
  breed: "Golden retriever",
  bark: {
    //objekt unutar objekta
    pero: "Wuf Wuf",
    mato: 33,
  },
  "has Toy": false,
};

console.log(dog1.bark.mato); //ispis vrijednost objekta unutar objekta
