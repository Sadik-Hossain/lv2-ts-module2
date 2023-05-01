//* implicitly array of union types
const mix = ["a", "b", "c", 1, true];

//* implicitly array of string types
const names = ["a", "b", "c"];

/* 
 names.push(12) //error
 names[5]= true //error
 names.map(name=>name.<all string methods>)
 */
//* explicit typing
const roll: number[] = [1, 2, 3];
console.log(roll);

//* tuples
const usr: [number, String] = [1, "s"];
/* 
 usr[0]= "a" //error
 usr[0] = 2
 usr[1]= true //error
 usr[1]= "t" 
 */

//* benefit of tuple vs union typed array is, we assign any union typed value at any index, but in tuples its not the case. we defined type for each index, so we cannot assign other typed value in every index

/* 
* array
 const usr:(number|string|boolean)[]=["a",1,true]
 usr[0]=1; ✓
 usr[0]=false; ✓
 usr[0]="f"; ✓
 * tuple
 const usr: [number, String] = [1, "s"];

 usr[0]= "a" //error
 usr[0] = 2
 usr[1]= true //error
 usr[1]= "t" 
  */
