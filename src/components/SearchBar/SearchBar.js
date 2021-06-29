import React from "react";

const SearchBar = ({ small }) => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    };

    const sizeClass = small ? "" : "is-medium";
    return (
        <div className="search-bar">
            <form className="field has-addons" onSubmit={handleOnSubmit}>
                <p className="control">
                    <a href="/" className={`button is-static ${sizeClass}`}>
                        Search
                    </a>
                </p>
                <p className="control">
                    <input
                        className={`input input-control ${sizeClass}`}
                        type="text"
                        placeholder="burgers, barbers, spas, handymen"
                    />
                </p>
                <p className="control">
                    <a href="/" className={`button is-static ${sizeClass}`}>
                        Near
                    </a>
                </p>
                <p className="control">
                    <input
                        className={`input input-control ${sizeClass}`}
                        type="text"
                        placeholder="Where"
                    />
                </p>
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
