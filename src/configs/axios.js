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
    // headers: {
    //     'X-RapidAPI-Key': '3bec7d9ce1msh914f0164bd87f9ap16a375jsncf9c1b318137',
    //     'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
    // }
    // headers: {
    //     'X-RapidAPI-Key': '3bec7d9ce1msh914f0164bd87f9ap16a375jsncf9c1b318137',
    //     'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
    // }
    // headers: {
    //     'X-RapidAPI-Key': 'f1c9ed59bdmsh82750270014adfap104c55jsned115c01f7d5',
    //     'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
    // }
    // headers: {
    //     'X-RapidAPI-Key': '1aa71f5f5fmshbe60c425ee43d47p1774dfjsn6772ef0ab7f9',
    //     'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
    // }
    // withCredentials: true
    // headers: {
    //     'X-RapidAPI-Key': '8e1505f317mshe94fe7248d1b6aep14dafbjsn046a9f758123',
    //     'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
    // }
    // headers: {
    //     'X-RapidAPI-Key': '5aa822bc96msh3109d0db714eb28p11b090jsn22d551361730',
    //     'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
    // }
    headers: {
        'X-RapidAPI-Key': '63cc0b3350mshf70a1c17cee92d6p13ef63jsn312cf86d034b',
        'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
    }
});

export default axiosInstance;