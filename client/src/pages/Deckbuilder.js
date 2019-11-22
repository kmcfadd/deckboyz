import React, { Component } from 'react';
// import Wrapper from '../components/Wrapper/Wrapper';
import { Searchbar, SearchBtn } from '../components/Searchbar/Searchbar';
// import { ResultItem } from '../components/Results/Results';
import API from '../utils/API';
import Pagination from '../components/Pagination/Pagination';
import Navbar from '../components/Navbar/navbar'
import '../components/Results/Results.css'

class Deckbuilder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [],
            cardSearch: "",
            currentPage: 1,
            cardsPerPage: 5,
            currentDeck: [],
            currentDeckName: "",
            currentTotalCards: 0,
        }
        this.handleCardSearch = this.handleCardSearch.bind(this);
        this.removeCard = this.removeCard.bind(this);
        this.handleTotalCards = this.handleTotalCards.bind(this);
    }

    handleTotalCards = () => {
        const cards = [...this.state.currentDeck]
        let totalArr = cards.map(card => {
            return card.copies
        })

        let newTotal = totalArr.reduce((a, c) => a + c, 0);

        this.setState({ currentTotalCards: newTotal })
    }

    // tracks state for input forms and manage state
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // allows you to search cards on enter key instead of only clicking the search button
    handleEnterPress = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            API.getCard(this.state.cardSearch)
                .then(res =>
                    this.setState({ cards: res.data }))
                .catch(err => console.log(err))
        }
    }

    // handles the database query to fetch relevant card data
    handleCardSearch = event => {
        event.preventDefault();
        API.getCard(this.state.cardSearch)
            .then(res =>
                this.setState({ cards: res.data }))
            .catch(err => console.log(err))
    }

    // determines if a card already exists in the current deck
    handleCheck = val => {
        return this.state.currentDeck.some(card => val._id === card._id)
    }

    // removes copies of a card and deletes it if there are 0 copies
    removeCard = (card) => {
        const cards = [...this.state.currentDeck]
        const i = cards.indexOf(card)
        if (cards[i].copies > 1) {
            cards[i].copies -= 1
            this.setState({ currentDeck: cards })
        } else if (cards[i].copies <= 1) {
            let filteredCards = cards.filter((_, index) => index !== i)
            this.setState({ currentDeck: filteredCards })
        }
        this.handleTotalCards();
    }

    // allows the increment of copies for any specific card in the current deck
    incrementCard = (card) => {
        // 1. take a copy of state
        const cards = [...this.state.currentDeck];
        const i = cards.indexOf(card)
        cards[i].copies += 1

        this.setState({ currentDeck: cards })
        this.handleTotalCards();
    }

    submitDeck = event => {
        event.preventDefault();
        if (this.state.currentTotalCards >= 60) {
            API.createDeck({
                deckName: this.state.currentDeckName,
                createdBy: "Test User",
                deck: this.state.currentDeck
            })
                .then(res => console.log('inserted'))
                .catch(err => console.log(err))
        } else {
            console.log('we need more deck')
        }
    }

    render() {
        // pagination setup, cuts down the cards searched into chunks to render at a time
        const { cards, currentPage, cardsPerPage } = this.state;

        const indexOfLastCard = currentPage * cardsPerPage;
        const indexOfFirstCard = indexOfLastCard - cardsPerPage;
        const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

        const paginate = pageNumber => this.setState({ currentPage: pageNumber })

        const searchStyle = {
            display: 'flex',
        }

        const wrapperStyle = {
            display: 'flex',
            width: '90%',
            height: '90%',
            flexFlow: 'column wrap',
        }

        const errorStyle = {
            margin: '10px',
            padding: '10px',
            border: '1px solid black',
            height: '75%',
            width: '50%',
        }

        const deckStyle = {
            border: '1px solid black',
            margin: '10px',
            padding: '10px',
            display: 'flex',
            width: '35%',
        }

        const resultWrapper = {
            display: 'flex',
            flexDirection: 'row',

        }

        return (
            <div style={wrapperStyle}>
                <Navbar />
                <div style={searchStyle}>
                    <Searchbar
                        name="cardSearch"
                        placeholder="Search for cards"
                        value={this.state.cardSearch}
                        onChange={this.handleInputChange}
                        onKeyPress={this.handleEnterPress}
                    />
                    <SearchBtn onClick={this.handleCardSearch}>
                        Search
                </SearchBtn>
                </div>
                <div style={resultWrapper}>
                    {cards.length === 0 ? <h3 style={errorStyle}>No Results found</h3> :
                        <ul className="Results">
                            {currentCards.map(card => (
                                <li key={card._id}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        this.handleCheck(card) === false ?
                                            this.setState((prevState) => ({
                                                currentDeck: [...prevState.currentDeck, {
                                                    _id: card._id,
                                                    artist: card.artist,
                                                    colors: card.colors,
                                                    name: card.name,
                                                    manaCost: card.manaCost,
                                                    convertedManaCost: card.convertedManaCost,
                                                    types: card.types,
                                                    type: card.type,
                                                    set: card.set,
                                                    number: card.number,
                                                    power: card.power,
                                                    toughness: card.toughness,
                                                    text: card.text,
                                                    copies: 1
                                                }]
                                            })) && this.handleTotalCards()
                                            : console.log('exists')
                                    }
                                    }
                                    className="ResultItem">
                                    <p className="Name">{card.name} {card.manaCost}</p>
                                    <p className="Type">{card.type} <br /> {card.set} #{card.number}</p>
                                    <p className="Text">{card.text}</p>
                                </li>
                            ))}
                        </ul>
                    }

                    <div style={deckStyle}>
                        <form>
                            <span style={{ whiteSpace: 'nowrap' }}>
                                <label style={{ margin: "5px" }}>{this.state.currentTotalCards}/60</label>
                                <input
                                    value={this.state.currentDeckName}
                                    onChange={this.handleInputChange}
                                    name="currentDeckName"
                                    placeholder="Deck Name"
                                />
                            </span>
                            <ul style={{ width: "100%" }}>
                                {this.state.currentDeck.map(card => (
                                    <li key={card._id}
                                        style={{ listStyleType: 'none', width: '100%' }}
                                    >
                                        <button className="Plus" id="plus" onClick={() => this.incrementCard(card)}>+</button>
                                        <p className="Name">
                                            {card.copies} {card.name} {card.manaCost}
                                        </p>
                                        <button className="Minus" id="minus" onClick={() => this.removeCard(card)}>-</button>
                                    </li>
                                ))}
                            </ul>
                            <SearchBtn style={{ alignSelf: 'flex-end' }} onClick={this.submitDeck}>Submit Deck</SearchBtn>
                        </form>
                    </div>
                </div>
                <Pagination
                    cardsPerPage={cardsPerPage}
                    totalCards={cards.length}
                    paginate={paginate} />

            </div>
        )
    }
}

export default Deckbuilder;