import React from 'react';

function PeopleComponent(props) {
  return (
    <div>
      {
        props.people.map( person => {
          return (
            <div>
              <h1>{person.name}</h1>
              <h2>{person.age}</h2>
              <h3>{person.favoriteFood}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default PeopleComponent;
