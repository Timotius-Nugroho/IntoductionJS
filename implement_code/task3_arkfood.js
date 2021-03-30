const getDisc = (price, voc) => {
  if (voc == "ARKAFOOD5") {
    if (price >= 50000) {
      disc = 0.5 * price;
      disc <= 50000 ? "" : (disc = 50000);
      return disc;
    } else {
      return 0;
    }
  } else if (voc == "DITRAKTIRDEMY") {
    if (price >= 25000) {
      disc = 0.6 * price;
      disc <= 30000 ? "" : (disc = 30000);
      return disc;
    } else {
      return 0;
    }
  } else {
    return -1;
  }
};

const getOngkir = (jarak) => {
  if (jarak <= 2) {
    return 5000;
  } else {
    return 5000 + (jarak - 2) * 3000;
  }
};

const arkFood = (harga, voucher, jarak, pajak) => {
  if (
    typeof harga != "number" ||
    typeof voucher != "string" ||
    typeof jarak != "number" ||
    typeof pajak != "boolean"
  ) {
    return "Tipe data salah";
  } else if (harga < 0 || jarak < 0) {
    return "data tipe number harus posistif";
  }
  let potongan = 0;
  let biayaPajak = 0;
  if (voucher != false) {
    potongan = getDisc(harga, voucher);
    if (potongan < 0) {
      return "Voucher salah";
    }
  }
  let biayaAntar = getOngkir(jarak);
  if (pajak) {
    biayaPajak = 0.05 * harga;
  }
  let subTotal = harga - potongan + biayaAntar + biayaPajak;
  return `  Harga       : ${harga}
  Potongan    : ${potongan}
  Biaya Antar : ${biayaAntar}
  Pajak       : ${biayaPajak}
  Sub Total   : ${subTotal}`;
};
console.log(arkFood(75000, "ARKAFOOD5", 5, true));
