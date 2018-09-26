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
                id: 0,
                topic: "Most Popular",
                author: "Gehrig Rankin",
                headline: "Title of this article",
                summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque nulla quas eos inventore atque, totam vitae ipsam accusantium, sequi laudantium maxime perferendis, veritatis quis. Labore expedita dolores harum veniam eos ipsum a aut voluptate consequuntur deserunt officia minima nisi, eius eveniet perspiciatis! Necessitatibus animi adipisci, consectetur, eius eligendi officia porro magni excepturi, nam vel eveniet dolor aliquam enim soluta? Consectetur dolore nam eum omnis ipsam, officia inventore qui, neque totam laborum maiores voluptate labore possimus quod recusandae aperiam ratione impedit non commodi modi numquam atque! Perspiciatis, ipsam ad, dolorem inventore commodi ab fuga impedit recusandae velit, reprehenderit tempore adipisci!",
                time: "07/22/1998",
                src: "http://www.facebook.com",
                selected: true
            },
            {
                id: 1,
                topic: "Most Popular",
                author: "Lizzy Richardson",
                headline: "Another article title",
                summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque nulla quas eos inventore atque, totam vitae ipsam accusantium, sequi laudantium maxime perferendis, veritatis quis. Labore expedita dolores harum veniam eos ipsum a aut voluptate consequuntur deserunt officia minima nisi, eius eveniet perspiciatis! Necessitatibus animi adipisci, consectetur, eius eligendi officia porro magni excepturi, nam vel eveniet dolor aliquam enim soluta? Consectetur dolore nam eum omnis ipsam, officia inventore qui, neque totam laborum maiores voluptate labore possimus quod recusandae aperiam ratione impedit non commodi modi numquam atque! Perspiciatis, ipsam ad, dolorem inventore commodi ab fuga impedit recusandae velit, reprehenderit tempore adipisci!",
                time: "07/22/1923",
                src: "http://www.facebook.com",
                selected: false
            },
            {
                id: 2,
                topic: "Most Popular",
                author: "Gehrig Rankin",
                headline: "Title of this article",
                summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque nulla quas eos inventore atque, totam vitae ipsam accusantium, sequi laudantium maxime perferendis, veritatis quis. Labore expedita dolores harum veniam eos ipsum a aut voluptate consequuntur deserunt officia minima nisi, eius eveniet perspiciatis! Necessitatibus animi adipisci, consectetur, eius eligendi officia porro magni excepturi, nam vel eveniet dolor aliquam enim soluta? Consectetur dolore nam eum omnis ipsam, officia inventore qui, neque totam laborum maiores voluptate labore possimus quod recusandae aperiam ratione impedit non commodi modi numquam atque! Perspiciatis, ipsam ad, dolorem inventore commodi ab fuga impedit recusandae velit, reprehenderit tempore adipisci!",
                time: "07/22/1998",
                src: "http://www.facebook.com",
                selected: false
            },
            {
                id: 3,
                topic: "Most Popular",
                author: "Lizzy Richardson",
                headline: "Another article title",
                summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque nulla quas eos inventore atque, totam vitae ipsam accusantium, sequi laudantium maxime perferendis, veritatis quis. Labore expedita dolores harum veniam eos ipsum a aut voluptate consequuntur deserunt officia minima nisi, eius eveniet perspiciatis! Necessitatibus animi adipisci, consectetur, eius eligendi officia porro magni excepturi, nam vel eveniet dolor aliquam enim soluta? Consectetur dolore nam eum omnis ipsam, officia inventore qui, neque totam laborum maiores voluptate labore possimus quod recusandae aperiam ratione impedit non commodi modi numquam atque! Perspiciatis, ipsam ad, dolorem inventore commodi ab fuga impedit recusandae velit, reprehenderit tempore adipisci!",
                time: "07/22/1923",
                src: "http://www.facebook.com",
                selected: false
            },
            {
                id: 4,
                topic: "Most Popular",
                author: "Gehrig Rankin",
                headline: "Title of this article",
                summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque nulla quas eos inventore atque, totam vitae ipsam accusantium, sequi laudantium maxime perferendis, veritatis quis. Labore expedita dolores harum veniam eos ipsum a aut voluptate consequuntur deserunt officia minima nisi, eius eveniet perspiciatis! Necessitatibus animi adipisci, consectetur, eius eligendi officia porro magni excepturi, nam vel eveniet dolor aliquam enim soluta? Consectetur dolore nam eum omnis ipsam, officia inventore qui, neque totam laborum maiores voluptate labore possimus quod recusandae aperiam ratione impedit non commodi modi numquam atque! Perspiciatis, ipsam ad, dolorem inventore commodi ab fuga impedit recusandae velit, reprehenderit tempore adipisci!",
                time: "07/22/1998",
                src: "http://www.facebook.com",
                selected: false
            },
            {
                id: 5,
                topic: "Most Popular",
                author: "Lizzy Richardson",
                headline: "Another article title",
                summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque nulla quas eos inventore atque, totam vitae ipsam accusantium, sequi laudantium maxime perferendis, veritatis quis. Labore expedita dolores harum veniam eos ipsum a aut voluptate consequuntur deserunt officia minima nisi, eius eveniet perspiciatis! Necessitatibus animi adipisci, consectetur, eius eligendi officia porro magni excepturi, nam vel eveniet dolor aliquam enim soluta? Consectetur dolore nam eum omnis ipsam, officia inventore qui, neque totam laborum maiores voluptate labore possimus quod recusandae aperiam ratione impedit non commodi modi numquam atque! Perspiciatis, ipsam ad, dolorem inventore commodi ab fuga impedit recusandae velit, reprehenderit tempore adipisci!",
                time: "07/22/1923",
                src: "http://www.facebook.com",
                selected: false
            },
            {
                id: 6,
                topic: "Most Popular",
                author: "Gehrig Rankin",
                headline: "Title of this article",
                summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque nulla quas eos inventore atque, totam vitae ipsam accusantium, sequi laudantium maxime perferendis, veritatis quis. Labore expedita dolores harum veniam eos ipsum a aut voluptate consequuntur deserunt officia minima nisi, eius eveniet perspiciatis! Necessitatibus animi adipisci, consectetur, eius eligendi officia porro magni excepturi, nam vel eveniet dolor aliquam enim soluta? Consectetur dolore nam eum omnis ipsam, officia inventore qui, neque totam laborum maiores voluptate labore possimus quod recusandae aperiam ratione impedit non commodi modi numquam atque! Perspiciatis, ipsam ad, dolorem inventore commodi ab fuga impedit recusandae velit, reprehenderit tempore adipisci!",
                time: "07/22/1998",
                src: "http://www.facebook.com",
                selected: false
            },
            {
                id: 7,
                topic: "Most Popular",
                author: "Lizzy Richardson",
                headline: "Another article title",
                summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque nulla quas eos inventore atque, totam vitae ipsam accusantium, sequi laudantium maxime perferendis, veritatis quis. Labore expedita dolores harum veniam eos ipsum a aut voluptate consequuntur deserunt officia minima nisi, eius eveniet perspiciatis! Necessitatibus animi adipisci, consectetur, eius eligendi officia porro magni excepturi, nam vel eveniet dolor aliquam enim soluta? Consectetur dolore nam eum omnis ipsam, officia inventore qui, neque totam laborum maiores voluptate labore possimus quod recusandae aperiam ratione impedit non commodi modi numquam atque! Perspiciatis, ipsam ad, dolorem inventore commodi ab fuga impedit recusandae velit, reprehenderit tempore adipisci!",
                time: "07/22/1923",
                src: "http://www.facebook.com",
                selected: false
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
        // this.getArticles();
        const selected = this.state.searchResults.filter(article => {
            return article.selected === true
        }) 

        this.setState({ selectedResult: selected})
    }

    getArticles = () => {
        API.getArticles()
            .then(res => {
                console.log("RES", res.data);
                this.setState({
                    searchResults: res.data   
                })
            })
            .catch(err => console.log(err));
    };

    handleFormSubmit = event => {
        // event.preventDefault();
        // this.getArticles();
        // console.log("i made it")
    };

    handleSelected = (event) => {
        const id = event.target.closest(".Result").dataset.id;
        console.log(id);

        API.getSelectedArticle(id)
            .then(res => {
                console.log("selected RES", res);

                this.setState(() => {
                    return {
                        selectedResult: res.data
                    }
                })
            })
            .catch(err => console.log(err))
    }

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
                        handleSelected={this.handleSelected}
                    />
                </Container>
            </div>
        )
    }
}

export default Home;

