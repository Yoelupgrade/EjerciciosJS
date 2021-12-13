// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const divs$$ = document.querySelectorAll("div");
 //let ptext = document.body.innerHTML = '<p>Voy en medio!</p>';
 //document.body.insertBefore(ptext, divs$$[1]);
let ptext = document.createElement("p");
ptext.textContent = "Voy en medio!";
document.body.insertBefore(ptext, divs$$[1]);