import React from "react";

const TopNav = () => {
    return (
        <div className="topnav">
            <div className="topnav__links-left">
                <span>Write a Review</span>
                <span>Events</span>
            </div>
            <div className="topnav__links-right">
                <span>Login</span>
                <button className="button">Sign up</button>
            </div>
        </div>
    );
};

export default TopNav;
