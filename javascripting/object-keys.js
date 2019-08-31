//Javascript posee una forma nativa de conocer
//todas las llaves accesibles de un objeto. 
//Esto puede ser muy útil 

const car = {
    make: 'Honda',
    model: 'Accord',
    year: 2020
};

const keys = Object.keys(car);

console.log(keys);
