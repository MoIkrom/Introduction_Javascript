fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    const names = response.map((el) => console.log(el.name));
    console.log(names);
  })
  .catch((error) => console.log(error));
