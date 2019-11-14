import React from 'react'
import './Pagination.css'

const Pagination = ({ 
    cardsPerPage, totalCards, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i<= Math.ceil(totalCards / cardsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="pageItem">
                        <a onClick={() => paginate(number)}
                        href="#"
                        className="pageLink">
                            {number}
                        </a>    
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;
