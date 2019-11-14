import React, { Component } from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import { Searchbar, SearchBtn } from '../components/Searchbar/Searchbar';
import { Results, ResultItem } from '../components/Results/Results';
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
            height: '500px',
            flexFlow: 'column wrap',
        }

        return (
            <div style={wrapperStyle}>
                <div style={searchStyle}>
                   <Searchbar
                    name="cardSearch"
                    placeholder="Search for cards" 
                    value={this.state.cardSearch}
                    onChange={this.handleInputChange}
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                            this.handleFormSubmit();
                        }
                    }}
                />
                <SearchBtn
                    onClick={this.handleFormSubmit}
                >
                    Search
                </SearchBtn> 
                </div>
                
                
                    <ResultItem 
                        cards={currentCards}
                    />
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