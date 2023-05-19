class Animal {
  name: string;
  species: string;
  sound: string;
  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`this ${this.name} says ${this.sound}`);
  }
}
const dog = new Animal("bulldog", "dog", "bark");
dog.makeSound();

// simplyfing using parameterized property
// we have to define public / private otherwise it wont work
class Animal1 {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  makeSound() {
    console.log(`this ${this.name} says ${this.sound}`);
  }
}
const cat = new Animal1("persian", "cat", "meow");
