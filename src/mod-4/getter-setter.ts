class MyBank {
  id: number;
  name: string;
  private balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  getBalnce() {
    return this.balance;
  }

  //* -------- getter ----------
  get getterBalance() {
    return this.balance;
  }

  addBalnce(fund: number) {
    return (this.balance += fund);
  }

  //* --------- setter ----------
  set deposit(amount: number) {
    //? setters cannot return a value. we dont have to use return keyword, nor return types
    this.balance += amount;
  }
}
const newMyBank = new MyBank(12, "sadik", 10);
// to getBalance we invoked a fn
// console.log(newMyBank.getBalnce());

// if we wanna access balance without invoking a fn. we can use getter
console.log("getter", newMyBank.getterBalance);

console.log(newMyBank.addBalnce(50));
// if we wanna add balance without invoking a fn. we can use setter like
newMyBank.deposit = 90;
console.log(newMyBank.getBalnce());

/*
 * summary: getter & setter er madhomme fn. call na kore, property access er moto use kore value dekhte / set korte pari

 * its a way to retrieve and modify the values of private or protected variables while allowing encapsulation and maintaining data integrity.
 */
