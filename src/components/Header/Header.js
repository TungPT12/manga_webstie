import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';

function Header() {
    const [key, setKey] = useState("")
    return (
        <div className={`${styles['header']}`}>
            <div className='d-flex justify-content-between align-items-center'>
                <Link to={'/'} className={`${styles['logo']} text-decoration-none`}>Manga</Link>
                <div className={`d-flex py-3 align-items-center ${styles['search-header']} `}>
                    <div className={`bg-light d-flex w-100 justify-content-center align-items-center pe-2`}>
                        <input value={key} onChange={(e) => {
                            setKey(e.target.value)
                        }} className={`w-100 ${styles['search-input']} p-1`} />
                        <Link to={`/manga/search/?name=${key}`}>
                            <FontAwesomeIcon icon={faSearch} className={`${styles['search-icon']}`} />
                        </Link>
                    </div>
                </div>
                <div className={`text-end ${styles['text-login']}`}>
                    đăng nhập / đăng kí
                </div>
            </div>
        </div>
    );
}

export default Header;