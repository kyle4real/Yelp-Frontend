import React from "react";
import logo from "../../assets/images/logo.png";

import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
    return (
        <div className="navbar__container">
            <div className="navbar standard-container">
                <img className="navbar__logo" src={logo} alt="logo" />
                <SearchBar small />
                <div className="navbar__buttons">
                    <button className="button">Sign In</button>
                    <button className="button">Register</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
