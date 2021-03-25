const getmonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "Juni",
      "July",
      "August",
      "September",
      "October",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found", []));
    }
  }, 4000);
};

getmonth((f, m) => {
  if (f == null) {
    m.map((e) => console.log(e));
  } else {
    console.log(f);
  }
});
