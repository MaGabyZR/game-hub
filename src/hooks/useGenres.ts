
import useData from "./useData";

//to represent and match the properties from rawg.io
export interface Genre {
    id: number;
    name: string;
    image_background: string;
}
//use the generic hook to call the backend
const useGenres = () => useData<Genre>('/genres');

export default useGenres;