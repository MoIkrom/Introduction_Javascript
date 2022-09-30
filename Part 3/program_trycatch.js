// Program 1

// const menuMakanan = (makanan) => {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       const menuMakanan = ["Ayam Goreng", "Ayam Penyet", "Ayam Gulai", "Ayam Rendang", "Ayam Geprek"];
//       let cek = menuMakanan.find((item) => {
//         return item === makanan;
//       });
//       if (cek) {
//         resolve(cek);
//       } else {
//         rejects(new Error("Menu tidak tersedia"));
//       }
//     }, 2000);
//   });
// };

// // Then & Catch
// menuMakanan("Ayam Gulai")
//   .then((response) => {
//     console.log("Menu " + response + " Masih Tersedia");
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

//.

// // // program ke 2
const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //validasi
      if (typeof (nilaiAwal && nilaiAkhir) !== "number") return reject(new Error("Input harus berupa number"));
      if (nilaiAwal > nilaiAkhir) return reject(new Error("Nilai Akhir harus lebih besar dari Nilai Awal"));
      if (dataArray.length < 5) return reject(new Error("Jumlah angka dalam data array harus lebih dari 5"));

      //   proses
      let newArray = dataArray.sort((a, b) => a - b).filter((e) => e >= nilaiAwal && e <= nilaiAkhir);

      if (newArray.length > 0) return resolve(newArray);
      return reject(new Error("Nilai Tidak Ditemukan !"));
    }, 1000);
  });
};

// //  Try & Catch
async function totalNilai(nilaiAwal, nilaiAkhir, dataArray) {
  try {
    console.log(await seleksiNilai(nilaiAwal, nilaiAkhir, dataArray));
  } catch (error) {
    console.log(error.message);
  }
}

totalNilai(31, 19, [2, 25, 4, 14, 17, 30, 8]);
