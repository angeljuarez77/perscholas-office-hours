import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      clearId: null
    };

    this.timer = this.timer.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }
// Allows the user to press a button "Start" to start the stopwatch
// While the stopwatch is started, the incrementing time should be displayed
// Allows the user to press a button "Pause" to pause the stopwatch at the current time
// Re-clicking the "Pause" button should resume the stopwatch
// Allows the user to press a button "Reset" to stop the stopwatch and reset the time to 0
  // I am going to use state to keep track of time

  // I have to attach this onclick function to something
  // form -> onclick
  // Onclick function -> look which button I chose. -> if button chosen === 'start'-> startfunction
  timer(e) {
    e.preventDefault();
    const buttonClicked = e.target.id;
    if(buttonClicked === 'start') {
      let id = setInterval(this.startTimer, 1000);
      this.setState({ clearId: id });
    } else if(buttonClicked === 'reset') {
      this.setState({ time: 0 });
    } else if(buttonClicked === 'pause') {
      clearInterval(this.state.clearId);
    }
  }

  // start function -> when button click I have to increase seconds/time
                      // how do i increase time.
                      // setInterval() to be invoked onclick
  startTimer() {
    // set interval should add 1 every second to time.
    // time is in state so
    // update like setState({ time: this.state.time + 1 });
      this.setState({ time: this.state.time + 1 });
  }

  render() {
   return (
     <div className="App">
       <header className="App-header">
         <h1>{ this.state.time }</h1>
         <form onClick={ this.timer }>
          <button id="start">Start</button>
          <button id="pause">Pause</button>
          <button id="reset">Reset</button>
         </form>
       </header>
     </div>
   );
  }
}

export default App;
