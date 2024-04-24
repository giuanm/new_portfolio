import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState("");

    const [loading, setLoading] = useState(false);
  
    const [error, setError] = useState(null);
  
    useEffect(() =>{
      async function fetchData(){
        //loading
        setLoading(true);
  
        try {
          const res = await fetch(url);
    
          const json = await res.json();
    
          setData(json);
        } catch (error) {
          setError("Houve erro ao carregar os dados!!")
          console.log(error)
        }
        setLoading(false)
      }
  
      fetchData()

    }, [url]);

    return {data, loading, error};
};