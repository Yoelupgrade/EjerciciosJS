// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const country of countries) {
  const div = document.createElement("div");
  document.body.appendChild(div);
  div.innerHTML = `<h4>${country.title}</h4><img src=${country.imgUrl}/>`;
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la lista.
const button = document.createElement("button");
button.textContent = "Elimna el ultimo";
button.addEventListener("click", function () {
  const selectelement$$ = document.querySelectorAll("div"); //Crea un array de los divs que tiene el html
  selectelement$$[selectelement$$.length - 1].remove(); //le restamos(eliminamos con la funcion remove()) 1 cada vez
  //que hacemos click del total de los divs del array selectelement
});
document.body.appendChild(button);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// elementos de las listas que elimine ese mismo elemento del html

const containerelemnt$$ = document.querySelectorAll("div");
for (const container of containerelemnt$$) {
  const buttondelet = document.createElement("button");
  container.appendChild(buttondelet);
  buttondelet.textContent = "Elimna este elemento";
  buttondelet.addEventListener("click", function () {
    return container.remove();
  });
}
