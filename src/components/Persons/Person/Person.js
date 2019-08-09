import React from 'react';
import './Person.css';
import Radium from 'radium'

const person = (props) => {
    const style = {
        border: '2px solid #ccc',
        boxShadow: '2px 2px 5px rgb(0, 0, 0, 0.4)',
        width: '400px',
        textAlign: 'center',
        margin: '30px auto',
        padding: '20px',
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