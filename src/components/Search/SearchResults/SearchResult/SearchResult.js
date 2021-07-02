import React from "react";

import BusinessRating from "../../../BusinessRating/BusinessRating";

const SearchResult = ({ business }) => {
    if (!business) {
        return <div />;
    }
    const { image_url, name, is_closed, review_count, rating } = business;
    return (
        <div className="search-result">
            <div className="search-result__img-container">
                <img className="search-result__img" src={image_url} alt={name + " image"} />
            </div>
            <div className="general-info">
                <h2 className="general-info__title subtitle">{name}</h2>
                <h2 className="general-info__profession">Restaurant</h2>
                <div className="general-info__rating">
                    <BusinessRating reviewCount={review_count} rating={rating} />
                </div>
                <div className="general-info__tags">
                    <span className="tag">$$</span>
                    <span className="tag">Burgers</span>
                    <span className="tag">Fast Food</span>
                </div>
            </div>
            <div className="search-result__contact">
                <p className="open-now">
                    <i
                        style={is_closed ? { color: "red" } : { color: "green" }}
                        className="fas fa-clock"
                    ></i>{" "}
                    {is_closed ? "Closed" : "Open"} Now
                </p>
                <p>2158596601</p>
                <p>Street 135</p>
                <p>1414 Texas</p>
            </div>
        </div>
    );
};

export default SearchResult;
