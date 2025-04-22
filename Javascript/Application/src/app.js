let money = document.querySelector('.money');
let parsedMoney = parseFloat(money.innerHTML);

let konoeCost = document.querySelector('.konoeCost');
let parsedKonoeCost = parseFloat(konoeCost.innerHTML);

let konoeLevel = document.querySelector('.konoeLevel');
let damageIncrease = document.querySelector('.damageIncrease');
let parsedDamageIncrease = parseFloat(damageIncrease.innerHTML)

//damage per second 
let dps = 0;

function moneyIncrement() {
    parsedMoney += 1;
    money.innerHTML = Math.round(parsedMoney);
}

function buyUpgrade() {
    if (parsedMoney >= parsedKonoeCost) {

        //Reducir el dinero al comprar
        parsedMoney -= parsedKonoeCost;
        money.innerHTML = Math.round(parsedMoney);
        //Aumentar el nivel del upgrade
        konoeLevel.innerHTML++;
        //Aumentar la cantidad por segundo
        parsedDamageIncrease = parsedDamageIncrease + 1;
        damageIncrease.innerHTML = parsedDamageIncrease;
        dps += 1;
        //Aumentar el costo de la mejora
        parsedKonoeCost = Math.round(parsedKonoeCost *= 1.2);
        konoeCost.innerHTML = parsedKonoeCost;
    }
}

//Lo que se ejecuta cada segundo
setInterval(() => {
    parsedMoney += dps / 10;
    money.innerHTML = Math.round(parsedMoney);
}, 100)