var count = 2;

//ukoliko uvjet nije zadovoljen "while" se ne izvršava ni jednom
// while (count <= 10) {
//   console.log(count);
//   count++;
// }

//modulo 9 % 4- ostatak pri dijeljenju
// 9 : 4 = 2
// 2 * 4 = 8
// ostatak 1

// do while se izvrši makar jednom
// do {
//   console.log(count);
//   count++;
// } while (count < 10);

//1. Napišite while petlju koja će ispisivati brojeve od 3 do 20, osim onih djeljivih sa 9.
//varijanta 1
// while (count <= 20) {
//   if (count % 9 > 0) {
//     console.log(count);
//   }
//   count++;
// }
//varijanta 2
while (count < 20) {
  count++;
  if (count % 9 == 0) {
    continue; //preskače daljnje izvođenje koda i pokreće slijedeću iteraciju
    // break; //prekida izvođenje petlje WHILE
  }
  console.log(count);
}
