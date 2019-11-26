import React, { Component } from 'react';
import Navbar from '../components/Navbar/navbar'
import Wrapper from '../components/Wrapper/Wrapper';
import API from '../utils/API';
import Garruk from '../components/image/Headofmen.jpg'
import { createReadStream } from 'fs';

class Decks extends Component {
    state = {
        decks: [],
        isBoxVisible: false,
        currentDeckId: "",
        currentDeck: [],
    }



    componentDidMount() {
        API.getDecks()
            .then(res => {
                this.setState({ decks: res.data })
            })
            .catch(err => console.log(err))
    }

    toggleBox = (deck) => {
        console.log(deck)
        let decks = [...this.state.decks]
        const i = decks.indexOf(deck)
        let filteredDeck = decks.filter((_, index) => index === i)
        this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible, currentDeckId: deck._id, currentDeck: filteredDeck }))
    }
    toggleOff = () => {
        this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }))
    }


    render() {
        const { isBoxVisible } = this.state
        const modalStyle = {
            backgroundColor: "white",
            width: "30%",
            height: "100%",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }

        // console.log(this.state.decks)
        return (
            < div >
                <Navbar />
                <div className="hero is-info is-bold">
                    <div className="hero-body">
                        <div className="media">
                            <img className="media-left" src={Garruk} alt="head of men" style={{ width: "100px", borderRadius: "50%" }} />
                            <h1 className="media-content">
                                <strong className="title">Manly Man Garruk Says </strong>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="container is-fluid" style={{ display: "flex", flexFlow: 'row wrap' }}>
                    <Wrapper>
                        <ul className="columns">


                            <div>
                                {this.state.decks.map(deck => (

                                    <li key={deck._id} onClick={() => this.toggleBox(deck)} className="column" style={{ listStyleType: 'none', border: "1px solid black" }}>
                                        <strong>{deck.deckName} by {deck.createdBy}</strong><br />
                                        <i>Submitted {deck.createdOn}</i>
                                        {/*Moment js this sucka */}
                                    </li>

                                ))}



                                {this.state.currentDeck.map(deck => (
                                    <div className={`modal ${isBoxVisible ? "is-active" : " "}`}>
                                        <div className="modal-background" style={{ modalStyle }}></div>
                                        < li className="modal-content" style={{ listStyleType: 'none' }}>
                                            <h1><strong>{deck.deckName}</strong> created by <strong>{deck.createdBy}</strong></h1>
                                            <hr />
                                            {isBoxVisible ? deck.deck.map(card => (
                                                <p>{card.name} X {card.copies}</p>
                                            )) : console.log("box closed")}
                                            <button className="modal-close" onClick={this.toggleOff}></button>


                                        </li>

                                    </div>

                                ))}

                            </div>
                        </ul>





                    </Wrapper>
                </div>
            </div >
        )
    }
}

export default Decks;