import React from 'react';

import './Field.css';

const Field = (props, {children}) => {
    let mainDiv = "Field";
    
    if (props.classProp) {
        mainDiv += ` ${props.classProp}`
    }

    return (
        <div className={mainDiv}>
            {children}
        </div>
    )
}

export default Field;