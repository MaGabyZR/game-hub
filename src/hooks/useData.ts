//generic hook, to avoid code duplication

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

//to represent and match the properties from rawg.io in a generic way

interface FetchResponse<T>{
    count: number;
    results: T[];
}


const useData = <T> (endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

  //send the request to the backend endpoint. 
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false);
    });

      return () => controller.abort(); //cleanup function. 

  },[]); //[] to avoid and endless loop of calls to the backend.

  return { data, error, isLoading };

};

export default useData;