import React, { Component } from 'react';
import Navbar from '../components/Navbar/navbar';

class Dashboard extends Component {
    state = { isBoxVisible: false }
    toggleBox = () => {
        this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }))
    }
    render = () => {
        const { isBoxVisible } = this.state
        return (
            <div>
                <Navbar />
                <button onClick={this.toggleBox}>Show Box</button>
                <div className={`modal ${isBoxVisible ? "is-active" : ""}`} >
                    hihih
                    <div className="modal-background">Hi</div>
                    <div className="modal-content">
                        <p className="image is-4by3">
                            WOOOOO
                        </p>
                    </div>
                    <button className="modal-close is-large" aria-label="close" onClick={this.toggleBox}></button>
                </div>
            </div>
        )
    }

}

export default Dashboard;