import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="inputWrapper">
            <input type="text" onChange={props.changeName} placeholder="Type your name"/>
            <input type="submit" onClick={props.click} value="check legend"/>
        </div>
    )
}

export default userInput;