import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className={`${styles['header']}`}>
            <div className='d-flex justify-content-between align-items-center'>
                <Link to={'/'} className={`${styles['logo']} text-decoration-none`}>Manga</Link>
                <div className={`d-flex py-3 align-items-center ${styles['search-input']}`}>
                    <input className='w-100' />
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className={`text-end ${styles['text-login']}`}>
                    đăng nhập/ đăng kí
                </div>
            </div>
        </div>
    );
}

export default Header;