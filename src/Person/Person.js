import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="person" onClick={props.click}>
            <p>My name is {props.name} </p>
            <p>And I'm {props.age} years old </p>
            <input type="text" onChange={props.change} />
        </div>
    )
}

export default person;