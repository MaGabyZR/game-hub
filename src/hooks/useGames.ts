
import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
//this is a custom hook for fetching the games and making the HTTP requests.

//To display the platform icons.
export interface Platform {
  id: number;
  name: string;
  slug: string;
}


//to represent the games, they are all properties that comer from the list of game from rawg.io
export interface Game {
    id: number;
    name: string;
    background_image: string; 
    parent_platforms: { platform: Platform }[];
    metacritic: number;
  }
  
  const useGames = (
    gameQuery: GameQuery
  ) =>
    useData<Game>(
      "/games",
      {
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder
        },
      },
      [gameQuery]
    );
export default useGames;