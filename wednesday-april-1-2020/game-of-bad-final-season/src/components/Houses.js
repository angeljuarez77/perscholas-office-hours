import React from 'react';

function Houses(props) {
  // arr would be under props.info
  console.log(props.info);
  function nullCheck() {
    if(props.info === null) {
      return [];
    }

    return props.info;
  }
  // props.info is an array
  // I know name and region exist for all houses
  return(
    <div>
      {
        nullCheck().map(house => {
          return (
            <div>
              <h3>{ house.name }</h3>
              <h4>{ house.region }</h4>
            </div>
          )
        })
      }
    </div>
  )
}

export default Houses;
