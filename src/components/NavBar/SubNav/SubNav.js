import React from "react";
import SubNavItem from "./SubNavItem/SubNavItem";

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
        <div>
            {SubNavItemData.map((data) => {
                return <SubNavItem {...data} />;
            })}
        </div>
    );
};

export default SubNav;
