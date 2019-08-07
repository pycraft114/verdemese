import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return(
        <div className="outputWrapper">
            <p>Hello, {props.name}</p>
            <p>This is your legend, {props.legend}</p>
        </div>
    );
}

export default userOutput;