import React from 'react';

import './Result.css'

const Result = (props) => {
    let desc = props.description ? 
        props.description.substring(0,100) + "..." : null;

    return (
        <div className="Result" onClick={props.handleSelected}>
            <p className="title is-5">
                {props.title}

                <span className="time">
                    - {props.date}
                </span>
            </p>

            <p className="description">{desc}</p>
        </div>
    )
}

export default Result;