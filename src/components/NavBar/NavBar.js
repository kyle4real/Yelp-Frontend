import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({ searchTerm, searchLocation }) => {
    return (
        <div className="navbar__container">
            <div className="navbar standard-container">
                <Link to="/">
                    <img className="navbar__logo" src={logo} alt="logo" />
                </Link>
                <SearchBar small searchTerm={searchTerm} searchLocation={searchLocation} />
                <div className="navbar__buttons">
                    <button className="button">Sign In</button>
                    <button className="button">Register</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
