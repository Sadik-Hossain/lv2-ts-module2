//null
const serachName = (value: string | null) => {
  if (value === null) {
    console.log("nothing to search");
  } else {
    console.log("searching");
  }
};
serachName(null);

//unknown
const getSpd = (spd: unknown) => {
  if (typeof spd === "boolean") {
    console.log(spd);
  }
  if (typeof spd === "string") {
    console.log(spd);
  }
  if (typeof spd === "number") {
    console.log(spd);
  }
};
getSpd(true);
getSpd("true");
getSpd(21);
