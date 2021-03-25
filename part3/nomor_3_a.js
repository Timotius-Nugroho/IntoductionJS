const filterDataHabisBagi = (num, arr) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let newArr = arr.filter((e) => Math.abs(e) % num == 0);
      if (newArr.length > 0) {
        resolve(newArr);
      } else {
        reject(new Error(`Elemen array tidak habis dibagi ${num}`));
      }
    }, 3000);
  });
};

const multipleData = (times, arr) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let newArr = arr.map((e) => e * times);
      resolve(newArr);
    }, 2000);
  });
};

// trycatch
const hitung = async () => {
  try {
    let result = await filterDataHabisBagi(2, [1, -2, -1, 4, 6]);
    let result2 = await multipleData(15, result);
    console.log(`hasil akhir = ${result2}`);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("selesai");
  }
};
hitung();
