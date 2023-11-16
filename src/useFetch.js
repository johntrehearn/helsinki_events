import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);

    async function fetchData(url) {
            try {
                const response = await fetch(url);
                const data = await response; 
                setData(data);   
            }
            catch (err) {
                console.log(err.message)
            }
    };

    useEffect(() => {
        fetchData();
    }, [url]);    

    return { data }
    };

export default useFetch;


