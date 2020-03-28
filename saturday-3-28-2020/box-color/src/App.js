import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfTimesClicked: 0,
      colors: ["#FF5733", "#42BB7F", "#B242BB", "#97A2D5", "#D597A3"],
    }
    this.incrementClicks = this.incrementClicks.bind(this);
  }

  componentDidMount() {
    const boxes = document.getElementsByClassName('box');
    console.log(boxes, 'boxes');
    // box is red on even number on load
    // why?
    // becuase the thing that checks whether numtimesclicked is even or not
    // is invoked by a onlick function
    // fix?
    // check if num is even onload
    let string = 'green';
    if('green' = false) {
      console.log('that was a falsy value')
    } else {
      console.log('that was a truthy value');
    }
  }

  incrementClicks(e) {
    e.preventDefault();
    this.setState({ numberOfTimesClicked: this.state.numberOfTimesClicked + 1 });
    const randomNum = Math.floor(Math.random() * this.state.colors.length);
    const boxes = document.getElementsByClassName('box');
    boxes[0].style.backgroundColor = this.state.colors[randomNum];

    // switch between 2 things => think true/false.
    // function toggleColor() {
    //   if(currentNum % 2 === 0) {
    //     document.getElementsByClassName('box')[0].style.backgroundColor = "blue";
    //   } else {
    //     document.getElementsByClassName('box')[0].style.backgroundColor = "red";
    //   }
    // }
    // toggleColor();
  }

  render() {
    return (
      <div className="App">
        <h1>How many times you clicked: { this.state.numberOfTimesClicked }</h1>
        <div className="box" onClick={ this.incrementClicks }></div>
      </div>
    );
  }
}

export default App;
