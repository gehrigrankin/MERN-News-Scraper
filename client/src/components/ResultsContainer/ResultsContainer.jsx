import React from 'react';

import "./ResultsContainer.css"

import ResultsList from '../../components/ResultsList';
import SelectedResult from '../../components/SelectedResult';

const ResultsContainer = (props) => {
    return (
        <div className="ResultsContainer">
            <ResultsList
                results={props.results} 
                selected={props.selectedResult}
                topic={props.topic}
                timeRange={props.timeRange}
            />
            <SelectedResult />
        </div>
    )
}

export default ResultsContainer;