//Crear una clase persona que reciba de constructor el nombre y la edad ademas de un metodo para presentarse.

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Buenas, me llamo ',this.name,' y tengo ',this.age,' años');
    }
}

const user1 = new user('Juan','34');
user1.greet();