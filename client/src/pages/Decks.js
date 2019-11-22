import React, { Component } from 'react';
import Navbar from '../components/Navbar/navbar'
import Wrapper from '../components/Wrapper/Wrapper';
import API from '../utils/API';

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
            <div>
                <Navbar />
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
            </div>
        )
    }
}

export default Decks;