import React, { Component } from 'react';
import API from '../utils/API';
import Wrapper from '../components/Wrapper/Wrapper';

class Decks extends Component {
    state = {
        decks: [],
    }

    componentDidMount () {
        API.getDecks()
            .then(res => {
                this.setState({ decks: res.data })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Wrapper>
                <ul>
                    {this.state.decks.map(deck => (
                        <li style={{listStyleType: 'none'}}>
                            <strong>{deck.deckName} by {deck.createdBy}</strong><br />
                            <i>Submitted {deck.createdOn}</i> {/* need to format this with moment or something */}
                            <li style={{listStyleType: 'none'}}>
                                {deck.deck.map(card => (
                                    <p>{card.name} x {card.copies}</p>
                                ))}
                            </li>
                        </li>
                ))}
                </ul> 
            </Wrapper>
        )
    }   
}

export default Decks;