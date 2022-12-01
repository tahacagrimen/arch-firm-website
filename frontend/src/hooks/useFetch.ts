import { useEffect, useState } from "react";

type data = {
  data: any;
  loading: boolean;
  error: any;
};

const useFetch = (url: string): data => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
