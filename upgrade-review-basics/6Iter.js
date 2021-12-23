// Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array.
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro.
// Retorna el array resultante.

const gamblers = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];
let name1 = "" ;
let name2 = "" ;

function swap(array, index1, index2) {
  for (let i = 0; i < array.length; i++) {
    if (i === index2){
        name2 = array.slice(i,i+1);
        //console.log(name2)
    }
    else if(i === index1){
        name1 = array.slice(i,i+1);
        //console.log(name1)
    }
}
for (let j = 0; j < array.length; j++) {
        if (j === index2){
            array.splice(index1,1, name2[0]);
            //console.log(name2)
        }
        else if(j === index1){
            array.splice(index2,1, name1[0])
            //console.log(name1)
        }
}
  return array;
}

console.log(gamblers);
console.log(swap(gamblers,3,1));

