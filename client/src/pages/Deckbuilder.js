import React, { Component } from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import { Searchbar, SearchBtn } from '../components/Searchbar/Searchbar';
import { ResultItem } from '../components/Results/Results';
import API from '../utils/API';
import Pagination from '../components/Pagination/Pagination';

class Deckbuilder extends Component {
    state = {
        cards: [],
        cardSearch: "",
        currentPage: 1,
        cardsPerPage: 5,
    }

    // componentDidMount() {
    //     this.loadCards();
    // }

    // loadCard = id => {
    //     API.getCard(id)
    //         .then(res => 
    //             this.setState({
    //             cards: res.data
    //         })) 
    //             .catch(err => console.log(err));
    // };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleEnterPress = event => {
        if(event.key === 'Enter') {
            event.preventDefault();
            API.getCard(this.state.cardSearch)
            .then(res => 
                this.setState({ cards: res.data }))
            .catch(err => console.log(err))
        }
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getCard(this.state.cardSearch)
            .then(res => 
                this.setState({ cards: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        const { cards, currentPage, cardsPerPage } = this.state;

        const indexOfLastCard = currentPage * cardsPerPage;
        const indexOfFirstCard = indexOfLastCard - cardsPerPage;
        const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

        const paginate = pageNumber => this.setState({currentPage: pageNumber})

        const searchStyle = {
            display: 'flex',    
        }

        const wrapperStyle = {
            display: 'flex',
            width: '90%',
            height: '75%',
            flexFlow: 'column wrap',
        }

        const errorStyle = {
            margin: '10px',
            padding: '10px',
            border: '1px solid black',
            height: '75%',
            width: '75%',
        }

        return (
            <div style={wrapperStyle}>
                <div style={searchStyle}>
                   <Searchbar
                    name="cardSearch"
                    placeholder="Search for cards" 
                    value={this.state.cardSearch}
                    onChange={this.handleInputChange}
                    onKeyPress={this.handleEnterPress}
                />
                <SearchBtn
                    onClick={this.handleFormSubmit}
                >
                    Search
                </SearchBtn> 
                </div>
                
                {cards.length === 0 ? <h3 style={errorStyle}>No Results found</h3> :
                    <ResultItem 
                        cards={currentCards}
                /> }
                    <Pagination 
                        cardsPerPage={cardsPerPage}
                        totalCards={cards.length}
                        paginate={paginate} />   
                
                
                {/* <Sidebar>
                    ugh
                </Sidebar> */}
            </div>
    )
}
    
}

export default Deckbuilder;