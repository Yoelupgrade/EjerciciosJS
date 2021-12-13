// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul$$ = document.createElement("ul");

for (const app of apps) {
    let li$$ = document.createElement("li");
    ul$$.appendChild(li$$)
    li$$.textContent = app;
}
document.body.appendChild(ul$$);