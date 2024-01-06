import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://mangaverse-api.p.rapidapi.com/manga',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RapidAPI_Key,
        'X-RapidAPI-Host': process.env.REACT_APP_RapidAPI_Host
    }
});

export default axiosInstance;