//* ------- interface -----------
interface Ivehicle {
  start(): void;
  stop(): void;
}

class Vehicle implements Ivehicle {
  /* 
     if we dont give start(), stop() method, ts will give error
     saying class incorrectly implements Ivehicle
     means, class is missing Ivehicle's props / method
 */
  start(): void {
    console.log(`starting!`); // implementation
  }
  stop(): void {
    console.log(`stopping!`); // implementation
  }
  test() {
    // own method, not part of the interface
    console.log("testing !");
  }
}
const newVeh = new Vehicle();
// newVeh.

// * ------- abstract class -------
abstract class Vehicle1 {
  start(): void {
    console.log(`starting!`);
  }
  stop(): void {
    console.log(`stopping!`);
  }
  abstract test(): void; // abstract method
}
class Car extends Vehicle1 {
  /* 
    if we dont implement test(), we will get this following error
    
    Non-abstract class 'Car' does not implement inherited abstract member 'test' from class 'Vehicle1
    */
  test(): void {
    console.log(`testing !`); // implementation
  }
}
const newCAr = new Car();
newCAr.test();
