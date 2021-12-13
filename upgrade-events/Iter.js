// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
const btn = document.createElement("button");
btn.setAttribute.id = "btnToClick";
btn.textContent = "Pulsar";
document.body.appendChild(btn);

btn.addEventListener('click', function(){
    console.log(event, 'funciona');
});
// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusinput = document.querySelector(".focus")
focusinput.addEventListener('focus', function(){
    console.log(event.target.value);
})

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input = document.querySelector(".value")
input.addEventListener('input', function(){
    console.log(event.target.value);
})