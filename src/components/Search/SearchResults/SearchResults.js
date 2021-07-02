import React from "react";

import SearchResult from "./SearchResult/SearchResult";
import Spinner from "../../Spinner/Spinner";

const SearchResults = ({ businesses }) => {
    if (!businesses || !businesses.length) {
        return <Spinner />;
    }

    console.log(businesses);

    const searchResults = businesses.map((business) => (
        <SearchResult key={business.id} business={business} />
    ));
    return <div className="search-results standard-container">{searchResults}</div>;
};

export default SearchResults;
