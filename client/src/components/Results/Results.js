import React from 'react'
import './Results.css';

export function Results({ children }) {
    return <ul className="Results">{children}</ul>;
}

export function ResultItem({ name, set, colors, number,
manaCost, type, types, power, toughness, text,}) {
    return (
        <li className="ResultItem">
            <p className="Name">{name} | {manaCost}</p>
            <p className="Type">{type} | {set} #{number}</p>
            <p className="Text">{text}</p>
        </li>
    )
}


