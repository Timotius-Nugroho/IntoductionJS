// Nomor 1
console.log("\nSoal Nomor 1 \n");
const biodata = {
  name: "Timotius Nugroho",
  age: 21,
  hobies: ["menggambar", "bermain musik", "olahraga"],
  isMaried: false,
  schoolList: [
    {
      name: "SDN Bendungan I",
      yearIn: 2008,
      yearOut: 2013,
      major: null,
    },
    {
      name: "SMP N 11 Purworejo",
      yearIn: 2013,
      yearOut: 2015,
      major: null,
    },
    {
      name: "SMA N 3 Purworejo",
      yearIn: 2015,
      yearOut: 2017,
      major: "MIPA",
    },
    {
      name: "Universitas Negeri Yogyakarta",
      yearIn: 2017,
      yearOut: 2021,
      major: "Fisika",
    },
  ],
  skills: [
    {
      skillName: "Python for embedded system",
      level: "advanced",
    },
    {
      skillName: "OpenCV",
      level: "advanced",
    },
    {
      skillName: "Java Script",
      level: "beginner",
    },
  ],
  interestInCoding: true,
};

console.log(biodata);

// Nomor 2
console.log("\nSoal Nomor 2 \n");
let mtk = 70;
let bahasaIndonesia = 100;
let bahasaInggris = 80;
let ipa = 90;

let tmp = [mtk, bahasaIndonesia, bahasaInggris, ipa];
let ave = 0;

for (let i = 0; i < tmp.length; i++) {
  if (!(tmp[i] <= 100 && tmp[i] >= 0 && ((tmp[i] && 1) == 1 || tmp[i] == 0))) {
    console.log(`data tidak valid, ada yang berisi ${tmp[i]}`);
    ave = null;
    break;
  } else {
    ave += tmp[i] / tmp.length;
  }
}

if (ave) {
  console.log(`Rata-rata = ${ave}`);
  ave >= 90 && ave <= 100
    ? console.log("Grade = A")
    : ave >= 80 && ave <= 89
    ? console.log("Grade = B")
    : ave >= 70 && ave <= 79
    ? console.log("Grade = C")
    : ave >= 60 && ave <= 69
    ? console.log("Grade = D")
    : console.log("Grade = E");
} else {
  console.log("Grade = Undefined");
}

// Nomor 3
console.log("\nSoal Nomor 3 \n");

let printSegitiga = 5;
if (!(printSegitiga && 1 && printSegitiga > 0)) {
  console.log(`data tidak valid, berisi ${printSegitiga}`);
} else if (typeof printSegitiga != "number") {
  console.log("Data harus number");
} else {
  let s = "";
  for (let i = printSegitiga; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      s += j + " ";
    }
    s += "\n";
  }
  console.log(s);
}

// Nomor 4
console.log("\nSoal Nomor 4 \n");

let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  addres: {
    street: "Kukas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegrad.org",
};
let dataSaya = {
  name: "Timotius Nugroho",
  email: "timotiusnugroho999@gmail.com",
  hobby: ["menggambar", "bermain musik", "olahraga"],
};
let newData = { ...data, ...dataSaya }; //Ubah data
console.log(newData);
const { street, city } = newData.addres; //Ambil data
console.log(street);
console.log(city);

a = 2;
b = 3;
