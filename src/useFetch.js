import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);
  const [err, setError] = useState(null);

  useEffect (() =>{
    const fetchData = async () => {
      setLoad(true);
      setError(null);
      try {
        const res = await fetch(url);
        if (!res.ok){
          throw new Error("Something went wrong");
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error.message);
        console.error(error.message);
      } finally {
        setLoad(false);
      }
    };
    fetchData();
  }, [url]);
  return {data, load, err};
}

export default useFetch;
