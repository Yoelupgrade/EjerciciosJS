// 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno
// de los p que hayas insertado y que si el usuario hace click en este botón
// eliminemos el parrafo asociado.

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
        const div$$ = document.createElement("div");
        const btn$$ = document.createElement("button");
        btn$$.textContent = 'X';
        p$$.textContent = `El nombre ${name} tiene un ${country.probability} porciento de ser de ${country.country_id}`;
        div$$.appendChild(p$$);
        div$$.appendChild(btn$$);
        document.body.appendChild(div$$);
        btn$$.addEventListener("click", () =>{
            div$$.remove()
        });
      }
    });

button.addEventListener("click", api);
