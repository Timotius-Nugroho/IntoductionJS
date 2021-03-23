const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

let cekInclude = (str, keyword) => {
  return str.toLowerCase().includes(keyword);
};

let searchNama = (arr, keyword, lim, callback) => {
  let res = [];
  for (str of arr) {
    if (callback(str, keyword)) {
      res.push(str);
    }
    if (res.length == lim) {
      break;
    }
  }
  return res;
};

console.log(searchNama(name, "an", 3, cekInclude));
