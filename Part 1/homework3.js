const printSegitiga = (num) => {
  if (typeof num !== "number") {
    console.log("Data Harus Number !");
  }
  let hasil = "";
  for (let i = 0; i < num; i++) {
    for (let j = num; j > i; j--) {
      hasil += num - j + 1;
    }
    hasil += "\n";
  }
  console.log(hasil);
};

printSegitiga(6);
