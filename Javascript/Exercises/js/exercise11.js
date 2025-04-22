//Crear una función que retorne (nombre y tipo) un objeto con esas propiedades y un metodo hablar() que lo imprima

function objectRegister(name, type){
    return {
        name : name,
        type : type,

        Talk(){
            console.log('Soy un ', type, 'y me llamo ', name);
        }
    }
}

let obj1 = objectRegister('Pablo', 'humano')
console.log(obj1.Talk())