import React from 'react'
import './CharComponent.css'

const charcomponent = (props) => {
    return(
        <div className="char" onClick={props.clicked}>
            {props.letter}
        </div>
    )
};

export default charcomponent