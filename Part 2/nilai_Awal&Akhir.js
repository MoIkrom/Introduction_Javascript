seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  // validasi
  if (typeof (nilaiAwal && nilaiAkhir) !== "number") return "Input harus berupa number";
  else if (nilaiAwal > nilaiAkhir) return "Nilai Akhir harus lebih besar dari Nilai Awal";
  else if (dataArray.length < 5) return "Jumlah angka dalam data array harus lebih dari 5";

  // Proses Looping
  let newArray = [];
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
      newArray.push(dataArray[i]);
      newArray.sort((a, b) => (a > b ? 1 : -1));
    }
  }
  return newArray;
};

console.log(seleksiNilai(3, 19, [2, 25, 4, 14, 17, 30, 8])); // Output :  Berhasil
console.log(seleksiNilai(1, 19, [2, 25, 30, 8])); // Output : "Panjang data array harus lebih dari 5"
console.log(seleksiNilai(23, 19, [4, 14, 17, 30, 8])); // Output : "Nilai Akhir harus lebih besar dari nilai awal"
