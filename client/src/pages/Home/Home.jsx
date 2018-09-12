import React, {Component} from 'react'

import "./Home.css"

import API from "../../utils/API";

import SearchForm from '../../components/SearchForm';
import Container from '../../components/Container';
import ResultsContainer from '../../components/ResultsContainer';
// import SearchFilter from '../../components/SearchFilter';

class Home extends Component {
    state = {
        searchResults: [
            {
                topic: "Most Popular",
                author: "Gehrig Rankin",
                title: "Title of this article",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque nulla quas eos inventore atque, totam vitae ipsam accusantium, sequi laudantium maxime perferendis, veritatis quis. Labore expedita dolores harum veniam eos ipsum a aut voluptate consequuntur deserunt officia minima nisi, eius eveniet perspiciatis! Necessitatibus animi adipisci, consectetur, eius eligendi officia porro magni excepturi, nam vel eveniet dolor aliquam enim soluta? Consectetur dolore nam eum omnis ipsam, officia inventore qui, neque totam laborum maiores voluptate labore possimus quod recusandae aperiam ratione impedit non commodi modi numquam atque! Perspiciatis, ipsam ad, dolorem inventore commodi ab fuga impedit recusandae velit, reprehenderit tempore adipisci!",
                date: "07/22/1998"
            },
            {
                topic: "Most Popular",
                author: "Lizzy Richardson",
                title: "Another article title",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque nulla quas eos inventore atque, totam vitae ipsam accusantium, sequi laudantium maxime perferendis, veritatis quis. Labore expedita dolores harum veniam eos ipsum a aut voluptate consequuntur deserunt officia minima nisi, eius eveniet perspiciatis! Necessitatibus animi adipisci, consectetur, eius eligendi officia porro magni excepturi, nam vel eveniet dolor aliquam enim soluta? Consectetur dolore nam eum omnis ipsam, officia inventore qui, neque totam laborum maiores voluptate labore possimus quod recusandae aperiam ratione impedit non commodi modi numquam atque! Perspiciatis, ipsam ad, dolorem inventore commodi ab fuga impedit recusandae velit, reprehenderit tempore adipisci!",
                date: "07/22/1923"
            },
            {
                topic: "Most Popular",
                author: "Gehrig Rankin",
                title: "Title of this article",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque nulla quas eos inventore atque, totam vitae ipsam accusantium, sequi laudantium maxime perferendis, veritatis quis. Labore expedita dolores harum veniam eos ipsum a aut voluptate consequuntur deserunt officia minima nisi, eius eveniet perspiciatis! Necessitatibus animi adipisci, consectetur, eius eligendi officia porro magni excepturi, nam vel eveniet dolor aliquam enim soluta? Consectetur dolore nam eum omnis ipsam, officia inventore qui, neque totam laborum maiores voluptate labore possimus quod recusandae aperiam ratione impedit non commodi modi numquam atque! Perspiciatis, ipsam ad, dolorem inventore commodi ab fuga impedit recusandae velit, reprehenderit tempore adipisci!",
                date: "07/22/1998"
            },
            {
                topic: "Most Popular",
                author: "Lizzy Richardson",
                title: "Another article title",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque nulla quas eos inventore atque, totam vitae ipsam accusantium, sequi laudantium maxime perferendis, veritatis quis. Labore expedita dolores harum veniam eos ipsum a aut voluptate consequuntur deserunt officia minima nisi, eius eveniet perspiciatis! Necessitatibus animi adipisci, consectetur, eius eligendi officia porro magni excepturi, nam vel eveniet dolor aliquam enim soluta? Consectetur dolore nam eum omnis ipsam, officia inventore qui, neque totam laborum maiores voluptate labore possimus quod recusandae aperiam ratione impedit non commodi modi numquam atque! Perspiciatis, ipsam ad, dolorem inventore commodi ab fuga impedit recusandae velit, reprehenderit tempore adipisci!",
                date: "07/22/1923"
            },
            {
                topic: "Most Popular",
                author: "Gehrig Rankin",
                title: "Title of this article",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque nulla quas eos inventore atque, totam vitae ipsam accusantium, sequi laudantium maxime perferendis, veritatis quis. Labore expedita dolores harum veniam eos ipsum a aut voluptate consequuntur deserunt officia minima nisi, eius eveniet perspiciatis! Necessitatibus animi adipisci, consectetur, eius eligendi officia porro magni excepturi, nam vel eveniet dolor aliquam enim soluta? Consectetur dolore nam eum omnis ipsam, officia inventore qui, neque totam laborum maiores voluptate labore possimus quod recusandae aperiam ratione impedit non commodi modi numquam atque! Perspiciatis, ipsam ad, dolorem inventore commodi ab fuga impedit recusandae velit, reprehenderit tempore adipisci!",
                date: "07/22/1998"
            },
            {
                topic: "Most Popular",
                author: "Lizzy Richardson",
                title: "Another article title",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque nulla quas eos inventore atque, totam vitae ipsam accusantium, sequi laudantium maxime perferendis, veritatis quis. Labore expedita dolores harum veniam eos ipsum a aut voluptate consequuntur deserunt officia minima nisi, eius eveniet perspiciatis! Necessitatibus animi adipisci, consectetur, eius eligendi officia porro magni excepturi, nam vel eveniet dolor aliquam enim soluta? Consectetur dolore nam eum omnis ipsam, officia inventore qui, neque totam laborum maiores voluptate labore possimus quod recusandae aperiam ratione impedit non commodi modi numquam atque! Perspiciatis, ipsam ad, dolorem inventore commodi ab fuga impedit recusandae velit, reprehenderit tempore adipisci!",
                date: "07/22/1923"
            },
            {
                topic: "Most Popular",
                author: "Gehrig Rankin",
                title: "Title of this article",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque nulla quas eos inventore atque, totam vitae ipsam accusantium, sequi laudantium maxime perferendis, veritatis quis. Labore expedita dolores harum veniam eos ipsum a aut voluptate consequuntur deserunt officia minima nisi, eius eveniet perspiciatis! Necessitatibus animi adipisci, consectetur, eius eligendi officia porro magni excepturi, nam vel eveniet dolor aliquam enim soluta? Consectetur dolore nam eum omnis ipsam, officia inventore qui, neque totam laborum maiores voluptate labore possimus quod recusandae aperiam ratione impedit non commodi modi numquam atque! Perspiciatis, ipsam ad, dolorem inventore commodi ab fuga impedit recusandae velit, reprehenderit tempore adipisci!",
                date: "07/22/1998"
            },
            {
                topic: "Most Popular",
                author: "Lizzy Richardson",
                title: "Another article title",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque nulla quas eos inventore atque, totam vitae ipsam accusantium, sequi laudantium maxime perferendis, veritatis quis. Labore expedita dolores harum veniam eos ipsum a aut voluptate consequuntur deserunt officia minima nisi, eius eveniet perspiciatis! Necessitatibus animi adipisci, consectetur, eius eligendi officia porro magni excepturi, nam vel eveniet dolor aliquam enim soluta? Consectetur dolore nam eum omnis ipsam, officia inventore qui, neque totam laborum maiores voluptate labore possimus quod recusandae aperiam ratione impedit non commodi modi numquam atque! Perspiciatis, ipsam ad, dolorem inventore commodi ab fuga impedit recusandae velit, reprehenderit tempore adipisci!",
                date: "07/22/1923"
            }
        ],
        selectedResult: {},
        filters: {
            searchTopic: "Intern",
            startYear: "1900",
            endYear: "1920"
        }
    }

    componentDidMount() {
    }

    getArticles = () => {
        API.getArticles({
            q: this.state.filters.searchTopic,
            start_year: this.state.filters.startYear,
            end_year: this.state.filters.endYear
        })
            .then(res => {
                console.log("RES", res);
                this.setState(() => ({
                    searchResults: res.data   
                }))
            })
            .catch(err => console.log(err));
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getArticles();
        console.log("i made it")
    };

    render() {
        return (
            <div className="Home">
                <SearchForm 
                    className="SearchForm" 
                    submit={this.handleFormSubmit}
                />
                <Container className="Container">
                    {/* <SearchFilter /> */}
                    <ResultsContainer 
                        results={this.state.searchResults}
                        selected={this.state.selectedResult}
                        topic={this.state.filters.searchTopic}
                        timeRange={this.state.filters.timeRange}
                    />
                </Container>
            </div>
        )
    }
}

export default Home;

