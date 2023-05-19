//type alias
type CustomerType = {
  name: string;
  //optional types
  age?: number;
  proffession: string;
};
const customer1: CustomerType = {
  name: "sam",
  proffession: "asdasd",
};

// Type Aliases can be used for primitives like string or more complex types such as objects arrays tuples
type SomeType = string;
const someName: SomeType = "bnmn";

// type Argtype = [number,boolean];
type Argtype = number[];
const mynums: Argtype = [1, 2];

//fn with type aliases
type NegateType = (x: number) => number;
const negateFn: NegateType = (x) => x * -1;

type Optype = (x: number, y: number) => number;
const calc = (
  n1: number,
  n2: number,
  op: Optype //(x, y) => x + y
) => {
  return op(n1, n2);
};

calc(1, 2, (x, y) => x + y);
calc(1, 2, (x, y) => x * y);
calc(1, 2, (x, y) => x - y);
