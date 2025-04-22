//Recibir un array y su indice luego mostrar el contenido, que sea valido el indice y no de error

function getArrayIndex(array, index) {
    return array[index] ? array[index] : "Elemento no existe";
}

let result = getArrayIndex([6,9,2,7,23], 1);
console.log(result);