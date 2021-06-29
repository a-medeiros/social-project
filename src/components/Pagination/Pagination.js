import React from 'react'
import "./style.scss";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage  }) => {
    let numberOfPages = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        numberOfPages.push(i);
    }

    return (
        <div className="pagination-container">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {
                        numberOfPages.map(number => (
                            <li id="li" key={number} className="page-item">
                                <a onClick={() => setCurrentPage(number)} className="page-link" href="#">
                                    {number}
                                </a>
                            </li>
                        ))
                    }    
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;