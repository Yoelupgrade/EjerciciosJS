// Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.
// Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const newarraysound = [] ;

for (const user of users) {
  //recorremos el array users
  for (const key in user.favoritesSounds) {
    // recorremos el array de objetos favoritesSound
    if (newarraysound.length) {
      // si existen objetos en newarraysound entra
      let insideArray = false;
      for (const arrayobj of newarraysound) {
        //recorremos newarraysound
        if (arrayobj.name === key) {
          //si el nombre dentro del objeto de arraySound es igual al
          // key(nombre) de favoriresSounds, entra.
          insideArray = true; //cambiamos la variable a true
          arrayobj.count += 1; //le sumamos 1 al count de objeto newarraysound que tennga el mismo nombre del key del array favoriteSound
          
          break;//paramos la ejecucion del for of del newarraysound
          
        }
      }
      if (!insideArray) {
        // si es el contrario del boleano de la variable insideArray entra
        newarraysound.push({ name: key, count: 1 }); // empuja en el arraysound un nuevo objeto con el nombre de la key
      }
    } else {
      // si no existe objetos en newarraysound enpuja el primero
      newarraysound.push({ name: key, count: 1 }); // insertamos el primero
    }
  }
}
console.log(newarraysound);