import React, { Component } from 'react';
import Navbar from '../components/Navbar/navbar'
import Wrapper from '../components/Wrapper/Wrapper';
import API from '../utils/API';
import Garruk from '../components/image/Headofmen.jpg'

class Decks extends Component {
    state = {
        decks: [],
        isBoxVisible: false,
    }


    componentDidMount() {
        API.getDecks()
            .then(res => {
                this.setState({ decks: res.data })
            })
            .catch(err => console.log(err))
    }

    toggleBox = () => {
        this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }))

    }

    render() {
        const { isBoxVisible } = this.state
        console.log(this.state.decks)
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
                <div className="container is-fluid">
                    <Wrapper>
                        <ul className="columns" style={{ display: "flex", flexFlow: 'row wrap' }}>

                            {this.state.decks.map(deck => (
                                <div>

                                    <li className="column" onClick={this.toggleBox} style={{ listStyleType: 'none' }}>
                                        <strong>{deck.deckName} by {deck.createdBy}</strong><br />
                                        <i>Submitted {deck.createdOn}</i>
                                        {/*Moment js this sucka */}
                                    </li>

                                    < li className={`modal ${isBoxVisible ? "is-active" : " "}`} style={{ listStyleType: 'none' }}>
                                        <div className="modal-background">
                                            {deck.deck.map(card => (
                                                <p className="modal-content">{
                                                    card.name} x {card.copies}</p>
                                            ))}
                                            <button className="modal-close" onClick={this.toggleBox}></button>
                                        </div>
                                    </li>

                                </div>

                            ))}
                        </ul>

                    </Wrapper>
                </div>
            </div >
        )
    }
}

export default Decks;