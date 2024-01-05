import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './SearchPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function SearchPage() {
    const types = [
        'Action',
        'Fantasy',
        'Harem',
        'Drama',
        'Comedy',
        'Adventure',
        'Isekai',
        'Slice of Life',
        'Romance',
        'Martial Arts',
        'Seinen']
    let [searchParams] = useSearchParams();
    // if()
    if (console.log(searchParams.get('name'))) {
        console.log(searchParams.get('name'))
    } else {
        console.log(searchParams.get('type'))
    }

    const renderTypes = (types) => {
        return types.map((type) => {
            return <li>
                <Link to={`/manga/search/?type=${type}`} className={`${styles['type']} text-capitalize`}>{type}</Link>
            </li>
        })
    }

    return (
        <div className={`${styles['search-page']}`}>
            <div className={`bg-light d-flex p-2`}>
                <div className={`${styles['list-manga']} f-3`}>
                    <div className={`${styles['mangas']}  px-3`}>
                        <div className={`${styles['wrapper-manga']} bg-light p-1`}>
                            <Link to={`/manga/${'manga.id'}`} className='d-block h-75'>
                                <img
                                    alt={'manga.title'}
                                    className={`w-100 h-100 ${styles['image']}`}
                                    src="https://usc1.contabostorage.com/scraper/mangas/659524dd597f3b00281f06ff/thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=c10e9464b360c31ce8abea9b266076f6%2F20240105%2Fdefault%2Fs3%2Faws4_request&X-Amz-Date=20240105T071522Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3c9df8878dd5897f15c29acfb3c5e8442c0a9a0ad6e6732d8e6fbcee1febd9dd"
                                />
                            </Link>
                            <div className=''>
                                <Link title={`${"manga.title"}`} to={`/manga/${'manga.id'}`} className={`text-decoration-none mt-2 ${styles['name']} text-black h-25`}>{"manga.title"}</Link>
                                <div className='h-25 pb-1'>
                                    <div className={`${styles['status']} text-capitalize d-flex`}>
                                        <p className={`${styles['title']}`}>Status: </p>
                                        <span>ongoing</span>
                                        {/* <span>{manga.status ? manga.status : "done"}</span> */}
                                    </div>
                                    <div className={`${styles['country']} text-capitalize d-flex`}>
                                        <p className={`${styles['title']} text-capitalize`}>country: </p>
                                        <span className='text-capitalize'>{"manga.type"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles['wrapper-manga']} bg-light p-1`}>
                            <Link to={`/manga/${'manga.id'}`} className='d-block h-75'>
                                <img
                                    alt={'manga.title'}
                                    className={`w-100 h-100 ${styles['image']}`}
                                    src="https://usc1.contabostorage.com/scraper/mangas/659524dd597f3b00281f06ff/thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=c10e9464b360c31ce8abea9b266076f6%2F20240105%2Fdefault%2Fs3%2Faws4_request&X-Amz-Date=20240105T071522Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3c9df8878dd5897f15c29acfb3c5e8442c0a9a0ad6e6732d8e6fbcee1febd9dd"
                                />
                            </Link>
                            <div className=''>
                                <Link title={`${"manga.title"}`} to={`/manga/${'manga.id'}`} className={`text-decoration-none mt-2 ${styles['name']} text-black h-25`}>{"manga.title"}</Link>
                                <div className='h-25 pb-1'>
                                    <div className={`${styles['status']} text-capitalize d-flex`}>
                                        <p className={`${styles['title']}`}>Status: </p>
                                        <span>ongoing</span>
                                        {/* <span>{manga.status ? manga.status : "done"}</span> */}
                                    </div>
                                    <div className={`${styles['country']} text-capitalize d-flex`}>
                                        <p className={`${styles['title']} text-capitalize`}>country: </p>
                                        <span className='text-capitalize'>{"manga.type"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles['wrapper-manga']} bg-light p-1`}>
                            <Link to={`/manga/${'manga.id'}`} className='d-block h-75'>
                                <img
                                    alt={'manga.title'}
                                    className={`w-100 h-100 ${styles['image']}`}
                                    src="https://usc1.contabostorage.com/scraper/mangas/659524dd597f3b00281f06ff/thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=c10e9464b360c31ce8abea9b266076f6%2F20240105%2Fdefault%2Fs3%2Faws4_request&X-Amz-Date=20240105T071522Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3c9df8878dd5897f15c29acfb3c5e8442c0a9a0ad6e6732d8e6fbcee1febd9dd"
                                />
                            </Link>
                            <div className=''>
                                <Link title={`${"manga.title"}`} to={`/manga/${'manga.id'}`} className={`text-decoration-none mt-2 ${styles['name']} text-black h-25`}>{"manga.title"}</Link>
                                <div className='h-25 pb-1'>
                                    <div className={`${styles['status']} text-capitalize d-flex`}>
                                        <p className={`${styles['title']}`}>Status: </p>
                                        <span>ongoing</span>
                                        {/* <span>{manga.status ? manga.status : "done"}</span> */}
                                    </div>
                                    <div className={`${styles['country']} text-capitalize d-flex`}>
                                        <p className={`${styles['title']} text-capitalize`}>country: </p>
                                        <span className='text-capitalize'>{"manga.type"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles['wrapper-manga']} bg-light p-1`}>
                            <Link to={`/manga/${'manga.id'}`} className='d-block h-75'>
                                <img
                                    alt={'manga.title'}
                                    className={`w-100 h-100 ${styles['image']}`}
                                    src="https://usc1.contabostorage.com/scraper/mangas/659524dd597f3b00281f06ff/thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=c10e9464b360c31ce8abea9b266076f6%2F20240105%2Fdefault%2Fs3%2Faws4_request&X-Amz-Date=20240105T071522Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3c9df8878dd5897f15c29acfb3c5e8442c0a9a0ad6e6732d8e6fbcee1febd9dd"
                                />
                            </Link>
                            <div className=''>
                                <Link title={`${"manga.title"}`} to={`/manga/${'manga.id'}`} className={`text-decoration-none mt-2 ${styles['name']} text-black h-25`}>{"manga.title"}</Link>
                                <div className='h-25 pb-1'>
                                    <div className={`${styles['status']} text-capitalize d-flex`}>
                                        <p className={`${styles['title']}`}>Status: </p>
                                        <span>ongoing</span>
                                        {/* <span>{manga.status ? manga.status : "done"}</span> */}
                                    </div>
                                    <div className={`${styles['country']} text-capitalize d-flex`}>
                                        <p className={`${styles['title']} text-capitalize`}>country: </p>
                                        <span className='text-capitalize'>{"manga.type"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles['wrapper-manga']} bg-light p-1`}>
                            <Link to={`/manga/${'manga.id'}`} className='d-block h-75'>
                                <img
                                    alt={'manga.title'}
                                    className={`w-100 h-100 ${styles['image']}`}
                                    src="https://usc1.contabostorage.com/scraper/mangas/659524dd597f3b00281f06ff/thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=c10e9464b360c31ce8abea9b266076f6%2F20240105%2Fdefault%2Fs3%2Faws4_request&X-Amz-Date=20240105T071522Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3c9df8878dd5897f15c29acfb3c5e8442c0a9a0ad6e6732d8e6fbcee1febd9dd"
                                />
                            </Link>
                            <div className=''>
                                <Link title={`${"manga.title"}`} to={`/manga/${'manga.id'}`} className={`text-decoration-none mt-2 ${styles['name']} text-black h-25`}>{"manga.title"}</Link>
                                <div className='h-25 pb-1'>
                                    <div className={`${styles['status']} text-capitalize d-flex`}>
                                        <p className={`${styles['title']}`}>Status: </p>
                                        <span>ongoing</span>
                                        {/* <span>{manga.status ? manga.status : "done"}</span> */}
                                    </div>
                                    <div className={`${styles['country']} text-capitalize d-flex`}>
                                        <p className={`${styles['title']} text-capitalize`}>country: </p>
                                        <span className='text-capitalize'>{"manga.type"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles['wrapper-manga']} bg-light p-1`}>
                            <Link to={`/manga/${'manga.id'}`} className='d-block h-75'>
                                <img
                                    alt={'manga.title'}
                                    className={`w-100 h-100 ${styles['image']}`}
                                    src="https://usc1.contabostorage.com/scraper/mangas/659524dd597f3b00281f06ff/thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=c10e9464b360c31ce8abea9b266076f6%2F20240105%2Fdefault%2Fs3%2Faws4_request&X-Amz-Date=20240105T071522Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3c9df8878dd5897f15c29acfb3c5e8442c0a9a0ad6e6732d8e6fbcee1febd9dd"
                                />
                            </Link>
                            <div className=''>
                                <Link title={`${"manga.title"}`} to={`/manga/${'manga.id'}`} className={`text-decoration-none mt-2 ${styles['name']} text-black h-25`}>{"manga.titleffffffffffffffffffffffffffff"}</Link>
                                <div className='h-25 pb-1'>
                                    <div className={`${styles['status']} text-capitalize d-flex`}>
                                        <p className={`${styles['title']}`}>Status: </p>
                                        <span>ongoing</span>
                                        {/* <span>{manga.status ? manga.status : "done"}</span> */}
                                    </div>
                                    <div className={`${styles['country']} text-capitalize d-flex`}>
                                        <p className={`${styles['title']} text-capitalize`}>country: </p>
                                        <span className='text-capitalize'>{"manga.type"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center py-5'>
                        <button onClick={() => {
                            // setIsLoading(true)
                            // setPage(page - 1)
                        }} className={`${styles['left-button']} me-2`}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                        <span className={`${styles['left-button']} bg-light`}>{"page"}</span>
                        <button onClick={() => {
                            // setIsLoading(true)
                            // setPage(page + 1)
                            // }} className={`${listManga.length < 25 ? styles['disable'] : styles['right-button']} ms-2`}>
                        }} className={`${styles['right-button']} ms-2`}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </div>
                </div>
                <div className={`${styles['manga-type']} f-1 me-2`}>
                    <h2 className={`${styles['type-title']}`}>
                        <b>Type</b>
                    </h2>
                    <ul className={`p-0`}>
                        {renderTypes(types)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SearchPage;