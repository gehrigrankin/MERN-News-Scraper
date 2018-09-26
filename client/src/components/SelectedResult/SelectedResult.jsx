import React from 'react';
import Field from '../Container/Field';

import './SelectedResult.css'

const SelectedResult = (props) => {
    console.log(props.selected);

    const selected = props.selected ? 
    props.selected : "";
        

    return (
        <Field classProp="SelectedResult has-text-left">
            <div className="header">
                <p className="title">{selected.headline}</p>
                <p className="time has-text-right">{selected.time}</p>
            </div>
            <hr/>

            <div className="article">
                {selected.summary}
            </div>
        </Field>
    )
}

export default SelectedResult;