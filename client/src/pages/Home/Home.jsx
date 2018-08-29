import React, {Component} from 'react'

import "./Home.css"

import SearchForm from '../../components/SearchForm';
import Container from '../../components/Container';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <SearchForm />
                <Container>
                    
                </Container>
            </div>
        )
    }
}

export default Home;