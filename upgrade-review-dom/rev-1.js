// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ullist$$ = document.createElement("ul");

for (const country of countries) {
    let li$$ = document.createElement("li");
    li$$.textContent = country;
    ullist$$.appendChild(li$$);
}

document.body.appendChild(ullist$$);
