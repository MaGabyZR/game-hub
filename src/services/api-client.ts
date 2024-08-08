import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '1d0cb57485534941815918fd758dbf26'
    }
})