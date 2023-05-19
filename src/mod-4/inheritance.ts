// common property inside a class
class Parent {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep(hours: number): string {
    return `this ${this.name} will sleep for ${hours} hours`;
  }
}

class Student extends Parent {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
  doHW(sub: string) {
    return `${this.name} doing ${sub} homework`;
  }
}

const student1 = new Student("sadik", 21, "lorem");
console.log("🚀", student1.doHW("math"));
console.log("🚀", student1.makeSleep(6));

class Teacher extends Parent {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation; //own prop
  }
  intro() {
    //ow n method
    return `this ${this.name} is a ${this.designation}`;
  }
}

const teacher1 = new Teacher("tom", 32, "lorem", "sub teacher");

console.log(teacher1.designation, "|", teacher1.intro());
