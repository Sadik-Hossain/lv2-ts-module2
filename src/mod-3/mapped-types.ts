type Someobj = {
  p1: number;
  p2: number;
};
type A = Someobj["p1"]; //type lookup
type B = keyof Someobj; // "p1" | "p2"

type AreaNum = {
  width: number;
  height: number;
};

type AreaStr = {
  [key in keyof AreaNum]: string;
};
type AreaReadonly = {
  readonly [key in keyof AreaNum]: boolean;
};

// mixing lookup for dynamic
type Area = {
  [key in keyof AreaNum]: AreaReadonly[key];
};

// generic
type dynamic<T> = {
  [key in keyof T]: T[key];
};
