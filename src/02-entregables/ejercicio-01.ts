console.log("************** DELIVERABLE 01 *********************");

// 1. HEAD
// Implementa una función head (inmutable), tal que, dado un
// array como entrada extraiga y devuelva su primer elemento.
// Utiliza destructuring.

const colors: string[] = ["red", "blue", "green", "yellow", "orange"];

const head = ([first]: string[]) => first;
console.log("HEAD: ", head(colors));

// 2. TAIL
// Implementa una función tail (inmutable),
// tal que, dado un array como entrada devuelta todos menos
// el primer elemento. Utiliza rest operator.

const tail = ([, ...rest]: string[]) => rest;
console.log("TAIL: ", tail(colors));

// 3. INIT
// Implementa una función init (inmutable), tal que,
// dado un array como entrada devuelva todos los elementos
// menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (list: string[]) => list.slice(0, -1);
console.log("INIT:", init(colors));

// 4. LAST
// Implementa una función last (inmutable), tal que,
// dado un array como entrada devuelva el último elemento.

const last = (element: string[]) => element.at(-1);
console.log("LAST: ", last(colors));

const lastOtherOption = (element: string[]) => element[element.length - 1];
console.log("LAST (other option): ", lastOtherOption(colors));

console.log("ORIGINAL ARRAY: ", colors); // Check that original array is not modified
