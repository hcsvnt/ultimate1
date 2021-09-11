import React from 'react';
import styles from './lists-display-item.module.css';


export default function ListsDisplayItem({name, task, createdAt, stats}) {

        function displayThisList() {
            console.log(task)
        }

    return (
        <div 
            className={styles.container}
            onClick={displayThisList}
            >
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
