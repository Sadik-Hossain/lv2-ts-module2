class Xperson {
  takeNap() {
    console.log(`I am sleeping 8 hrs per day`);
  }
}
class Xstudent extends Xperson {
  takeNap(): void {
    console.log(`I am sleeping 10 hrs per day`);
  }
}

class Xdev extends Xperson {
  takeNap(): void {
    console.log(`I am sleeping 5 hrs per day`);
  }
}

function getNap(param: Xperson) {
  console.log(param.takeNap()); // takeNap return different output
}
const pers = new Xperson();
const studs = new Xstudent();
const devs = new Xdev();
getNap(pers);
getNap(studs);
getNap(devs);

class Shape {
  getArea() {}
}
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super(); //? super must be called before this
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rect extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height * this.width;
  }
}

function getAreaOfShape(param: Shape) {
  console.log(param.getArea()); // same method returns different output
}
getAreaOfShape(new Circle(12));
getAreaOfShape(new Rect(10, 20));
