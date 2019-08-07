import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      {id:'sdadd1', name: "Verde", age: 24 },
      {id:'asdda2', name: "Kermit", age: 25 },
      {id:'qwssd3', name: "Mese", age: 23 }
    ],
    
    otherState: "some other state",
    showPersons: false
  }

  changeNamecardHandler = ( event, index ) => {
    const inputValue = event.target.value;
    const personsCopied = [...this.state.persons];
    const indexFromInput = index;

    personsCopied.map((person, index) => {
      if ( index === indexFromInput ) {
        person.name = inputValue;
        this.setState({ persons : personsCopied});
      }
    })
  
  }

  toggleNamecard = () => {

    const doesShow = this.state.showPersons;
    if ( doesShow ) {
      
    }

    this.setState({ showPersons : !doesShow });

  }

  removeNamecardHandler = (index) => {
    const personCopied = [...this.state.persons];
    personCopied.splice(index, 1);
    this.setState({
      persons: personCopied
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
          age={person.age}
          key={person.id}
          change={(event) => this.changeNamecardHandler(event, index)}
          ></Person>
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
