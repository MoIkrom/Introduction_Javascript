const nilaiUjian = (mtk, bahasaIndo, bahasaIng, ipa) => {
  // Validasi
  if (typeof (mtk && bahasaIndo && bahasaIng && ipa) !== "number") {
    console.log("Masukkan Angka saja !");
  } else if ((mtk && bahasaIndo && bahasaIng && ipa) <= -1) {
    console.log("Nilai yang Anda Input Salah");
  } else if ((mtk && bahasaIndo && bahasaIng && ipa) > 100) {
    console.log("Nilai yang Anda Input Salah");
  }
  //   Menentukan Grade
  else {
    let average = (mtk + bahasaIndo + bahasaIng + ipa) / 4;
    let grade =
      average >= 90 && average <= 100
        ? "Grade = A"
        : average >= 80 && average < 90
        ? "Grade = B"
        : average >= 70 && average < 80
        ? "Grade = C"
        : average >= 60 && average < 70
        ? "Grade = D"
        : average >= 0 && average < 60
        ? "Grade = E"
        : "Grade dan Nilai Tidak Ada";

    console.log("Rata-rata = " + average);
    console.log(grade);
  }
};

nilaiUjian(100, 90, 89, 100);
