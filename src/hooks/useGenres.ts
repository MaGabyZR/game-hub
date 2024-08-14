import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

//to represent and match the properties from rawg.io
interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse{
    count: number;
    results: Genre[];
}


const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

  //send the request to the backend, to the /games endpoint.
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false);
    });

      return () => controller.abort(); //cleanup function. 

  },[]); //[] to avoid and endless loop of calls to the backend.

  return { genres, error, isLoading };

};

export default useGenres;