//2. Buat program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan method map

const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ["januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember"];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry data not found !"), []);
    }
  }, 100);
};

const showMonth = (error, month) => {
  if (error) {
    console.log(error.message);
    return;
  }
  console.log("\nNama - nama Bulan :");
  month.map((getMonth) => {
    console.log("- " + getMonth);
  });
};

getMonth(showMonth);
