let SeleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
    var newData = dataArray
      .filter((num) => {
        return num > nilaiAwal && num < nilaiAkhir;
      })
      .sort((a, b) => a - b);
    newData.length == 0
      ? console.log("Jumlah angka dalam dataArray tidak ada")
      : "";
  } else {
    nilaiAwal > nilaiAkhir
      ? console.log("Nilai akhir harus lebih besar dari nilai awal")
      : console.log("jumlah data dalam dataArray harus lebih dari 5");
  }
  return newData;
};

console.log(SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
