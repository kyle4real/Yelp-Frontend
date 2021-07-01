import React, { useState } from "react";

const SearchBar = ({ small, search, searchTerm, searchLocation }) => {
    const [term, setTerm] = useState(searchTerm || "");
    const [location, setLocation] = useState(searchLocation || "");

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (typeof search === "function") {
            search(term, location);
        }
    };

    const sizeClass = small ? "" : "is-medium";
    return (
        <div className="search-bar">
            <form className="field has-addons" onSubmit={handleOnSubmit}>
                <div className="control">
                    <div className={`button is-static ${sizeClass}`}>Search</div>
                </div>
                <div className="control">
                    <input
                        className={`input input-control ${sizeClass}`}
                        onChange={(e) => setTerm(e.target.value)}
                        type="text"
                        placeholder="burgers, barbers, spas, handymen"
                        value={term}
                    />
                </div>
                <div className="control">
                    <div className={`button is-static ${sizeClass}`}>Near</div>
                </div>
                <div className="control">
                    <input
                        className={`input input-control ${sizeClass}`}
                        onChange={(e) => setLocation(e.target.value)}
                        type="text"
                        placeholder="Where"
                        value={location}
                    />
                </div>
                <button className={`button search-button ${sizeClass}`} onClick={handleOnSubmit}>
                    <span className="icon is-small">
                        <i className="fas fa-search search-button__icon"></i>
                    </span>
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
