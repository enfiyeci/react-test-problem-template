import React , {useState} from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "click me"
    };

   
  }


  //handler goes here
  handleClick = () => {
    console.log("Button clicked...")
    let buttonText = this.state.buttonText == "click me" ? "thanks" : "click me"
    this.setState({buttonText: buttonText})
}



  render() {
    return (
      <div>
        <p>Greetings!</p>
        <p>Button goes here</p>
        <button onClick={this.handleClick} >{this.state.buttonText}</button>
      </div>
    );
  }
}