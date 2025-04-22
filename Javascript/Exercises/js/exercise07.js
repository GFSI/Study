//Crear un algoritmo que calcule el precio del producto más impuesto

function math(price, iva) {
    return price*(iva+1)
}

let result = math(19.20, 0.15);
console.log(result)