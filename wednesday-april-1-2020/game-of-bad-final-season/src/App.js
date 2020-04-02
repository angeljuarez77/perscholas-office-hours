import React from 'react';
import './App.css';
import axios from 'axios';
// import Houses from './components/Houses.js';
// import Character from './components/Character.js';
import HouseStarkFounder from './components/HouseStarkFounder.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterData: null,
      houses: null,
      starkHouse: null,
      starkFounder: null,
    };
  }

  async getHouseFounder() {
    try {
      const house = await axios.get('http://www.anapioficeandfire.com/api/houses/362');
      // this.setState({ starkHouse: house.data });
      // house.data.founder === link === string
      const founder = await axios.get(house.data.founder);
      this.setState({ starkFounder: founder.data })
    } catch(e) {
      console.error(e);
    }
  }

  async getHouses() {
    // try == succeed
    // catch() == fails
    try {
      const whatever = await axios.get('https://www.anapioficeandfire.com/api/houses');
      // with axios everyting is inside of .data property
      // info of houses is inside name.data
      this.setState({ houses: whatever.data });
    } catch(e) {
      console.error(e);
    }
  }

  johnSnow() {
    axios.get('https://anapioficeandfire.com/api/characters/583')
      .then( res => this.setState({ characterData: res.data })).catch(e => console.error(e))
    // .then() runs whatever function you put inside of it
    // IF the API call was successful
    // .catch() run whatever function you put inside of it
    // IF the API call was NOT successful
  }

  componentDidMount() {
    this.johnSnow();
    this.getHouses();
    this.getHouseFounder();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HouseStarkFounder info={ this.state.starkFounder } />
        </header>
      </div>
    );
  }
}

export default App;
