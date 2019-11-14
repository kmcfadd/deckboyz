import React from 'react'
import './Results.css';

// export function Results({ children }) {
//     return <div className="Results">
//                 {children}
//             </div>
// }

export function ResultItem({ cards }) {
    return (
        <ul className="Results">
            {cards.map(card => (
        <li key={card._id} className="ResultItem">
            <p className="Name">{card.name} {card.manaCost}</p>
            <p className="Type">{card.type} <br /> {card.set} #{card.number}</p>
            <p className="Text">{card.text}</p>
        </li>
    ))}
        </ul>   
    )
}


