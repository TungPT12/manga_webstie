import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://mangaverse-api.p.rapidapi.com/manga',
    // headers: {
    //     'X-RapidAPI-Key': 'ade66d3a99mshdd7ef3b70e67867p16ce05jsnf5085f5ada03',
    //     'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
    // },
    //////////////
    // headers: {
    //     'X-RapidAPI-Key': '1dae61f7bbmshbcffb1b8de5dafep154930jsn73bb6886f93b',
    //     'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
    // }
    headers: {
        'X-RapidAPI-Key': '3bec7d9ce1msh914f0164bd87f9ap16a375jsncf9c1b318137',
        'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
    }
    // withCredentials: true
});

export default axiosInstance;