import React from "react";
import NavBar from "../NavBar/NavBar";
import SubNav from "../NavBar/SubNav/SubNav";
import SearchResultsSummary from "./SearchResultsSummary/SearchResultsSummary";
import SearchResults from "./SearchResults/SearchResults";
import useRouter from "use-react-router";
import useBusinessSearch from "../../hooks/yelp-api/useBusinessSearch";

const Search = () => {
    const { location, history } = useRouter();
    const params = new URLSearchParams(location.search);
    const searchTerm = params.get("find_desc");
    const searchLocation = params.get("find_loc");
    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(
        searchTerm,
        searchLocation
    );

    const search = (term, location) => {
        // redirect
        const encodedTerm = encodeURI(term);
        const encodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`);
        // perform a search
        setSearchParams({ term, location });
    };

    return (
        <div>
            <NavBar searchTerm={searchTerm} searchLocation={searchLocation} search={search} />
            <SubNav />
            <SearchResultsSummary
                searchTerm={searchParams.term}
                searchLocation={searchParams.location}
                amountResults={amountResults}
                shownResults={businesses ? businesses.length : 0}
            />
            <SearchResults businesses={businesses} />
        </div>
    );
};

export default Search;
