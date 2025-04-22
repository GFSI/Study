//Crear una clase vehiculo con las propiedades marca/modelo, metodo arrancar(vehiculo en marcha). 
//Crear sub clase auto con las propiedades de vehiculo y modificar metodo arrancar

class vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    runCar(){
        console.log('El vehiculo está en marcha')
    }
}

class car extends vehicle {
    constructor(brand, model, doors) {
        super(brand, model);
        this.doors = doors;
    }

    runCar() {
        console.log('El vehiculo ', this.brand, this.model, 'está en marcha')
    }
}

const car1 = new car("Toyota", "Corolla", 4);
car1.runCar();