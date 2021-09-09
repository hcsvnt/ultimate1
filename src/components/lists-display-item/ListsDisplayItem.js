import React from 'react';
import styles from './lists-display-item.module.css';


export default function Todo({name, createdAt, stats}) {
    return (
        <div className={styles.container}>
            <h4 className={styles.name}>
                {name}
            </h4>
            <p className={styles.date}>
                Created at: {createdAt}
            </p>
            <p className={styles.stats}>
                {stats}
            </p>
            {/* replace this wtih separate spans to do flex space-between */}
        </div>
    )
}
