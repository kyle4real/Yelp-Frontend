import React from "react";
import nextId from "react-id-generator";

const SearchSuggestions = () => {
    const searchSuggestionsData = [
        { icon: "fas fa-utensils", title: "Restaurants" },
        { icon: "fas fa-cocktail", title: "Nightlife" },
        { icon: "fas fa-concierge-bell", title: "Services" },
        { icon: "fas fa-truck", title: "Delivery Service" },
    ];
    return (
        <div className="search-suggestions">
            {searchSuggestionsData.map((item) => {
                return (
                    <div className="search-suggestions__item" key={nextId("search-suggestions-")}>
                        <span className="icon is-small">
                            <i className={`${item.icon} search-suggestions__icon`}></i>
                        </span>
                        <span className="search-suggestions__title">{item.title}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default SearchSuggestions;
