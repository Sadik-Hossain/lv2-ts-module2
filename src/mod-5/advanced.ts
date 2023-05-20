// properties
interface Iuser {
  fName: string;
  lName: string;
}

//methods
interface Imethod {
  fullname(): string;
}
interface IModel<Tdata, Tmethod> {
  data: Tdata;
  method: Tmethod;
}
type Model = IModel<Iuser, Imethod>;

class UserClass implements Model {
  data: Iuser;
  method: Imethod;
  constructor(fName: string, lName: string) {
    this.data = { fName, lName };
    this.method = {
      fullname() {
        return `${fName} ${lName}`;
      },
    };
  }
}

const newUser = new UserClass("sadik", "hossain");
newUser.method.fullname();
console.log(newUser.method.fullname());
