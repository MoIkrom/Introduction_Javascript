// 1. slice()
// merupakan method array di JavaScript yang berfungsi menyalin sebagian elemen array ke array baru.
//  Elemen yang ingin disalin ditentukan menggunakan indeks, indeks awal dan akhir. Method ini tidak mengubah array asli.

const hewan = ["kucing", "bebek", "ayam", "kambing", "semut"];

const hewanBaru = hewan.slice(1, 4);

console.log(hewanBaru); // [ 'bebek', 'ayam', 'kambing' ]

console.log("=====================");

// 2. find ()
// find () ,  merupakan method array di JavaScript yang berfungsi untuk mencari elemen tertentu dalam array yang sesuai dengan fungsi pengujian yang disediakan.
// Dengan method ini Anda bisa mencari satu elemen tertentu di dalam array berdasarkan kriteria yang ditentukan.
// Jika ada lebih dari satu elemen yang sesuai dengan kriteria, maka elemen pertama yang akan digunakan.
// Jika tidak ada elemen yang sesuai, method ini mengembalikan nilai undefined.

const values = [1, 2, 3, 4, 5, 6];

const value = values.find((elemen) => elemen < 5);

console.log(value); // 1

console.log("=====================");

// 3. includes ()
// includes (), merupakan method array yang berfungsi untuk mengetahui apakah sebauh array mengandung nilai tertentu atau tidak, mengembalikan nilai true jika ya atau false jika tidak.
// Dengan menggunakan method ini kita tidak perlu melakukan perulangan secara manual untuk mengecek setiap elemen array.

const buah = ["mangga", "pisang", "apel"];

const adaApel = buah.includes("apel");
const adaAnggur = buah.includes("anggur");

console.log(adaApel); // true
console.log(adaAnggur); // false

console.log("=====================");
// 4. pop()
// pop() merupakan method array di JavaScript yang berfungsi untuk menghapus elemen terakhir dari array.
// Method ini mengubah panjang array dan mengembalikan elemen yang dihapus.

const mahasiswa = ["budi", "bambang", "ucup"];

const mahasiswaDihapus = mahasiswa.pop();

console.log(mahasiswa); // [ 'budi', 'bambang' ]
console.log(mahasiswaDihapus); // ucup

console.log("=====================");
// 5.forEach()
// forEach(), merupakan method array di JavaScript yang mengeksekusi fungsi yang disediakan sekali untuk setiap elemen array.
// Method ini mengembalikan nilai undefined dan tidak mengubah array asli, tapi jika dibutuhkan kita bisa memodifikasi array sumber di dalam badan fungsi.
const numbers = [1, 5, 6, 8, 9, 3];

numbers.forEach((elemen, indeks, array) => {
  console.log("elemen:", elemen, "indeks:", indeks, "array:", array);
});
