import React from "react";

import Rating from "react-rating";

const BusinessRating = ({ reviewCount, rating }) => {
    return (
        <div>
            <div className="business-rating">
                <Rating
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    fractions={2}
                    initialRating={rating}
                    readonly
                />
                <span className="business-rating__count">{reviewCount} Reviews</span>
            </div>
        </div>
    );
};

export default BusinessRating;
