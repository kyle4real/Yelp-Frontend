import queryString from "query-string";

export const get = (path, queryParams) => {
    const query = queryString.stringify(queryParams);
    return fetch(`http://localhost:5000${path}?${query}`);
};
