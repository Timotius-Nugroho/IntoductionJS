const reverseWords = (str) => {
  if (typeof str != "string") {
    return "masukan harus string";
  }
  let res = str.split(" ");
  for (let i = 1; i <= res.length - 1; i++) {
    res.unshift(res[i]);
    res.splice(i + 1, 1);
  }
  return res.join(" ");
};

console.log(reverseWords("Saya belajar javascript"));
