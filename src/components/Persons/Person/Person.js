import React from 'react';
import './Person.css';
import Radium from 'radium'

const person = (props) => {
    const style = {
        '@media (max-width: 700px)': {
            backgroundColor: 'lightblue'
        }
    }

    return (
        <div className="persons" style={style}>
            <p onClick={props.click} >My name is {props.name} </p>
            <p>And I'm {props.age} years old </p>
            <input type="text" onChange={props.change} />
        </div>
    )
}

export default Radium(person);