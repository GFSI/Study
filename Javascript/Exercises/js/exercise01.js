//Entregar el numero mayor entre 2 numeros

function highestNumber (a, b) {
    if (a == b) {
        return "Son iguales";
    }
    return a < b ? b : a;
}

let result = highestNumber(4,5);
console.log(result);