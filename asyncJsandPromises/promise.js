console.log('hello');

// https://swapi.co/api/people/1
const promise = $.ajax({
  url: "https://swapi.co/api/people/1"
});

console.log(promise);

// promise.then(
//   data => {
//     console.log(data);
//   },
//   () => {
//     console.log('bad request');
//   }
// );

console.log('goodbye');
