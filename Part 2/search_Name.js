const searchName = (keyword, limit, cb) => {
  // validasi
  if (typeof keyword !== "string" || typeof limit !== "number") return "Input yang Anda masukkan salah ! ";

  // Proses Looping
  const names = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];
  const newArray = [];

  for (let i = 0; i < names.length; i++) {
    if (cb(keyword, names[i])) {
      newArray.push(names[i]);
    }
  }
  if (newArray.length > 0) return newArray.slice(0, limit);
  else return "Kata Tidak Ditemukan !";
};

const keywordCb = (keyword, names) => {
  let isFound = false;
  for (let i = 0; i < names.length; i++) {
    if (keyword.toLowerCase() === names.slice(i, i + keyword.length).toLowerCase()) {
      isFound = true;
      break;
    }
  }
  return isFound;
};
console.log(searchName("an", 3, keywordCb)); // output  : [ 'Alexandra', 'Amanda', 'Angela' ]
// console.log(searchName("an", 2, keywordCb)); // output  : [ 'Alexandra', 'Amanda' ]
// console.log(searchName("an", 4, keywordCb)); // output  : [ 'Alexandra', 'Amanda', 'Angela', 'Diana' ]
// console.log(searchName(3, 3, keywordCb)); // output  : Input yang Anda masukkan salah !
// console.log(searchName("an", "tiga", keywordCb)); // output  : Input yang Anda masukkan salah !
// console.log(searchName("andi", 3, keywordCb)); // output  : "Kata Tidak Ditemukan !"
