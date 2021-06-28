import React from "react";

const SearchBar = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    };

    return (
        <div className="search-bar">
            <form className="field has-addons" onSubmit={handleOnSubmit}>
                <p className="control">
                    <a href="/" className="button is-static is-medium">
                        Search
                    </a>
                </p>
                <p className="control">
                    <input
                        className="input is-medium input-control"
                        type="text"
                        placeholder="burgers, barbers, spas, handymen"
                    />
                </p>
                <p className="control">
                    <a href="/" className="button is-static is-medium">
                        Near
                    </a>
                </p>
                <p className="control">
                    <input
                        className="input is-medium input-control"
                        type="text"
                        placeholder="Where"
                    />
                </p>
                <button className="button is-medium search-button" onClick={handleOnSubmit}>
                    <span className="icon is-small">
                        <i className="fas fa-search search-button__icon"></i>
                    </span>
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
