
//import useData from "./useData";
import genres from "../data/genres";

//to represent and match the properties from rawg.io
export interface Genre {
    id: number;
    name: string;
    image_background: string;
}
//use the generic hook to call the backend
//const useGenres = () => useData<Genre>('/genres');

//use this new const to use static data instead of the backend and return an object with 3 properties and minimize the impact of this changes on consumers of this hook.
const useGenres = () => ({ data: genres, isLoading: false, error: null})

export default useGenres;