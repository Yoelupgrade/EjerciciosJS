// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// .age sea mayor que 35.

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamerLegends = streamers.filter((streamer) => {
  const legends = streamer.gameMorePlayed.toLowerCase().includes("legends");
  if (legends && streamer.age > 35) {
    //le manda 2 condiciones la de la variable legends(que busque Legends en minuscula en gameMorePlayed)
    //y (&&)  que al edad (streamer.ager) sea mayor que 35
    streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase(); // cambiamos
  }
  return legends;
});

console.log(streamerLegends);
// const filteredLoleros = streamers.filter((streamer) => {
//     const toReturn = streamer.gameMorePlayed.toLowerCase().includes("legends");

//     if (toReturn && streamer.age > 35) {
//       streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
//     }

//     return toReturn;
//   });

//   console.log(filteredLoleros);
