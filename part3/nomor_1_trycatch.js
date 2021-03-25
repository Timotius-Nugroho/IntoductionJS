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

// trycatch
const tampilPesan = async () => {
  try {
    await cekHarikerja("senin");
    console.log("hari ini adalah hari kerja");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("selesai");
  }
};
tampilPesan();
// penggunaan try dinisi adalah untuk mengantisipasi terjadinya error-
// pada proses dalam bloknya.
// penggunaan catch disini adalah menangkap dan menampilkan error-
// yang terjadi pada blok try.
// penggunaan finally disini untuk manampilkan pesan selesai-
// baik terjadi error atau tidak pada blok try.
