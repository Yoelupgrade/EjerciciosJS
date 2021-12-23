// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve 
// la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. 
// Haz varios ejemplos y compruebalos.

// Sugerencia de función:
const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
    for (let index = 0; index < array.length; index++) {
        const elemento = array[index];
        if (elemento === text) {
            return (elemento + ' esta en la posicion: ' + index);
        }
        
    }
}

console.log(findArrayIndex(animals, 'Mosquito'));
console.log(findArrayIndex(animals, 'Ajolote'));

