// Hook to fetch data from platform endpoint.

import useData from "./useData";

interface Platform{
    id: number;
    name: string;
    slug: string;
}

//call the endpoint
const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms; 