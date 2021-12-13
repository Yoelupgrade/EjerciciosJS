//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const allp$$ = document.querySelectorAll("p")

for (const p of allp$$) {
    let pclas = document.querySelector(".fn-remove-me")
    if( p === pclas ){
        pclas.remove();
    }
}