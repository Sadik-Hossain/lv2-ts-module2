/* 
* by using access modifier we can restrict access to various propterties and methods

meaning we can encapsulate our props & methods

* public: accessible & modifyable by anyone

* readonly: only readable, not modifyable by anyone

* private: only accessible and modifyable inside the class where its been declared

* protected: only accessible and modifyble inside the class and its subclasses

* getter: it can help access private, protected prop and method outside class. 
syntax of getter: get MethodName(takes no arg){
    return this._secretMethod()
    or, this._secretValue
}

consumer of getter:
? not invoking like fn
classInstance.methodName 


* setter: it helps modifying private, protected prop and method outside class. 
syntax of setter: set methodName(accepts arg){
    ! setter fn returns nothing
    this._secret = arg
    or, this._secretMethod(arg)
}
consume setter: classInstance.methodName = arg

*/
class BankAcc1 {
  // private prop must have value inside class
  private some: string = "asd";

  constructor(
    public id: number,
    readonly name: string,
    protected fund: number
  ) {
    this.fund = fund;
    this.id = id;
    this.fund = fund;
  }

  private addFund(x: number) {
    return (this.fund += x);
  }
  protected someM() {
    return this.some;
  }
  // getter
  get getterFund() {
    return this.fund;
  }

  // setter
  set setteraddFund(x: number) {
    this.addFund(x);
  }
}
class Subacc extends BankAcc1 {
  constructor(id: number, name: string, fund: number) {
    super(id, name, fund);
  }
  meh() {
    console.log(this);
    this.setteraddFund = 100;
    return this.getterFund;
  }
}
const newSub = new Subacc(12, "sadiq", 10);
newSub.meh();
console.log(newSub.getterFund);
