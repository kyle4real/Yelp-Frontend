import React from "react";
import NavBar from "../NavBar/NavBar";
import SubNav from "../NavBar/SubNav/SubNav";
import SearchResultsSummary from "./SearchResultsSummary/SearchResultsSummary";
import SearchResults from "./SearchResults/SearchResults";
import useRouter from "use-react-router";

const Search = () => {
    const { location } = useRouter();
    const params = new URLSearchParams(location.search);
    const searchTerm = params.get("find_desc");
    const searchLocation = params.get("find_loc");

    return (
        <div>
            <NavBar searchTerm={searchTerm} searchLocation={searchLocation} />
            <SubNav />
            <SearchResultsSummary searchTerm={searchTerm} searchLocation={searchLocation} />
            <SearchResults />
        </div>
    );
};

export default Search;
