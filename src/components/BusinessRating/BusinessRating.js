import React from "react";

import Rating from "react-rating";

const BusinessRating = () => {
    return (
        <div>
            <div className="business-rating">
                <Rating
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    fractions={2}
                    initialRating={3.5}
                    readonly
                />
            </div>
        </div>
    );
};

export default BusinessRating;
