const user: {
  name: string;
  age: number;
  isAdmin: boolean;
  //optional type (tha)
  roll?: number;

  // specific value type (literal type)
  company: "prog. bd";

  // readonly property (cannot modify property)
  readonly height: number;
} = {
  name: "asd",
  age: 32,
  isAdmin: false,
  //   company: "pd", //error
  company: "prog. bd",
  height: 169,
};
// user.height=200 //error
