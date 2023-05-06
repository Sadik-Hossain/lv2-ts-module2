//normal fumnction
function add(num1: number = 1, num2: number = 10): number {
  return num1 + num2;
}
add(2);

//arrow fn
const mul = (n1: number, n2: number): number => {
  return n1 * n2;
};

//cb fn
const arr = [1, 2, 3];
const newArr = arr.map((e: number): number => e * e);

//obj. method
const person: {
  name: string;
  balance: number;
  // addBalance(money: number): number;
  // addBalance(money: number): string;
  addBalance(money: number): void;
} = {
  name: "sam",
  balance: 5,
  addBalance(money: number) {
    // return this.balance + money;
    // return `my new balance ${this.balance + money}`;
    console.log(`my new balance ${this.balance + money}`);
  },
};

//spread operator
const frnds = ["a", "b", "c"];
const newfr = ["d", "e", ...frnds];
console.log(newfr);

//rest param
const greet = (...frnds: string[]): void => {
  console.log("hi", frnds);
};
greet("abe", "gabe", "rob");

//array destructure
const ar = ["ken", "ren", "sen"];
// const [my] = ar; //"ken"
// const [, my] = ar; //"ren"
const [, , my] = ar; //"sen"
console.log(my);

//obj destructure
const man = {
  name: "ryu",
  age: 24,
};
const { age } = man;
console.log(age);
