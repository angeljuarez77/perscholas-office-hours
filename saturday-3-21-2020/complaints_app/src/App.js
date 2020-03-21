import React from 'react';
import './App.css';
import axios from 'axios';
// use 311 api
// filter by borough && NYPD only
// how did police respond
// Made a form that takes number of requests wanted
// When I click a button it returns a borough
// I stored both values somewhere
// Now I have to use them to compose a url
// we have ours BASE_URL
// format goes = ?borough=TEXTINPUT&agency=NYPD
// BASE_URL + ?borough=TEXTINPUT&agency=NYPD
// And we need to put our limit somewhere. But I don't konw where

const BASE_URL = 'https://data.cityofnewyork.us/resource/erm2-nwe9.json'
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      borough: '',
      limit: '',
    };
    this.changeForm = this.changeForm.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  async buttonClicked(e) {
    e.preventDefault();
    this.setState({ borough: e.target.value })
    const res = await axios.get(`${BASE_URL}?borough=${e.target.value}&agency=NYPD&$limit=${this.state.limit}`);
    console.log(res.data);
  }

  changeForm(e) {
    const { value } = e.target;
    this.setState({ limit: value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onClick={this.buttonClicked} onChange={this.changeForm}>
            <input type="text" />
            <button value="BRONX">The Bronx</button>
            <button value="QUEENS">Queens</button>
            <button value="BROOKLYN">Brooklyn</button>
            <button value="STATEN%20ISLAND">Staten Island</button>
            <button value="MANHATTAN">Manhattan</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
