import React from "react";
import TopNav from "./TopNav/TopNav";
import logo from "../../assets/images/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import SearchSuggestions from "./SearchSuggestions/SearchSuggestions";

const LandingPage = () => {
    return (
        <div className="landing-page__container">
            <div className="landing-page">
                <TopNav />
                <img className="logo" src={logo} alt="logo" />
                <SearchBar />
                <SearchSuggestions />
            </div>
        </div>
    );
};

export default LandingPage;
