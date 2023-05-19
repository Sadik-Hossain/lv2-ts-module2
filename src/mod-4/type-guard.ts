//* -------- keyof guard --------------
type AlphaNumeric = string | number;

function add(p1: AlphaNumeric, p2: AlphaNumeric): AlphaNumeric {
  if (typeof p1 === "number" && typeof p2 === "number") {
    return p1 + p2;
  } else {
    return p1.toString() + p2.toString();
  }
}
add(1, 2);
console.log(add("1", "2"));
console.log(add(1, 2));

//* --------- in guard -------------
type NormalUser = { name: string };
type AdminUser = { name: string; role: string };

function getUser(user: NormalUser | NormalUser): string {
  if ("role" in user) {
    return `I am an admin my role is ${user.role}`;
  } else {
    return `I'm a normal user`;
  }
}

const normal: NormalUser = { name: "mr.X" };
const admin: AdminUser = { name: "mr.Y", role: "admin" };

console.log(getUser(normal));
console.log(getUser(admin));

//* ---------- instanceof guard ----------
class Animal99 {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    (this.name = name), (this.species = species);
  }
  makeSound() {}
}
class Dog extends Animal99 {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark(): void {
    console.log(`I am barking`);
  }
}
class Cat extends Animal99 {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeow(): void {
    console.log("I am meowing");
  }
}

// instance -> Dog
const newanimal = new Dog("german shephard", "dog");

// instance -> Cat
const newanimal1 = new Cat("snowball", "cat");

function getAnimal(obj: Animal99) {
  //* we can use class as type
  if (obj instanceof Dog) {
    // checking if obj is an instanceof Dog
    obj.makeBark();
  } else if (
    // checking if obj is an instanceof Cat
    obj instanceof Cat
  ) {
    obj.makeMeow();
  } else {
    obj.makeSound();
  }
}

//* custom validation fn
// we have to explicitly typed return type like this, because its inferring to boolean, we have to tell tsc that the return type is  "obj is Dog" type. so that wheneven we call this fn, we can access the dog classes prop & methods .
function isDog(obj: Animal99): obj is Dog {
  return obj instanceof Dog;
}
function isCat(obj: Animal99): obj is Cat {
  return obj instanceof Cat;
}
function getAnimal1(obj: Animal99) {
  //* we can use class as type
  if (isDog(obj)) {
    obj.makeBark();
  } else if (isCat(obj)) {
    obj.makeMeow();
  } else {
    obj.makeSound();
  }
}
getAnimal1(newanimal);
