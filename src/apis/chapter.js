import axiosInstance from "../configs/axios"

const getChaptersApi = async (id) => {
    try {
        const response = await axiosInstance.get('/chapter', {
            params: {
                id: id
            },
        })
        return response
    } catch (error) {
        return error.response
    }
}


const getChapterImagesApi = async (chapterId) => {
    try {
        const response = await axiosInstance.get('/image', {
            params: {
                id: chapterId
            },
        })
        return response
    } catch (error) {
        return error.response
    }
}

export {
    getChaptersApi,
    getChapterImagesApi
}