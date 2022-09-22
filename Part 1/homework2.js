const mtk = 80;
const bahasaIndo = 90;
const bahasaIng = 89;
const ipa = 69;
const average = (mtk + bahasaIndo + bahasaIng + ipa) / 4;

function nilaiUjian(average) {
  // Validasi
  if ((mtk && bahasaIndo && bahasaIng && ipa) == 0 || (mtk && bahasaIndo && bahasaIng && ipa) === null || (mtk && bahasaIndo && bahasaIng && ipa) === undefined) {
    console.log("Semua Nilai Harus Terisi !");
  }

  //   Menentukan Grade
  else {
    console.log("Rata-rata = " + average);
    // Menggunakan ternary Operator
    let gradeA, gradeB, gradeC, gradeD, gradeE;

    gradeA = average >= 90 && average <= 100 ? "Grade = A" : gradeB;
    gradeB = average >= 80 && average <= 89 ? "Grade = B" : gradeC;
    gradeC = average >= 70 && average <= 79 ? "Grade = C" : gradeD;
    gradeD = average >= 60 && average <= 69 ? "Grade = D" : gradeE;
    gradeE = average >= 0 && average <= 59 ? "Grade = E" : "Grade dan Nilai Tidak Ada";
    console.log(gradeA || gradeB || gradeC || gradeD || gradeE);

    // Menggunakan if & else If Biasa
    // if (average >= 90 && average <= 100) {
    //   console.log("Grade = A");
    // } else if (average >= 80 && average <= 89) {
    //   console.log("Grade = B");
    // } else if (average >= 70 && average <= 79) {
    //   console.log("Grade = C");
    // } else if (average >= 60 && average <= 69) {
    //   console.log("Grade = D");
    // } else if (average >= 0 && average <= 59) {
    //   console.log("Grade = E");
    // }
  }
}

nilaiUjian(average);
