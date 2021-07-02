import React from "react";

import BusinessRating from "../../../BusinessRating/BusinessRating";

const SearchResult = ({ business }) => {
    if (!business) {
        return <div />;
    }
    const {
        image_url,
        name,
        is_closed,
        review_count,
        rating,
        categories,
        id,
        price,
        phone,
        location,
    } = business;

    const tags = categories.map((tag) => {
        return (
            <span className="tag" key={`${id}-${tag.title}`}>
                {tag.title}
            </span>
        );
    });

    const address = location.display_address.map((line) => {
        return (
            <p className="contact-info__address-line" key={`${id}-${line}`}>
                {line}
            </p>
        );
    });
    return (
        <div className="search-result">
            <div className="search-result__img-container">
                <img className="search-result__img" src={image_url} alt={name + " image"} />
            </div>
            <div className="general-info">
                <h2 className="general-info__title subtitle">{name}</h2>
                {/* <h2 className="general-info__profession has-text-grey">Restaurant</h2> */}
                <div className="general-info__rating">
                    <BusinessRating reviewCount={review_count} rating={rating} />
                </div>
                <div className="general-info__tags">
                    {price && <span className="tag">{price}</span>}
                    {tags}
                </div>
            </div>
            <div className="contact-info">
                <p className="contact-info__open-now">
                    <i
                        style={is_closed ? { color: "red" } : { color: "green" }}
                        className="fas fa-clock"
                    ></i>{" "}
                    {is_closed ? "Closed" : "Open"} Now
                </p>
                <p className="contact-info__phone">{phone}</p>
                {address}
            </div>
        </div>
    );
};

export default SearchResult;
