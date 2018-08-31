import React from 'react';

import './Result.css'

const Result = (props) => {
    let desc = props.description.substring(0,100) + "...";

    return (
        <div className="Result">
            <p className="title is-5">{props.title}</p>
            <p className="author">{props.author} - {props.date}</p>

            <p className="description">{desc}</p>
        </div>
    )
}

export default Result;