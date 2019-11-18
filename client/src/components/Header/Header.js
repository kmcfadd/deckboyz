import React from 'react';
import './Header.css'
import MTG from "./Magic_card_back.jpg"

export default class Header extends React.Component {
    pop() {
        let i = 0
        if (i == 0) {
            document.getElementById("item2").style.transform = 'translateY(200px)'
            document.getElementById("item3").style.transform = 'translateY(200px) translateX(-150px) rotateY(360deg)'
            document.getElementById("item5").style.transform = 'translateY(200px) translateX(-300px) rotateY(360deg)'
            document.getElementById("item4").style.transform = 'translateX(150px) translateY(200px)'
            i = 1
        } else {
            document.getElementById("item2").style.transform = 'translate(0)'
            document.getElementById("item3").style.transform = 'translate(0)'
            document.getElementById("item4").style.transform = 'translate(0)'
            i = 0
        }
    }
    render() {
        return (
            <view>
                <div className="menu" onClick={this.pop}>
                    <img src={MTG} alt="magic card" />
                </div >
                <div className="menu-items">
                    <img src={MTG} alt="magic card" />
                    <div className="item2" id="item2">
                        <a href="/decks">
                            <img src={MTG} alt="magic card" />
                        </a>
                    </div>
                    <div className="item3" id="item3">
                        <a href="/deckbuilder">
                            <img src={MTG} alt="magic card" />
                        </a>
                    </div>
                    <div className="item4" id="item4">
                        <a href="/register">
                            <img src={MTG} alt="magic card" />
                        </a>
                    </div>
                    <div className="item5" id="item5">
                        <a href="/dashboard">
                            <img src={MTG} alt="magic card" />
                        </a>
                    </div>
                </div>
            </view>
        )
    }
}

