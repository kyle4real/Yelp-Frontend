import React from "react";
import SubNavItem from "./SubNavItem/SubNavItem";

const SubNav = () => {
    const SubNavItemData = [
        {
            label: "Restaurant",
        },
        {
            label: "Home Services",
        },
        {
            label: "Auto Services",
        },
        {
            label: "More",
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
