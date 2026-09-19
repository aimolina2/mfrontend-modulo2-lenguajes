console.log("************** DELIVERABLE 02 *********************");

// 1. CONCAT
// Implementa una función concat (inmutable) tal que,
// dados 2 arrays como entrada, devuelva la concatenación de ambos.
// Utiliza rest / spread operators.

const colors: string[] = ["red", "blue", "green"];
const numbers: string[] = ["uno", "dos", "tres"];
const animals: string[] = ["perro", "gato", "conejo"]; // for next exercise
const fruits: string[] = ["apple", "banana", "peach"]; // for next exercise

const concat = (a: string[], b: string[]) => [...a, ...b];

console.log("CONCAT: ", concat(colors, numbers));

// Implementa una nueva versión de concat donde se acepten
// múltiples arrays de entrada (más de 2).
// No utilices el método Array.prototype.concat.

const concatMultiple = (...group: string[][]) =>
  group.reduce((acc, elements) => [...acc, ...elements], []);

console.log(
  "CONCAT MULTIPLE (3 elements): ",
  concatMultiple(colors, numbers, animals),
);
console.log(
  "CONCAT MULTIPLE (4 elements): ",
  concatMultiple(colors, numbers, animals, fruits),
);

console.log("ORIGINAL ARRAYS: ", colors, numbers, animals, fruits); // Check that original arrays are not modified
