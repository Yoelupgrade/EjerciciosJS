// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho
// array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.
// Puedes usar este array para probar tu función:

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function finderName(param) {
  for (let i = 0; i < nameFinder.length; i++) {
    if (nameFinder[i] === param) {
      console.log(nameFinder[i], 'IGUAL', true, 'POSICION', i);
    } else {
      console.log(nameFinder[i], false, i);
    }
  }
  //console.log(false); supongo que lo que el ejercicio pedía es esto,
                      //e decidido que me diera false por cada nombre que comparar, para mi era más visible
}

finderName("Clint");
