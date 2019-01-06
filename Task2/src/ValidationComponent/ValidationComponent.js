import React from 'react'
import './ValidationComponent.css'

const validation = (props) => {
    let message = "Text is long enough :)";
    if(props.length <= 7){
        message = "Text too short!"
    }
    return(
        <div>
            <p>{message}</p>
        </div>
    )
};


export default validation;