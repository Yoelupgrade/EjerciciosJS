// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando
// fetch() para hacer una consulta a la api cuando se haga click en el botón,
// pasando como parametro de la api, el valor del input.
const baseUrl = "https://api.nationalize.io?name=";

const button = document.querySelector("button");
const nameinput = document.querySelector("input");

const api = () =>
  fetch(baseUrl + nameinput.value)
    .then((response) => response.json())
    .then((myJson) => {
      console.log(myJson);
    });

button.addEventListener("click", api);


