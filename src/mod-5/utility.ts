// * Pick
interface IIPerson {
  name: string;
  email: string;
  contactInfo: string;
}
type Con = Pick<IIPerson, "email" | "name">;
/* type Con = {
    email: string;
    name: string;
} */

// * Omit

type D = Omit<IIPerson, "email">;
/* 
type D = {
    name: string;
    contactInfo: string;
}
*/

//* Partial : make all property optional
type E = Partial<IIPerson>;
/* type E = {
    name?: string | undefined;
    email?: string | undefined;
    contactInfo?: string | undefined;
}
 */

//* Required: make all property required
type F = Required<IIPerson>;

//* ReadOnly: make all property readonly
const G: Readonly<IIPerson> = {
  name: "asad",
  email: "asda",
  contactInfo: "zxczcz",
};
// G.email="sdsads"  //! Cannot assign to 'email' because it is a read-only property

//* record type
// type myObj = {
//   a: string;
//   b: string;
//   c: string;
// };

type myObj = Record<"a" | "b" | "c", string>;

const o: myObj = {
  a: "a",
  b: "zxc",
  c: "xxx",
  //   d: "11", // error  'd' does not exist in type 'myObj'.
};
