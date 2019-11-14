import React from 'react'
import './Searchbar.css'

export function Searchbar(props) {
    return (
        <div>
            <form>
                <input className="searchBar" type="text" placeholder="card name" {...props} />
            </form>
        </div>
    )
}

export function SearchBtn({ children, onClick }) {
    return (
        <button onClick={onClick} className="searchBtn">
            {children}
        </button>
    )
}
