// Tienes un array que representa los niveles desbloqueados por un jugador en un videojuego:

// El jugador ahora encuentra un "portal" que le hace repetir los niveles 1, 2 y 3 pero empezando desde el índice 3 (es decir, los vuelve a jugar).

// let niveles = ["nivel1", "nivel2", "nivel3", "nivel4", "nivel5", "nivel6"];
//
// console.log(niveles.copyWithin(3, 0));

// flat() method
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const simpleArr = myArr.flat();
//
// const newArr = myArr.flatMap((x, y) => [x, x * 20]);
//
// console.log(newArr);
//
const universities = [
  { nombre: "ITLA", carreras: ["Software", "Multimedia"] },
  { nombre: "UASD", carreras: ["Medicina", "Derecho"] },
];

/* console.log(universities.flatMap((x) => [`${x.carreras} - ${x.nombre}`])); */

// splice() Method
const fruits = ["Banana", "Orange", "Apple", "Mango", "Fresa"];
//
// console.log(fruits.splice(2, 2));
// console.log(fruits);

//slice() method
// console.log(fruits.slice(0, 3));
// console.log(fruits);
//
//reduce() method
// const d = simpleArr.reduce((a, b) => a * b, 1);
//
// console.log(d);
//

//map() method
// fruits.map((fruit, index) => {
//   console.log(index, fruit);
// });
//
// filter() method
//  console.log(simpleArr.filter((x, y) => y > 3));

// sort() method
// const number = [3, 7, 4, 1, 9, 2];
//
// console.log(number.sort());

// find() method
// console.log(fruits.find((value) => value === "Apple"));

// forEach() method
// fruits.forEach((fruit, index) => console.log(`${index + 1} - ${fruit}`)); 