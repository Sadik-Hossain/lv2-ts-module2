// import { addNums as addNums2 } from "./module"; // named import & name alias
// import * as Methods from "./module"; // wildcard import

import avg, { Mul } from "./module"; // default import + named import
import ccv from "./module"; // default import can be named anything

import M from "./utils/index";

export const addNums = (n1: number, n2: number): number => {
  return n1 + n2;
};
// Methods.Mul(3, 2);
Mul(3, 2);
avg(2, 2);
ccv(2, 2); // avg(2, 2) of module.ts
M.add1(1, 2);
M.div1(1, 2);
M.mul1(1, 2);
