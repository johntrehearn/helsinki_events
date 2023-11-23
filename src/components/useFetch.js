import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);

    async function fetchData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json(); 
            setData(data);   
        }
        catch(error) {
            return (
                console.error(error)
            )
        }
    };

    useEffect(() => {
        fetchData(url);
    }, []);    

    return { data }
    };

export default useFetch;


