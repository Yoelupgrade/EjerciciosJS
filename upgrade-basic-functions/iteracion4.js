//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:


const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let sum = 0;
    let totalnumbers = numbers.length;
    for (let i= 0; i < param.length; i++){
        sum += param[i];
        }
    let division = sum / totalnumbers;
    return console.log('el promedio es',division);
}

average (numbers);