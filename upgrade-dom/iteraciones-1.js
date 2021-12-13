//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const btn = document.querySelector(".showme");
console.log(btn$$);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1 = document.querySelector("#pillado");
console.log(h1$$);

//1.3 Usa querySelector para mostrar por consola todos los p
const allp$$ = document.querySelectorAll("p");
console.log(allp$$);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const allpokemon$$ = document.querySelectorAll(".pokemon");
console.log(allpokemon$$);

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".
const alldata$$ = document.querySelectorAll('[data-function="testMe"]');
console.log(alldata$$);

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".
const alldataperson$$ = document.querySelectorAll('[data-function="testMe"]');
console.log(alldataperson$$[2]);// muestra la posición 2 (=Rick) del array de data-function="testMe"