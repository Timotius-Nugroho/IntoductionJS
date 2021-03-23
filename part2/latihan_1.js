const b = {
  fN: "A",
  lN: "B",
  full: function () {
    const sN = this.fN + this.lN;
    return sN;
  },
};
console.log(b.full());
