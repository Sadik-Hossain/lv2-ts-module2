//* a type is dependent on conditional type
type a1 = string;
type a2 = a1 extends string ? string : null;

// nested conditional type

type a3 = null;
type a4 = number;
type a5 = null;

// if elif else mental model
type d = a3 extends null
  ? null
  : a4 extends number
  ? number
  : a5 extends null
  ? null
  : never;

// removal example
type gf = "a" | "b" | "c";

type remove<T> = T extends "a" ? never : T;
type current = remove<gf>; //"b" | "c"

type removeX<T> = T extends "azz" ? never : T;
type currentX = removeX<gf>; // azz dont exist in gf so the type gets "a" | "b" | "c"

type remove1<T> = T extends "a" ? null : T;
type current1 = remove1<gf>; //"b" | "c" | null

type remove2<T, K> = T extends K ? never : T;
type current2 = remove2<gf, "c">; //"a" | "b"
