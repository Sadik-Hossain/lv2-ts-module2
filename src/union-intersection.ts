//union type (|)
type NoobDev = {
  name: string;
};
type JrDev = {
  name: string;
  age: number;
  lang: string;
};

const newDev: NoobDev | JrDev = {
  name: "sam",
};

const newDev2: NoobDev | JrDev = {
  name: "sam",
  lang: "TS",
};
const newDev3: NoobDev | JrDev = {
  name: "sam",
  lang: "TS",
  age: 21,
};
//!error
// const newDev4: NoobDev | JrDev = {
//   name: "sam",
//   lang: "TS",
//   age: 21,
//   shirt:"white"
// };

// intersection type (&)
type NoobGamer = {
  name: string;
};
type ProGamer = NoobGamer & {
  game: string;
  age: number;
};

const gamer: ProGamer = {
  name: "sam",
  game: "rdr2",
  age: 21,
};

//! error
// const gamer: ProGamer = {
//   name: "sam",
// };
// const gamer: ProGamer = {
//   name: "sam",
//   game: "ss2",
// };

//enum
enum Levels {
  jr,
  mid,
  sr,
}
enum Level {
  jr = "jr",
  mid = "mid",
  sr = "sr",
}
