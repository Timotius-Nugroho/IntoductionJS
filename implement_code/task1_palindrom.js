const detectPalindorm = (str) => {
  if (typeof str != "string") {
    return "masukan harus string";
  }
  let newStr = str.toLowerCase();
  let res = "";
  for (let i = newStr.length - 1; i >= 0; i--) {
    res += newStr[i];
  }
  if (res == newStr) {
    return "Palindrom";
  } else {
    return "Bukan Palindrom";
  }
};

console.log(detectPalindorm("malam"));
