const divideAndSort = (param) => {
  if (typeof param != "number") {
    return "Tipe data harus berupa number";
  }
  let res = param
    .toString()
    .split("0")
    .map((e) => e.split("").sort().join(""))
    .join("");
  return res;
};
console.log(divideAndSort(5956560159466056));
