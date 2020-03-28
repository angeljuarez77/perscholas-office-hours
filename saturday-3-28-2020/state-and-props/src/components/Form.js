import React from 'react';

// to make an event function. We have to create a new method in our class function
// we have to bind it inside of the constructor function like so
// this.methodName = this.methodName.bind(this);
// then we attach it to the react elem
// <elem onClick={ this.methodName }></elem>
class Form extends React.Component{
  constructor(props) {
    super(props);

    this.state = { bool: true }
    // we have to bind any event functions. like onClick or onChange
    this.clickedDiv = this.clickedDiv.bind(this);
  }

  clickedDiv() {
    // what is in here run when we click the div
  }

  render() {
    return (
      <form>
        <h2>Hello, {this.props.name}</h2>
        <div onClick={ this.clickedDiv }>a div</div>
      </form>
    )
  }
}

export default Form;
