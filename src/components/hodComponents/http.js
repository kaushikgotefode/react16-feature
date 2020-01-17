import { useState, useEffect } from "react";

export const useHttp = (url, [parameters]) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Could not fetch person!");
        }
        return response.json();
      })
      .then(data => {
        setFetchedData(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, [url, parameters]);
  return [isLoading, fetchedData];
};
