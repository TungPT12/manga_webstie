import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Chapter.module.css';

function ChapterPage() {
    const { id, chapterNumber } = useParams();
    console.log(id, chapterNumber)
    return (
        <div className={`${styles['chapter-page']}`}>
            <div className={`${styles['wrapper']}`}>
                <h1 className={`txt-primary ${styles['header-manga-name']} pt-3`}>
                    <Link to={`/manga/${id}`} className={`${styles['manga-name']}`}>Cuộc Sống "Thiện Xạ" Của Ông Chú Được Triệu Hồi Sang Dị Giới</Link>
                    <span> - Chapter 1</span>
                </h1>

            </div>
        </div>
    );
}

export default ChapterPage;