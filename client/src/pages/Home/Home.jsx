import React, {Component} from 'react'

import "./Home.css"

import SearchForm from '../../components/SearchForm';
import Container from '../../components/Container';
import ResultsList from '../../components/ResultsList';
import SelectedResult from '../../components/SelectedResult';

class Home extends Component {
    state = {
        searchResults: [],
        selectedResult: {},
    }

    render() {
        return (
            <div className="Home">
                <SearchForm className="SearchForm" />
                <Container className="Container">
                    <ResultsList
                        results={this.state.searchResults} 
                        selected={this.state.selectedResult}
                    />
                    <SelectedResult />
                </Container>
            </div>
        )
    }
}

export default Home;