function add() {
  return 1 + 2;
}

function sevenPlusThree(anotherFunction) {
  return anotherFunction() + 7;
}

// the callback is the function passed as an argument
let number = sevenPlusThree(add);
console.log(number);

// nested function
function outside() {
  console.log('i am from outside function');

  function inside() {
    return 'returned from inside';
  }

  const message = inside(); // 'returned from inside'
  // message = 'returned from inside'
  console.log(message);
  // console.log('returned from inside')
}

// outside();

// asynchronous js and promises
$.ajax({
  url: 'https://swapi.co/api/people/1',
});

let promise = $.ajax({
  url: 'https://swapi.co/api/people/1',
});
// this looks like it should run first but it doesn't
// because it is a promise
promise.then((data) => {
  console.log(data.name); // Luke Skywalker
})
.catch((e) => console.error(e));

// in our browser this console log is shown first
console.log('my console log');
