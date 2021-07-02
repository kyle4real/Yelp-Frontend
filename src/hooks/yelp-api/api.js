import queryString from "query-string";

const proxy = "http://localhost:5000";

export const get = (path, queryParams) => {
    const query = queryString.stringify(queryParams);
    return fetch(`${proxy}${path}?${query}`);
};

// http://localhost:5000/api/search?location=${searchParams.location}&term=${searchParams.term}
