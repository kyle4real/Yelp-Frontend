import React from "react";

import BusinessRating from "../../../BusinessRating/BusinessRating";

const SearchResult = () => {
    return (
        <div className="search-result">
            <img className="search-result__img" src="https://via.placeholder.com/210" alt="" />
            <div className="general-info">
                <h2 className="general-info__title subtitle">Burger Place</h2>
                <div className="general-info__rating">
                    <BusinessRating />
                </div>
                <div className="general-info__tags">
                    <span className="tag">$$</span>
                    <span className="tag">Burgers</span>
                    <span className="tag">Fast Food</span>
                </div>
            </div>
            <div className="search-result__contact">
                <p>2158596601</p>
                <p>Street 135</p>
                <p>1414 Texas</p>
            </div>
        </div>
    );
};

export default SearchResult;
