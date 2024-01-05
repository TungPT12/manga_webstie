import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { getMangasApi } from '../../apis/manga';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function HomePage() {
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [listManga, setListManga] = useState([])

    const fetchManga = async (page) => {
        getMangasApi(page).then((response) => {
            const data = response.data;
            return data
        }).then((data) => {
            setIsLoading(false)
            setListManga(data.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const renderListManga = () => {
        return listManga.map((manga) => {
            return <div key={manga.id} className={`${styles['wrapper-manga']} bg-light p-1`}>
                <Link to={`/manga/${manga.id}`} className='d-block h-75'>
                    <img
                        alt={manga.title}
                        className={`w-100 h-100 ${styles['image']}`}
                        src={manga.thumb}
                    />
                </Link>
                <div className=''>
                    <Link title={`${manga.title}`} to={`/manga/${manga.id}`} className={`text-decoration-none mt-2 ${styles['name']} text-black h-25`}>{manga.title}</Link>
                    <div className='h-25 pb-1'>
                        <div className={`${styles['status']} text-capitalize d-flex`}>
                            <p className={`${styles['title']}`}>Status: </p>
                            <span>{manga.status ? manga.status : "done"}</span>
                        </div>
                        <div className={`${styles['country']} text-capitalize d-flex`}>
                            <p className={`${styles['title']} text-capitalize`}>country: </p>
                            <span className='text-capitalize'>{manga.type}</span>
                        </div>
                    </div>
                </div>
            </div>
        })
    }

    useEffect(() => {
        fetchManga(page);
    }, [page])

    return (
        <>
            <div className={`${styles['home-page']}`}>
                <div className={`bg-light ${isLoading ? 'h-100vh' : ""}`}>
                    {
                        isLoading ? <LoadingSpinner /> : <>
                            <div className={`${styles['mangas']} pt-2 px-3`}>
                                {renderListManga(listManga)}
                            </div>
                            <div className='d-flex justify-content-center py-5'>
                                <button disabled={page === 1 ? true : false} onClick={() => {
                                    setIsLoading(true)
                                    setPage(page - 1)
                                }} className={`${page === 1 ? styles['disable'] : styles['left-button']} me-2`}>
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </button>
                                <span className={`${styles['left-button']} bg-light`}>{page}</span>
                                <button disabled={listManga.length < 25 ? true : false} onClick={() => {
                                    setIsLoading(true)
                                    setPage(page + 1)
                                }} className={`${listManga.length < 25 ? styles['disable'] : styles['right-button']} ms-2`}>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>

    );
}

export default HomePage;