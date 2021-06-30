import React from "react";
import SubNavItem from "./SubNavItem/SubNavItem";
import nextId from "react-id-generator";

const SubNav = () => {
    const SubNavItemData = [
        {
            label: "Restaurant",
            icon: "fas fa-utensils",
        },
        {
            label: "Home Services",
            icon: "fas fa-home",
        },
        {
            label: "Auto Services",
            icon: "fas fa-car",
        },
        {
            label: "More",
            icon: "fas fa-info-circle",
        },
    ];
    return (
        <div className="subnav standard-container">
            <div>
                {SubNavItemData.map((data) => {
                    return <SubNavItem {...data} key={nextId("subnav-item-")} />;
                })}
            </div>
            <div className="subnav-buttons">
                <div className="subnav-buttons__item">
                    <span className="icon">
                        <i className="fas fa-pen"></i>
                    </span>
                    <span>Write a Review</span>
                </div>
                <div className="subnav-buttons__item">
                    <span className="icon">
                        <i className="fas fa-hotel"></i>
                    </span>
                    <span>For businesses</span>
                </div>
            </div>
        </div>
    );
};

export default SubNav;
