//Crear cuenta bancaria con las propiedades titular/saldo y tres metodos siendo depositar/retirar/mostrarSaldo

class bankAccount {
    constructor(name, balance) {
        this.balance = balance;
        this.name = name;
    }

    deposit(amount){
        this.amount = amount;
        this.balance += this.amount;
        console.log('You have deposited:', amount,'to your bank account');
    }

    withdraw(amount){
        this.amount = amount;

        if (this.amount > this.balance){
            console.log('There is not enough money in your bank account');
        } else{
            this.balance -= this.amount;
            console.log('You have withdrawn:', amount,'from your bank account');
        }
    }

    seeBalance(){
        console.log(this.name,',your balance is: ', this.balance);
    }
}

const account = new bankAccount('James', 10000);
account.seeBalance();
account.deposit(5000);
account.seeBalance();
account.withdraw(500);
account.seeBalance();