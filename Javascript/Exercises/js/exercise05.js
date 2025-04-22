//Crear un algoritmo que devuelva el menor y mayor numero dentro de un array

let lowest;
let highest;

/**
function lowHighNumber(array) {
for (let index = 0; index < array.length; index++) {
    if (index == 0) {
        lowest = array[index];
        highest = array[index];
    } else if (array[index] < lowest) {
        lowest = array[index];
    } else if (array[index] > highest) {
        highest = array[index];
    }
}
return [lowest, highest];
}
*/

function lowHighNumber(array) {
    lowest = array[0];
    highest = array[0];
    for (number of array) {
        lowest = number < lowest ? number : lowest;
        highest = number > highest ? number : highest;
    }
    return [lowest, highest]
}

let result = lowHighNumber([5, -9, 65, 84, 743, -569, 532, -65, -963, 485, 740]);
console.log(result);