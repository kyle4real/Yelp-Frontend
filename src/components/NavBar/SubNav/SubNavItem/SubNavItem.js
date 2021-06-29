import React from "react";

const SubNavItem = ({ label, icon }) => {
    return (
        <div className="dropdown is-hoverable subnavitem">
            <div className="dropdown-trigger subnavitem-trigger">
                <div aria-haspopup="true" aria-controls="dropdown-menu4">
                    <i className={`${icon} subnavitem-trigger__icon`}></i>
                    <span className="subnavitem-trigger__label">{label}</span>
                    <span className="icon is-small subnavitem-trigger__down">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div className="dropdown-menu subnavitem-menu" id="dropdown-menu4" role="menu">
                <div className="dropdown-content">
                    <div className="dropdown-item">
                        <p>
                            You can insert <strong>any type of content</strong> within the dropdown
                            menu.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubNavItem;
