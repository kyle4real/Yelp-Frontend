import { useState, useEffect } from "react";
// import * as api from "./api";

const useBusinessSearch = (term, location) => {
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({ term, location });

    useEffect(() => {
        setBusinesses([]);
        const fetchData = async () => {
            try {
                const rawData = await fetch(
                    `http://localhost:5000/api/search?location=${searchParams.location}&term=${searchParams.term}`
                );
                const resp = await rawData.json();
                setBusinesses(resp.businesses);
                setAmountResults(resp.total);
                console.log(resp);
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, [searchParams]);
    return [businesses, amountResults, searchParams, setSearchParams];
};

export default useBusinessSearch;
