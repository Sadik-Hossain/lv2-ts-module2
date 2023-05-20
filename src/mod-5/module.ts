// named export
export const addNums = (n1: number, n2: number): number => {
  return n1 + n2;
};
export const Mul = (n1: number, n2: number): number => {
  return n1 * n2;
};
export const div = (n1: number, n2: number): number => {
  return n1 / n2;
};

//default export
const avg = (p1: number, p2: number) => {
  return (p1 + p2) / 2;
};
export default avg;
