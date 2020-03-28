import React from 'react';
import './App.css';
import Form from './components/Form'
import PeopleComponent from './components/People';
import axios from 'axios';
import narutoImage from './assets/naruto_movie-lionsgate.jpg';

const BASE_URL = "https://swapi.co/api/";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [
        {
            name:"Angel",
            age:"21",
            favoriteFood:"pizza"
        },
        {
          name: "teresa",
          age: "don't ask a woman her age",
          favoriteFood: "bacon cheeseburger"
        },
        {
          name: "Jiaxi",
          age: "25",
          favoriteFood: "Ramen"
        }
      ],
    }
  }

  //if I want to change state here this.setState(object);
  componentDidMount() {
    axios.get(`$(BASE_URL)people1`);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form
          />
          <PeopleComponent
            people={ this.state.people }
          />
          <img src={ narutoImage } />
        </header>
      </div>
    );
  }
}

export default App;
