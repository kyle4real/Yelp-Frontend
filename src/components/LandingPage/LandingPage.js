import React from "react";
import TopNav from "./TopNav/TopNav";
import logo from "../../assets/images/logo.png";

const LandingPage = () => {
    return (
        <>
            <TopNav />
            <div>Landing Page</div>
            <img className="logo" src={logo} alt="logo" />
        </>
    );
};

export default LandingPage;
