console.log("************** DELIVERABLE 03 *********************");

// 1. CLONE
// Implementa una función clone que, a partir de un objeto de entrada
// source devuelva un nuevo objeto con las propiedades de source:

const source = {
  name: "Ainoa",
  surname: "Molina",
  level: "initiation",
};

function clone(source: object): object {
  const newSource = { ...source };
  return newSource;
}

console.log("CLONE: ", clone(source));

console.log("ORIGINAL OBJECT: ", source); // Check that original object is not modified
// 2. MERGE
// Implementa una función merge que, dados dos objetos de
// entrada source y target, devuelva un nuevo objeto con
// todas las propiedades de target y de source, y en caso de
// propiedades con el mismo nombre, source sobreescribe a target.

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source: object, target: object): object {
  const newObject = { ...target, ...source };
  return newObject;
}

console.log("MERGE: ", merge(a, b));
console.log("ORIGINAL OBJECTS: ", a, b); // Check that original objects are not modified
