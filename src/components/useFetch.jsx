import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        // fetch categorizes errors 400 and 500 as a success
        // .ok categorizes only 200 as a succes
        if (!response.ok) {
          const msg = `There was an error: "${response.status} ${response.statusText}"`;
          throw new Error(msg);
        }
        const data = await response.json();
        setData(data.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
