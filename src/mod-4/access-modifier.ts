class BankAcc {
  id: number; // by default public
  name: string; // by default public
  //   readonly _balance: number;
  //   private _balance: number;
  protected _balance: number;
  constructor(id: number, name: string, balance: number) {
    this._balance = balance;
    this.id = id;
    this.name = name;
  }
  addFund(t: number) {
    return (this._balance += t);
  }
}

class SubAcc extends BankAcc {
  constructor(id: number, name: string, balance: number) {
    super(id, name, balance);
  }
  addsubFund() {
    return this._balance++;
  }
}

const myAcc = new BankAcc(444, "sadik", 10);
//* by default everything is public, anyone can change props value

//* using the private keyword before props inside the class will restrict to change property outside the calss

//* using readonly keyword before props inside the class will restrict to change property whether inside class or outside class

//* using protected keyword before props inside the class will restrict to change property outside class and it will allow to change in subclass (inherited class)

// myAcc.balance = 0; //! Property 'balance' is private and only accessible within class 'BankAcc'
myAcc.addFund(210);
console.log(myAcc);
