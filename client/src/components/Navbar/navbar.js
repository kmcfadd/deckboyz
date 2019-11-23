import React from 'react'
import "./navbar.css"
export default class Navbar extends React.Component {
    render() {
        return (
            <view>
                <nav className="navbar" role="navigation" aria-label="dropdown navigation">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link is-arrowless" href="/">
                            Manly Man's Decks and Things
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
                                Version 0.8.0
      </div>
                        </div>
                    </div>
                </nav>
            </view>
        )
    }
}