import React from 'react';

import styles from './layout.module.css';

import Header from '../header/Header';

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
