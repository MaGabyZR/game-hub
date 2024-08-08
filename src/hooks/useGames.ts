import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
//this is a custom hook for fetching the games and making the HTTP requests.


//to represent the games, they are all properties that comer from the list of game from rawg.io
export interface Game {
    id: number;
    name: string;
    background_image: string; 
  }
  
  //to represent and match the properties from rawg.io
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
const useGames = () =>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

  //send the request to the backend, to the /games endpoint.
  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
    });

      return () => controller.abort(); //cleanup function. 

  },[]); //[] to avoid and endless loop of calls to the backend.

  return { games, error };

}

export default useGames;