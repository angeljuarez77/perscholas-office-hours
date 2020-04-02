import React from 'react';

function HouseStarkFounder(props) {
  function nullCheck() {
    if(props.info === null) {
      return "nothing";
    }

    return props.info;
  }

  return(
    <div>
      <h1>{ nullCheck().name }</h1>
    </div>
  );
};

export default HouseStarkFounder;
