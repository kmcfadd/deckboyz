import React from 'react'

export function Searchbar(props) {
    return (
        <div>
            <form>
                <input type="text" placeholder="card name" {...props} /><br />
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
