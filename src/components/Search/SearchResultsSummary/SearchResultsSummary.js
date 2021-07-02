import React from "react";

const SearchResultsSummary = ({ searchTerm, searchLocation, amountResults, shownResults }) => {
    let resultStats = null;
    if (amountResults && shownResults) {
        resultStats = (
            <p>
                Showing 1-{shownResults} out of {amountResults} results
            </p>
        );
    }
    return (
        <div className="search-summary__container">
            <div className="search-summary standard-container">
                <div className="search-summary__top">
                    <h1 className="subtitle">
                        <strong>{searchTerm}</strong> {searchLocation}
                    </h1>
                    {resultStats}
                </div>
                <div className="search-summary__filters">
                    <button className="button">
                        <span className="icon">
                            <i className="fas fa-sliders-h"></i>
                        </span>
                        <span>Filters</span>
                    </button>
                    <div className="buttons has-addons mb-0">
                        <button className="button mb-0">$</button>
                        <button className="button mb-0">$$</button>
                        <button className="button mb-0">$$$</button>
                        <button className="button mb-0">$$$$</button>
                    </div>
                    <button className="button">
                        <span className="icon">
                            <i className="fas fa-clock"></i>
                        </span>
                        <span>Open Now</span>
                    </button>
                    <button className="button">
                        <span className="icon">
                            <i className="fas fa-dollar-sign"></i>
                        </span>
                        <span>Cashback</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchResultsSummary;
