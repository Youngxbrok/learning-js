// 🧠 EJERCICIO: Analizador de estudiantes
// Aplica métodos de arrays como map, filter, sort, reduce, find, forEach

// Lista de estudiantes de ejemplo:
const estudiantes = [
  { nombre: "Ana", edad: 21, promedio: 8.5 },
  { nombre: "Luis", edad: 19, promedio: 7.0 },
  { nombre: "Carlos", edad: 22, promedio: 9.2 },
  { nombre: "Lucía", edad: 20, promedio: 6.8 },
];

// 1️⃣ MAP
// Reto: Crea un nuevo array con los nombres de los estudiantes en mayúsculas.
console.log("\n Creación de un array con los nombres de los estudiantes en mayúsculas \n ");
const nombresEnMayusculas = [];

const mayúsculas = estudiantes.map((student) => {
  nombresEnMayusculas.push(student.nombre.toUpperCase());
});

console.log(nombresEnMayusculas);

// 2️⃣ FILTER
// Reto: Filtra los estudiantes que tienen promedio mayor o igual a 7 (aprobados).
console.log("\n Clasificación de los estudiantes que han aprobado \n ");
 const aprobados = estudiantes.filter((student) => {
   return student.promedio >= 7
 });

 console.log(aprobados);

// 3️⃣ SORT
// Reto: Ordena el array original de estudiantes de mayor a menor según el promedio.
console.log("\n Organización de los estudiantes según su promedio \n ");
const ordenadosPorPromedio = estudiantes.sort((menor, mayor) => {

  return mayor.promedio - menor.promedio

});

console.log(ordenadosPorPromedio);

// 4️⃣ REDUCE
// Reto: Calcula el promedio global de toda la clase (promedio de promedios).
console.log("\n Generación el promedio global de toda la clase \n ");
 const promedioClase = estudiantes.reduce((total, suma) => {

 return total + suma.promedio

 }, 0);

 console.log(promedioClase / estudiantes.length);

// 5️⃣ FIND
// Reto: Encuentra al estudiante con el nombre "Carlos".
console.log("\n Busqueda del estudiante Carlos \n ");
 const carlos = estudiantes.find((student) => {

return student.nombre ===  'Carlos';

 });

 console.log(carlos);

// 6️⃣ FOREACH
// Reto: Imprime en consola un resumen de cada estudiante con el formato:
// "Ana tiene 21 años y un promedio de 8.5"

console.log("\n Array con formato de texto \n");
 estudiantes.forEach((student) => console.log(`${student.nombre} tiene ${student.edad} años y un promedio de ${student.promedio} `));
