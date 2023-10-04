fetch(`https://api.github.com/users/std08010`)
  .then((response) => response.json())
  .then(console.log)
  .catch(console.error);
