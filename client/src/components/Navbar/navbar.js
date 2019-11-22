import React from 'react'
import "./navbar.css"
export default class Navbar extends React.Component {
    render() {
        return (
            <view>
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link is-arrowless" href="/">
                        Manly Man's Magical Decks
  </a>
                    <div className="navbar-dropdown">
                        <a className="navbar-item" href="/dashboard">
                            Dashboard
    </a>
                        <a className="navbar-item" href="/decks">
                            Decks
    </a>
                        <a className="navbar-item" href="/deckbuilder">
                            Deckbuilder
    </a>
                        <hr className="navbar-divider" />
                        <div className="navbar-item">
                            Copyright Manly Man
    </div>
                    </div>
                </div>
            </view>
        )
    }
}