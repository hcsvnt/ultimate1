import React from 'react';

import styles from './lists-display-item.module.css';

import { useHistory } from 'react-router';


export default function ListsDisplayItem({index, name, task, createdAt, stats}) {
    const history = useHistory();

        function displayThisList() {
            console.log(task)
            history.push(`/alist/${index}`)
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
