//type assertion
let emni: any;

emni = "asdadasd";
//syntax #1
(emni as string).length;
(emni as number).toFixed;

//syntax #2
<string>emni.length;
<number>emni.toFixed;

//example 1
function kgtogram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    return `value = ${Number(param) * 1000}`;
  }
  if (typeof param === "number") {
    return param * 1000;
  }
}
// we are sure to get string, thus we make as string instead of inferred resultStr: string | number | undefined
const resultStr = kgtogram("1000") as string;

// we are sure to get number, thus we make as string instead of inferred resultStr: string | number | undefined
const resultNum1 = kgtogram(1000) as number;
//or
const resultNum2 = <number>kgtogram(1000);

//example 2
type CustomErr = {
  message: string;
};
try {
} catch (error) {
  console.log((error as CustomErr).message);

  //or
  console.log((<CustomErr>error).message);
}
