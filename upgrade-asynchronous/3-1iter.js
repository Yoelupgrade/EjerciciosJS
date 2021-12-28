// 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser
// de MZ.

const baseUrl = "https://api.nationalize.io?name=";

const button = document.querySelector("button");
const nameinput = document.querySelector("input");

const api = () =>
  fetch(baseUrl + nameinput.value)
    .then((response) => response.json())
    .then((myJson) => {
      const name = myJson.name;
      for (const country of myJson.country) {
        const p$$ = document.createElement("p");
        p$$.textContent = `El nombre ${name} tiene un ${country.probability} porciento de ser de ${country.country_id}`;
        document.body.appendChild(p$$);
      }
    });

button.addEventListener("click", api);
