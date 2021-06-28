import React from "react";
import TopNav from "./TopNav/TopNav";
import logo from "../../assets/images/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import SearchSuggestions from "./SearchSuggestions/SearchSuggestions";

const LandingPage = () => {
    return (
        <>
            <TopNav />
            <div>Landing Page</div>
            <img className="logo" src={logo} alt="logo" />
            <SearchBar />
            <SearchSuggestions />
        </>
    );
};

export default LandingPage;
