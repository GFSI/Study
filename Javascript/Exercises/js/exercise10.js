//Crear un array de longitud N y que sus elementos sean numeros de 1 a N

let length = 7;

function createArray(n) {
    if (n <= 0) {
        return [];
    }
    let array = [];
    for (let index = 0; index < n; index++) {
        array[index] = index+1;
    }
    return array;
}

let result = createArray(length);
console.log(result);