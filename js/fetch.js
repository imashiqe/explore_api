fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json()) //.json is  not similer but close to JSON .parse
  .then(json => console.log(json))

