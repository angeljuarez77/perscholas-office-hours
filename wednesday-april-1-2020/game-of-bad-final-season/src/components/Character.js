import React from 'react';

function Character(props) {
  function checkNull() {
    if(props.info === null) {
      return "no data";
    }

    return props.info;
  }

  return (
    <div>
      <h1>Name of Character: { checkNull().name }</h1>
      <h1>Year born: { checkNull().born }</h1>
    </div>
  )
}

export default Character;
