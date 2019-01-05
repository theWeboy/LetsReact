import React from 'react'
import './UserOutput.css'

const useroutput = (props) => {
    return (
        <div className="Output">
            <p>This is a paragraph created by {props.username}!</p>
            <p>This is the second paragraph.</p>
        </div>

    );
};

export default useroutput;