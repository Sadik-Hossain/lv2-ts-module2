// -----------------[ Type Alias ]-------------------
type User = {
  name: string;
  age: number;
};
type ExtendUser = User & {
  role: string;
};
const userWithTypeAlias: User = {
  name: "sdad",
  age: 12,
};
const userWithTypeAlias2: ExtendUser = {
  name: "sdad",
  age: 12,
  role: "asd",
};
// -----------------[ Interface ]-------------------

interface IUser {
  name: string;
  age: number;
}
interface IExtendedUser extends IUser {
  role: string;
}

const userWithInterface: IUser = {
  name: "sdad2",
  age: 12,
};

const user2: IExtendedUser = {
  name: "saddl",
  age: 21,
  role: "unknwn",
};

// we can define type alias for every type, we cannot use interface for every types. we can only use interface for object type

// we know in JS, functions are objects, array is obj

//* usage of type alias & interface in func.

const addN = (n1: number, n2: number): number => {
  return n1 + n2;
};

// using typeAlias
type addNType = (n1: number, n2: number) => number;

const addNT: addNType = (n1, n2) => {
  return n1 + n2;
};

// using interface
interface IAddN {
  (n1: number, n2: number): number;
}

const addNI: IAddN = (n1, n2) => {
  return n1 + n2;
};

//* usage of type alias & interface in array.
const rolls: number[] = [1, 2, 3];

// type alias
type RollType = number[];
const rolls2: RollType = [2, 3, 4];

// interface
interface Iroll {
  [index: number]: number;
}
const rolls3: Iroll = [3, 4, 5];
