import React from 'react';
import Header from '../header/Header';
import styles from './layout.module.css';

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.flex}>
                {children} 
            </div>
        </div>
    )
}
