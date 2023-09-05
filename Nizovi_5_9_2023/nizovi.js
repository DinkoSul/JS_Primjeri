var name1;
var names = ["John", "Jane", "Mike"];
console.log(names[1]);
console.log(typeof name1);
console.log(typeof names);
//dodavanje elementa u niz
names[3] = "Holly;";
console.log("Names niz " + names.length);
var novo = names[2];
console.log("Novo: " + novo);

var empty = [];
console.log(empty[0]);
console.log(typeof empty);
console.log(empty.length); //veličina niza

var empty1 = [5, , 4];
console.log(empty1[1]);
console.log(empty1.length); //veličina niza
//dodavanje elemenata u niz
empty1.push("chickens", "cats", "dogs");
console.log(empty1);
console.log(empty1.pop());
const sorted = empty1.sort();
console.log(sorted);
const reversed = empty1.reverse();
console.log(reversed);

var animals = ["chickens", "cats", "dogs"];
console.log(animals);
// console.log(animals.pop());
const sorted1 = animals.sort();
console.log(sorted1);
const reversed1 = animals.reverse();
console.log(reversed1);
//ispis vrijednost niza petljom ForEach
reversed1.forEach((element) => {
  console.log("ForEach " + element);
});

sorted1.forEach((element) => {
  console.log(element);
});

//for petlja za ispis niza
var ispis = ["prvi", "drugi", "treci", "peti"];
//korištenjem petlje FOR ispiši vrijednost niza ispis
