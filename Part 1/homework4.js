let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

// spread Operator
// const editedData = {
//   ...data,
//   name: "Muhammad Ikram",
//   email: "ikram123@gmail.com",
//   hobby: ["Football", "Swimming", "Badminton"],
// };
// console.log(editedData);

// Destructuring

const { street, city } = data.address;

console.log(street);
console.log(city);
