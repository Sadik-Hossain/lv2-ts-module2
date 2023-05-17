const makePromise = () => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "data fetched!";
    if (data) {
      resolve(data);
    } else {
      reject("failed!");
    }
  });
};

// Promise<number> Promise<boolean>

const getPromise = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

// we can define custom type
type DataType = {
  data: string;
};

const makePromise2 = () => {
  return new Promise<DataType>((resolve, reject) => {
    const data: DataType = {
      data: "asdda",
    };
    if (data) {
      resolve(data);
    } else {
      reject("failed");
    }
  });
};

const getPromise2 = async () => {
  const resultdata = await makePromise2();
  return resultdata;
};

// jsonplaceholder
interface Itodo {
  userid: number;
  id: number;
  title: string;
  completed: boolean;
}
const fetchTodo = async (): Promise<Itodo> => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  const data = await resp.json();
  return data;
};
const getTodo = async () => {
  const res = await fetchTodo();
  console.log(res);
};
getTodo();
