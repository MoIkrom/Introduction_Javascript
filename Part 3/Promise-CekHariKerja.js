const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve("Hari " + cek + " adalah Hari Kerja");
      } else {
        reject(new Error("Hari " + day + " bukan Hari Kerja"));
      }
    }, 3000);
  });
};

// Then & Catch
cekHariKerja("senin")
  // cekHariKerja("minggu")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Fungsi dari then dan catch ini sendiri ialah :
// then akan menghandle hasil eksekusi baik itu berhasil maupun gagal
// sedangkan catch akan menghandle bila terdapat error pada kode.

// Try & catch
// async function hariKerja(day) {
//   try {
//     console.log(await cekHariKerja(day));
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// hariKerja("senin");
// hariKerja("minggu");

// Jika kodingan pada try dijalankan dan tidak terdapat error, maka catch akan dihiraukan ( tidak dijalankan )
// Jika terdapat error, maka bagian try akan berhenti berjalan, dan alur prosesnya akan berlanjut pada bagian catch untuk di handle.
