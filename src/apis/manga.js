import axiosInstance from "../configs/axios"

const getMangasApi = async (page) => {
    try {
        const response = await axiosInstance.get('/fetch', {
            params: {
                page: page,
                genres: '',
                type: 'all'
            },
        })
        return response
    } catch (error) {
        return error.response
    }
}

const getMangaApi = async (id) => {
    try {
        const response = await axiosInstance.get('', {
            params: {
                id: id
            },
        })
        return response
    } catch (error) {
        return error.response
    }
}

export {
    getMangasApi,
    getMangaApi
}