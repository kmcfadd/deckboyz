import React, { Component } from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import { Searchbar, SearchBtn } from '../components/Searchbar/Searchbar';
import { Results, ResultItem } from '../components/Results/Results';
import API from '../utils/API';

class Deckbuilder extends Component {
    state = {
        cards: [],
        cardSearch: "",
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
        return (
            <Wrapper>
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
                <Results>
                    {this.state.cards.map(card => {
                        return (
                            <ResultItem
                                key={card._id}
                                name={card.name}
                                number={card.number}
                                manaCost={card.manaCost}
                                type={card.type}
                                set={card.set}
                                text={card.text}
                            />
                        )
                    })}
                </Results>   
                {/* <Sidebar>
                    ugh
                </Sidebar> */}
            </Wrapper>
    )
}
    
}

export default Deckbuilder;