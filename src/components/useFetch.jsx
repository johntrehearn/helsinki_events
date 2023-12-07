import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok)
          throw Error(
            `There was an error: "${response.status} ${response.statusText}"`
          );

        const data = await response.json();
        setData(data.data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        if (error.name === "AbortError") return "fetch aborted";
        setIsLoading(false);
        setError(error.message);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
