import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './Chapter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faClockRotateLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import { getChapterImagesApi, getChaptersApi } from '../../apis/chapter';
import { getMangaApi } from '../../apis/manga';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function ChapterPage() {
    const { id, chapterId } = useParams();
    const navigate = useNavigate();
    const [chapterImages, setChapterImages] = useState([]);
    const [isLoadingChapters, setIsLoadingChapters] = useState(true)
    const [manga, setManga] = useState({
        id: "",
        title: "",
        sub_title: "",
        status: "",
        thumb: "",
        summary: "",
        authors: [],
        genres: [],
        type: "",
    })
    const [chapters, setChapters] = useState([])
    const [indexCurrentChapter, setIndexCurrentChapter] = useState(0)

    const getChapters = (mangaId) => {
        getChaptersApi(mangaId).then((response) => {
            const data = response.data;
            return data
        }).then((data) => {
            setChapters(data.data)
            const index = data.data.findIndex((chapter) => {
                return chapter.id === chapterId
            })
            setIndexCurrentChapter(index)
            setIsLoadingChapters(false)
        }).then((error) => {
            console.log(error)
        })
    }

    const getManga = (id) => {
        getMangaApi(id).then((response) => {
            const data = response.data;
            return data
        }).then((data) => {
            setManga(data.data)
        }).then((error) => {
            console.log(error)
        })
    }

    const getChapterImages = (chapterId) => {
        getChapterImagesApi(chapterId).then((response) => {
            const data = response.data;
            return data
        }).then((data) => {
            setChapterImages(data.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const renderChapters = (chapters) => {
        return chapters.map((chapter) => {
            return <option key={chapter.id} value={chapter.id}>{chapter.title}</option>
        })
    }
    const renderChapterImages = (chapterImages) => {
        return chapterImages.map((chapterImage) => {
            return <img className='w-100' key={chapterImage.id} alt={chapterImage} src={chapterImage.link} />
        })
    }

    useEffect(() => {
        getManga(id);
        getChapters(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getChapterImages(chapterId)
    }, [chapterId])


    return (
        <div className={`${styles['chapter-page']}`}>
            <div className={`${styles['wrapper']} px-2 pb-4`}>
                <h1 className={`txt-primary ${styles['header-manga-name']} pt-3`}>
                    <Link to={`/manga/${id}`} className={`${styles['manga-name']}`}>
                        {manga.title}
                    </Link>
                </h1>
                <div class="alert alert-info mrb10 hidden-xs hidden-sm text-center">
                    <i class="fa fa-info-circle"></i>
                    <em>Sử dụng mũi tên trái (←) hoặc phải (→) để chuyển chapter</em>
                </div>
                <div >
                    <div className={`d-flex justify-content-center align-items-center gap-2`}>
                        <Link to={'/'}><FontAwesomeIcon icon={faHouse} className={`${styles['icon']}`} /></Link>
                        <Link to={`/manga/${id}`}><FontAwesomeIcon icon={faClockRotateLeft} className={`${styles['icon']}`} /></Link>
                        {
                            isLoadingChapters ? <button disabled={true} className={`${styles['reading-prev']} ${styles['disable']}`}>
                                <FontAwesomeIcon icon={faChevronLeft} className={`text-white ${styles['icon']}`} />
                            </button> : <button
                                disabled={indexCurrentChapter === 0 ? true : false}
                                onClick={() => {
                                    setIndexCurrentChapter(indexCurrentChapter - 1)
                                    navigate(`/manga/${id}/${chapters[indexCurrentChapter - 1].id}`)
                                }}
                                className={`${styles['reading-prev']} ${indexCurrentChapter === 0 ? styles['disable'] : ""}`}>
                                <FontAwesomeIcon icon={faChevronLeft} className={`text-white ${styles['icon']}`} />
                            </button>
                        }

                        {
                            isLoadingChapters ? <select></select> : <select value={chapterId} onChange={(e) => {
                                const index = chapters.findIndex((chapter) => {
                                    return chapter.id === chapterId
                                })
                                setIndexCurrentChapter(index)
                                navigate(`/manga/${id}/${e.target.value}`)
                            }} className={`${styles['select-chapter']}`}>
                                {renderChapters(chapters)}
                            </select>
                        }
                        {
                            isLoadingChapters ? <button disabled={true} className={`${styles['reading-next']} ${styles['disable']}`}>
                                <FontAwesomeIcon icon={faChevronRight} className={`text-white ${styles['icon']}`} />
                            </button> : <button disabled={indexCurrentChapter === chapters.length ? true : false} onClick={() => {
                                setIndexCurrentChapter(indexCurrentChapter + 1)
                                navigate(`/manga/${id}/${chapters[indexCurrentChapter + 1].id}`)
                            }} className={`${styles['reading-next']} ${indexCurrentChapter === chapters.length ? styles['disable'] : ""}`}>
                                <FontAwesomeIcon icon={faChevronRight} className={`text-white ${styles['icon']}`} />
                            </button>
                        }
                    </div>
                    <div className='text-center mt-2 px-4'>
                        {
                            isLoadingChapters ? <LoadingSpinner /> : renderChapterImages(chapterImages)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChapterPage;