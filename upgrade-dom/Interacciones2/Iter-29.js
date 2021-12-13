// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const divs$$ = document.querySelectorAll(".fn-insert-here");

for (const div of divs$$) {
    let ps = document.createElement("p")
    ps.textContent = 'Voy dentro!';
    div.appendChild(ps);
}