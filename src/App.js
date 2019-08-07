import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      { name: "Verde", age: 24 },
      { name: "Kermit", age: 25 },
      { name: "Mese", age: 23 }
    ],
    otherState: "some other state",
    showPersons: false
  }

  toggleNamecard = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons : !doesShow });
  }

  removeNamecardHandler = (index) => {
    const personCopied = [...this.state.persons];
    this.setState({
      persons: personCopied[index]
    }); 
  }

  render() {

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click={() =>  this.removeNamecardHandler(index)} 
          name={person.name}
          age={person.age}></Person>
        })}
      </div>
      );
    }

    return (
      <div className="wrapper">
        <input type="button" onClick={this.toggleNamecard} value="toggle person"/>
        {persons}
      </div>
    );
  }
}

export default App;
