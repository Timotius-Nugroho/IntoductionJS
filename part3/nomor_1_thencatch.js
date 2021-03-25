const cekHarikerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// thencatch
cekHarikerja("senin")
  .then((result) => {
    console.log("hari ini adalah hari kerja");
  })
  .catch((error) => {
    console.log(error);
  });
// penggunaan then disini adalah untuk menghandle fulfilled state-
// ketika variabel cek berisi stirng.
// penggunaan then disini adalah untuk menghandle reject state-
// ketika variabel cek berisi undefined.
