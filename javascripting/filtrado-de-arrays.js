let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Función Declativa, el hoisting carga en memoria al principio
//del Programa y puede ser ocupado en cualquier parte del código.
//Por ejemplo con la funcuon let filtered antes o despues.

// function evenNumbers (number) {
//    return number % 2 === 0
// }

//Funcion invocativa, necesita declararse antes de usarse. 
const evenNumbers = (number) => {
    return number % 2 === 0
}

let filtered = numbers.filter(evenNumbers) 

console.log(filtered);