import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  componentDidMount() {
    this.characterApiCall();
    this.allPromises();
  }
  async characterApiCall() {
    try {
      const res = await axios.get('http://anapioficeandfire.com/api/characters/16');
      console.log(res, 'from single api call');
    } catch(e) {
      console.error(e)
    }
  }
  allPromises() {
    const promise1 = axios.get('http://www.anapioficeandfire.com/api/houses/362')
    const promise2 = axios.get('http://www.anapioficeandfire.com/api/characters/232');
    const promise3 = axios.get('http://www.anapioficeandfire.com/api/houses/17');

    const allPromises = [promise1, promise2, promise3];

    Promise.all(allPromises).then(responses => {
      console.log('hello')
      for(let i = 0; i < responses.length; i++) {
        console.log(responses[i].data, 'from array');
      }
    }).catch(e => console.error(e));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    );
  }
}

export default App;
