// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  
// Puedes usar este array para probar tu función:


const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
// function repeatCounter(param) {
//   let acumulator = 0;
//   for (let i = 0; i < counterWords.length; i++) {
//     if (counterWords[i] === param){
//       acumulator += 1;
//     }
//   }
//   console.log(param, 'se repite', acumulator, 'veces');
// }

// repeatCounter('code');

function repeatCounter(param) {
  let counter = {};
  for (let i = 0; i < param.length; i++) {
    if (param[i] in counter) { //Saca un boleano true si la palabra (param[i]) esta dentro del array.
      counter[param[i]]++; //Suma al objeto counter +1 por la palabra param[i] y le añade la palabra al array de objetos counter
    } else {
      counter[param[i]] = 1;
    }
  }
  return console.log(counter);
}

repeatCounter(counterWords);