//Crear algoritmo que tome un array de objetos y devuelva un array de pares

let objectArray = [{
    id: 1,
    name: "Mai",   
}, {
    id: 2,
    name: "Andrew",
}, {
    id: 3,
    name: "Pikachu"
}];

function toPair(array) {
    let pairs = []
    for (index in array) {
        let element = array[index]
        pairs[index] = [element.id, element] 
    }
    return pairs
}

let result = toPair(objectArray);
console.log(result);
