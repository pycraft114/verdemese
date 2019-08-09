import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Radium, { StyleRoot } from 'radium';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {
  
  state = {
    persons: [
      {id:'sdadd1', name: 'Verde', age: 24 },
      {id:'asdda2', name: 'Kermit', age: 25 },
      {id:'dsaas3', name: 'mese', age: 24}
    ],
    otherState: "some other state",
    showPersons: true
  }

  changeNamecardHandler = ( event, id ) => {
    const inputValue = event.target.value;
    const personsCopied = [...this.state.persons];

    personsCopied.map( person => {
      if ( person.id === id ) {
        person.name = inputValue;
        this.setState({ persons : personsCopied});
      }
    })
  }

  toggleNamecard = async () => {
    const doesShow = this.state.showPersons;
    
    //setState가 비동기임을 확인하기 위해서
    await this.setState({ showPersons : !doesShow });
    
    console.log(this.state.showPersons);
  }

  removeNamecardHandler = (index) => {
    const personCopied = [...this.state.persons];
    personCopied.splice(index, 1);
    this.setState({
      persons: personCopied
    }); 
  }

  render() {

    const buttonStyle = {
      padding : '10px',
      color: 'white',
      backgroundColor: 'blue',
      boxShadow: 'none',
      outline: 'none',
      ':hover': {
        backgroundColor: 'lightblue'
      }
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
      <div>
        <Persons 
        persons={this.state.persons} 
        clicked={this.removeNamecardHandler}
        changed={this.changeNamecardHandler}></Persons>
      </div>
      );

      buttonStyle.backgroundColor = 'green';
      buttonStyle[':hover'].backgroundColor = 'lightgreen';
    }

    let classes = [] 
    if ( this.state.persons.length <= 2 ) {
      classes.push('red');
    }
    
    if ( this.state.persons.length <= 1 ) {
      classes.push('bold');
    }


    return (
      <StyleRoot>
        <div className="wrapper">
          <h1>React application for practice</h1>
          <p className={classes.join(' ')}>this is really working!</p>
          <input style={buttonStyle} type="button" onClick=   {this.toggleNamecard} value="toggle person"/>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
