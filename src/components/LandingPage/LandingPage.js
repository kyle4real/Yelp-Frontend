import React from "react";
import TopNav from "./TopNav/TopNav";
import logo from "../../assets/images/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import SearchSuggestions from "./SearchSuggestions/SearchSuggestions";
import useRouter from "use-react-router";

const LandingPage = () => {
    const { history } = useRouter();

    const search = (term, location) => {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
    };

    return (
        <div className="landing-page__container">
            <div className="landing-page">
                <TopNav />
                <img className="logo" src={logo} alt="logo" />
                <SearchBar search={search} />
                <SearchSuggestions />
            </div>
        </div>
    );
};

export default LandingPage;
