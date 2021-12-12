//Completa la función que tomando un array de strings como argumento devuelva el más largo,
//en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(param) {//Param es el array Vengadores
    let biggestname = param[0]; // biggestname de origen es "Hulk"
  for (let i = 1; i < avengers.length; i++) {
    if (param[i].length > biggestname.length) {//ahora param[i] es "Thor porque i es 1= la segunda posición del Array"
        //En el condicinal va comparando la cantidad de letras del nombre que a capturado 
        //y le indica que ¿si es el total de letras de "Thor"(param[i].length) es mayor que el total de letras de "Hulk" (biggestname.length)?
        //como no es mayor no entra en el condicinal a cambiar Hulk por Thor
        biggestname = param[i]; //la primera vez que cambia el valor de biggestname es a Ironman
    }
  }
  return console.log(biggestname)
}
findLongestWord(avengers);
