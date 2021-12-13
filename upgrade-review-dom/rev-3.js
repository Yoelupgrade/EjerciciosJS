// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const div = document.querySelector('[data-function="printHere"]');
const ullist$$ = document.createElement("ul");

for (const car of cars) {
    let li$$ = document.createElement("li");
    li$$.textContent = car;
    ullist$$.appendChild(li$$);
}
document.body.appendChild(div);
div.appendChild(ullist$$);