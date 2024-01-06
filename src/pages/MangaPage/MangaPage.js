import React, { useEffect, useState } from 'react';
import styles from './MangaPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faList, faLocationDot, faPencil, faPlus, faTags, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { getMangaApi } from '../../apis/manga';
import { getChaptersApi } from '../../apis/chapter';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function MangaPage() {
    const { id } = useParams();
    const [isLoadingManga, setIsLoadingManga] = useState(true)
    const [isLoadingChapter, setIsLoadingChapter] = useState(true)
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

    const getChapters = (id) => {
        getChaptersApi(id).then((response) => {
            const data = response.data;
            return data
        }).then((data) => {
            setChapters(data.data)
            setIsLoadingChapter(false)
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
            setIsLoadingManga(false)
        }).then((error) => {
            console.log(error)
        })
    }

    const renderChapters = (chapters) => {
        return chapters.map((chapter) => {
            return <div key={chapter.id} className={`d-flex ${styles['row']}`}>
                <span className={`${styles['chap-name']} text-center`}>{chapter.title}</span>
                <div className={`${styles['action']} text-center`}>
                    <Link to={`/manga/${chapter.manga}/${chapter.id}`} className={`${styles['read-chap-btn']} btn btn-warning`}>Read</Link>
                </div>
            </div>
        })
    }

    useEffect(() => {
        getManga(id);
        getChapters(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={`${styles['manga-detail-page']}`}>
            {
                isLoadingManga ? <LoadingSpinner /> : <>
                    <div className=' bg-light p-4'>
                        <h3 className='text-center mb-3'>{manga.title}</h3>
                        <div className='d-flex'>
                            <div className={`${styles['image']}`}>
                                <img className={`w-100`} alt={manga.title} src={manga.thumb} />
                            </div>
                            <div className={`${styles['wrap-content']} ms-5`}>
                                <div>
                                    <div className='d-flex'>
                                        <div className={`${styles['title']}`}>
                                            <FontAwesomeIcon className={`${styles['icon']}`} icon={faPlus} />
                                            <span>Other Name</span>
                                        </div>
                                        <span className={`${styles['content']}`}>{manga.sub_title}</span>
                                    </div>
                                    <div className='d-flex'>
                                        <div className={`${styles['title']}`}>
                                            <FontAwesomeIcon className={`${styles['icon']}`} icon={faUser} />
                                            <span>Authors</span>
                                        </div>
                                        <span className={`${styles['content']}`}>{manga.authors.join(', ')}</span>
                                    </div>
                                    <div className='d-flex'>
                                        <div className={`${styles['title']}`}>
                                            <FontAwesomeIcon className={`${styles['icon']}`} icon={faClock} />
                                            <span>Status</span>
                                        </div>
                                        <span className={`${styles['content']} text-capitalize`}>{manga.status ? manga.status : "Completed"}</span>
                                    </div>
                                    <div className='d-flex'>
                                        <div className={`${styles['title']}`}>
                                            <FontAwesomeIcon className={`${styles['icon']}`} icon={faTags} />
                                            <span>Genres</span></div>
                                        <span className={`${styles['content']} text-capitalize`}>{manga.genres.join(' - ')}</span>
                                    </div>
                                    <div className='d-flex'>
                                        <div className={`${styles['title']}`}>
                                            <FontAwesomeIcon className={`${styles['icon']}`} icon={faLocationDot} />
                                            <span>Country</span></div>
                                        <span className={`${styles['content']} text-capitalize`}>{manga.type}</span>
                                    </div>
                                </div>
                                {
                                    isLoadingChapter ? <LoadingSpinner /> : <div className='text-center mt-5'>
                                        <Link to={`/manga/${id}/${chapters[0].id}`} className={`${styles['read-chap-btn']} btn btn-warning`}>Read Now</Link>
                                    </div>
                                }
                            </div>

                        </div>
                    </div>
                    <div className='bg-light px-4'>
                        <p className={`${styles['content-description']} mb-0`}>
                            <span className={`${styles['title-description']} me-2`}>
                                <FontAwesomeIcon className={`${styles['icon-description']} me-1`} icon={faPencil} />
                                Description:
                            </span>
                            {manga.summary}
                        </p>
                    </div>
                </>
            }
            <div className={`bg-light  p-4 `}>
                <div className={`d-flex align-items-center ${styles['list-title']}`}>
                    <FontAwesomeIcon icon={faList} className={`${styles['list-icon']}`} />
                    <h4 className={`mb-0`}>Chapter List</h4>
                </div>
                <div className={`w-100 ${styles['list-chap-name']}`}>
                    {
                        isLoadingChapter ? <LoadingSpinner /> : renderChapters(chapters)
                    }
                </div>
            </div>
        </div>
    );
}

export default MangaPage;