// lo mismo que el anterior pero inverso

let pairArray = [
    [1, {name: "Mai"}],
    [2, {name: "Andrew"}],
    [3, {name: "Pikachu"}]
];

function toCollection(array) {
    let objectArray = [];
    for (index in array) {
        let item = array[index];
        let itemElement = item[1]
        objectArray[index] = {id:item[0], name:itemElement.name};
    }
    return objectArray
}

let result = toCollection(pairArray);
console.log(result);