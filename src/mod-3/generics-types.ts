const roll1: number[] = [1, 23, 11];
// same as
const roll1g: Array<number> = [2, 2, 2, 12];

const roll3: (string | number)[] = [2, "a"];
// same as
const roll3g: Array<number | string> = ["2", 0];

//* -------------- generic array -----------------

type MyGenericArray<T> = Array<T>;
type Person = { name: string; age: number };

const rollx: MyGenericArray<number> = [1, 1, 1];
const personx: MyGenericArray<Person> = [
  { name: "zx", age: 11 },
  { name: "zxo", age: 31 },
];

//* -------------- generic tuple -----------------
type MyGenericTuple<K, V> = [K, V];
type UsrType = { name: string; age: number };
const usr1: MyGenericTuple<UsrType, string> = [{ name: "ss", age: 12 }, "fff"];

//* --------- generic interface ------------
interface IA<T, U> {
  prop1: T;
  prop2: U;
}
const aman: IA<string, number> = { prop1: "sadada", prop2: 122 };
const bman: IA<boolean, number> = { prop1: true, prop2: 122 };

//* ----------- generic fn. -------------------
const fnTup = <T, U>(n1: T, n2: U) => {
  return [n1, n2];
};
const newTup1 = fnTup<number, string>(1, "a");
const newTup2 = fnTup<number, boolean>(1, true);

const sprdobj = <T>(parm: T) => {
  const color = "red";
  return { ...parm, color };
};
const newcar1 = sprdobj({ name: "sada", speed: 32 });
const newcar2 = sprdobj({ name: "kala", speed: 42 });

//* ----------- generic contraints --------------
/* 
 enforcing what datatype are accecptable in generics 
 */
/* 
<T extends { name: string; speed: number }> means
type { name: string; speed: number } must include
*/

type Mandatory = { name: string; speed: number };

// const sprdobj2 = <T extends { name: string; speed: number }>(parm: T) => {
const sprdobj2 = <T extends Mandatory>(parm: T) => {
  const color = "red";
  return { ...parm, color };
};
const newcar3 = sprdobj2({ name: "sada", speed: 32 }); //acceptable
const newcar4 = sprdobj2({ name: "sada", speed: 32, other: true }); //acceptable
// const newcar5 = sprdobj2({ name: "sada" }); //unacceptable
// const newcar6 = sprdobj2({ other: "asdad" }); //unacceptable

// * -------------- gneric constraints using keyof -------------------
type Person1 = {
  name: string;
  age: number;
  salary: number;
};

// we can create new types using objects key
type newType = "name" | "age" | "salary"; //manual

type newTypeUsingKeyOf = keyof Person1;

const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
  // return obj[key];
  const ss = key;
  const res = obj[ss];
  return res;
};

const result1 = getProperty({ name: "sadik", age: 12 }, "name");
console.log(result1);
// const result2 = getProperty({ name: "sadik", age: 12 }, "xxx"); //! Argument of type '"xxx"' is not assignable to parameter of type '"name" | "age"'.
