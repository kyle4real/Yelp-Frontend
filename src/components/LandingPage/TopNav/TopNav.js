import React from "react";

const TopNav = () => {
    return (
        <div className="nav">
            <div className="nav__links-left">
                <span>Write a Review</span>
                <span>Events</span>
            </div>
            <div className="nav__links-right">
                <span>Login</span>
                <button className="button">Sign up</button>
            </div>
        </div>
    );
};

export default TopNav;
