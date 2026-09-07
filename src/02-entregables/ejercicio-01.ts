console.log("************** DELIVERABLE 01 *********************");

// 1. HEAD
// Implementa una función head (inmutable), tal que, dado un
// array como entrada extraiga y devuelva su primer elemento.
// Utiliza destructuring.

const colors: string[] = ["red", "blue", "green", "yellow", "orange"];

const head = ([first]: string[]) => first; // Implementation here.
console.log("HEAD: ", head(colors));

// 2. TAIL
// Implementa una función tail (inmutable),
// tal que, dado un array como entrada devuelta todos menos
// el primer elemento. Utiliza rest operator.

const tail = ([, ...rest]: string[]) => rest; // Implementation here.
console.log("TAIL: ", tail(colors));

console.log("ORIGINAL ARRAY: ", colors);

// 3. INIT
// Implementa una función init (inmutable), tal que,
// dado un array como entrada devuelva todos los elementos
// menos el último. Utiliza los métodos que ofrece Array.prototype.
