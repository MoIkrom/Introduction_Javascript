fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    response.forEach((el) => {
      console.log(el.name);
    });
  })
  .catch((error) => console.log(error));
