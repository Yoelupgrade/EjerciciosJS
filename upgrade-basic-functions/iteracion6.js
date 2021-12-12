//Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
//en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(param) {
  let newarray = [...param].sort();
  //const result = new Set(param);
  for (let i = 0; i < newarray.length; i++)
  {
    if (newarray[i + 1] === newarray[i]) {
      newarray.splice([i], 1);
    }
  }
  return console.log(newarray)
}
// let unique = [];
//   for (let i = 0; i < param.length; i++) {
//    if (!unique.includes(param[i])) {// si no esta en el array unique lo incluyes
//      unique.push(param[i]);
//     }
//    }
//  return console.log(unique);
// }

removeDuplicates(duplicates);
