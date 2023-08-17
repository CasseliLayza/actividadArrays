// ##################################################################
// Casseli Layza
// Clase; 08 - Arrays y colecciones
// Fecha: 16-08-2023
// ##################################################################

let numbers = [22, 33, 54, 66, 72];
console.log(numbers[numbers.length]);

// Devuelve undefined, pq se esta pasado 5, solo se tien hasta el indce 4 en el array numbers.

let grupoDeAmigos = [
  "Harry",
  "Ron",
  "Hermione",
  "Spiderman",
  "Hulk",
  "Ironman",
  "Penélope Glamour",
  "Pierre Nodoyuna",
  "Patán",
];
console.log(grupoDeAmigos[5]);

// Devuelve Ironman, se pao el indice 5.

let str = "un string cualquiera";
let arrayAleatorio = [
  "Digital",
  "House",
  "true",
  "string",
  "123",
  "false",
  "54",
  str,
];
console.log(arrayAleatorio[arrayAleatorio.length - 1]);

// devuelve el ultimo elemento, se paso el indice final.

//##################################################################################
// Colecciones de películas (y más...)
// El tech leader del equipo necesita conocer la estructura de datos del nuevo proyecto.
// Para esto, deberás:

// 1. Crear la estructura adecuada para guardar las siguientes películas:
// "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"

let peliculas = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];

console.log(peliculas[0]);
//console.log(peliculas[2]);
console.log(peliculas[peliculas.length - 1]);

// 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
// en mayúsculas. Para esto solicitan que crees una función que reciba por
// parámetro un array y convierta el contenido de cada elemento a mayúsculas.
// Pista: revisá qué hace el método de strings .toUpperCase().

function peliculasToMayuculas(arrayPeliculas) {
  let arrayResoult = [];
  for (let i = 0; i < arrayPeliculas.length; i++) {
    arrayResoult.push(arrayPeliculas[i].toUpperCase());
  }
  return arrayResoult;
}

console.log(peliculasToMayuculas(peliculas));

// 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
// crear otra estructura similar a la primera, pero con las siguientes películas
// animadas:
// "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
// para poder agregar los elementos contenidos en el segundo array dentro del
// primero, y así retornar un solo array con todas las películas como sus elementos.
// Importante: las películas animadas también deberían convertirse a mayúsculas.

let peliculasAnimadas = [
  "toy story",
  "finding Nemo",
  "kung-fu panda",
  "wally",
  "fortnite",
];

function unirArrays(array1, array2) {
  let arrayResoult1 = [];
  for (let i = 0; i < array1.length; i++) {
    arrayResoult1.push(array1[i].toUpperCase());
  }

  let arrayResoult2 = [];
  for (let i = 0; i < array2.length; i++) {
    arrayResoult2.push(array2[i].toUpperCase());
  }

  for (let i = 0; i < arrayResoult2.length; i++) {
    arrayResoult1.push(arrayResoult2[i].toUpperCase());
  }

  return arrayResoult1;
}

console.log(unirArrays(peliculas, peliculasAnimadas));

// 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
// array de películas animadas es un videojuego. Ahora tenés que editar el código y
// modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
// contenido al array que contenga todas las películas.
// PD: por precaución, guardá el elemento que vas a eliminar en una variable.

let lastElementDeletePeliculasAnimadas = peliculasAnimadas.pop();
console.log(
  `El elemento borrado/captuado del arreglo peliculas animadas es : ` +
    lastElementDeletePeliculasAnimadas +
    `, El nuevo arreglo seria: `
);
console.log(peliculasAnimadas);
console.log("llamando a la funcion unirArrays: ");
console.log(unirArrays(peliculas, peliculasAnimadas));

/*5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
del mundo sobre las películas con el siguiente formato:*/

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

/*Te piden crear una función que compare las calificaciones e indique si son iguales
o diferentes. Te confirman que están en el orden adecuado y que solo traen
valores numéricos del 1 al 10.
PD: los elementos de los scores tanto de Asia como de Europa corresponden en
orden al del array resultante de combinar películas con películas animadas. Es
decir, el primer elemento del array de películas general corresponde al primer
elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.
Para verificar que hasta acá viene todo bien, te recomendamos probar cada una de las
funciones y testear su correcto funcionamiento.
Si llegaste hasta este punto y está todo bien, el tech leader del equipo debe estar
extremadamente alegre con tu trabajo y desempeño. ¡Buen trabajo!*/

function comaraScoresAsiaEuropa(array1, array2) {
  let respuesta = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      respuesta.push(
        `El score de Asia/europa de ${
          unirArrays(peliculas, peliculasAnimadas)[i]
        } es igual, score: ${array1[i]}`
      );
    } else {
      respuesta.push(
        `El score de Asia/europa de ${
          unirArrays(peliculas, peliculasAnimadas)[i]
        } es diferente, score: ${array1[i]} y ${array2[i]} respectivamente`
      );
    }
  }
  return respuesta;
}

console.log(comaraScoresAsiaEuropa(asiaScores, euroScores));

// Extra bonus
// Si te quedaste con ganas de trabajar un poco más, te dejamos unos ejercicios extras
// para que puedas practicar más sobre arrays. A partir de acá, los ejercicios pueden
// empezar a escalar en dificultad tanto estructural como lógica.

// Array inverso
// En este ejercicio deberás crear una función que devuelva un array con sus elementos
// invertidos, sin modificarlo. Luego, deberás hacer una función que lo modifique e invierta
// el orden de sus elementos.

// 1. Creá la función imprimirInverso que tome un array como argumento y que
// imprima en la consola cada elemento en orden inverso (no tenés que invertir el
// array).

function imprimirInverso(array) {
  for (let i = 1; i <= array.length; i++) {
    console.log(array[array.length - i]);
  }
}
console.log(peliculasAnimadas);
imprimirInverso(peliculasAnimadas);

// 2. Creá la función inversor que tome un array como argumento y devuelva uno
// nuevo invertido.

function inversor(array) {
  let invertedArray = [];
  for (let i = 1; i <= array.length; i++) {
    invertedArray.push(array[array.length - i]);
  }
  return invertedArray;
}
console.log(peliculasAnimadas);
console.log(inversor(peliculasAnimadas));
