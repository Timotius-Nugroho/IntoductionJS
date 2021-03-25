const filterData = (trehs, arr) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let newArr = arr.filter((e) => e > trehs);
      if (newArr.length > 0) {
        resolve(newArr);
      } else {
        reject(new Error("Elemen array tidak memenuhi treshold"));
      }
    }, 3000);
  });
};

const addData = (num, arr) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let newArr = arr.map((e) => e + num);
      resolve(newArr);
    }, 2000);
  });
};

// thencatch;
filterData(0, [1, -2, -1, 3, 5])
  .then((result) => {
    addData(1, result).then((result) => {
      console.log(`hasil akhir = ${result}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
