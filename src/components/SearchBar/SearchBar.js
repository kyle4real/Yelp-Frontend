import React from "react";

const SearchBar = () => {
    return (
        <>
            <div className="field has-addons">
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
            </div>
        </>
    );
};

export default SearchBar;
