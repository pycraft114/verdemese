import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  
  state = {
    legends: [ 'Bangalore', 'Bloodhound', 'Caustic', 'Mirage', 'Wraith', 'Octane', 'Watson', 'Lifeline', 'Gibraltor', 'PathFinder' ],
    userName: '',
    legendPicked: ''
  }


  nameChangeHandler = (event) => {
    const userInput = event.target.value;
    this.setState({
      userName: userInput
    });
  }

  clickHandler = () => {
    const legends = this.state.legends;
    const randomNumber = Math.floor(Math.random() * legends.length);
    this.setState({
      legendPicked: legends[randomNumber] 
    });
  }

  render() {
    return (
      <div>
        <UserInput click={this.clickHandler} changeName={this.nameChangeHandler}></UserInput>
        <UserOutput name={this.state.userName} legend={this.state.legendPicked}></UserOutput>
      </div>
    );
  }
}

export default App;
