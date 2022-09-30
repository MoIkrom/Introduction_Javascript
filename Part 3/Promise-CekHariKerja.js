const cekHariKerja = (day) => {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek + " adalah Hari Kerja");
      } else {
        rejects(new Error("Hari ini bukan Hari Kerja"));
      }
    }, 3000);
  });
};

// Then & Catch
// cekHariKerja("senin")
//   // cekHariKerja("minggu")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// Fungsi dari then dan catch ini sendiri ialah :
// then akan menghandle hasil eksekusi baik itu berhasil maupun gagal
// sedangkan catch akan menghandle bila terdapat error pada kode.

// Try & catch
async function hariKerja(day) {
  try {
    const sukses = await cekHariKerja(day);
    console.log(sukses);
  } catch (error) {
    console.log(error.message);
  }
}

// hariKerja("senin");
hariKerja("minggu");

// Jika kodingan pada try dijalankan dan tidak terdapat eror, maka catch akan dihiraukan ( tidak dijalankan )
// Jika terdapat eror, maka bagian try akan berhenti berjalan, dan alur prosesnya akan berlanjut pada bagian catch untuk di handle.
