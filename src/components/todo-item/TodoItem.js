import React from 'react';
import styles from './todo-item.module.css';

export default function TodoItem() {
    return (
        <div className={styles.container}>
            <input type="checkbox" title="Task completed" aria-label="Task completed"/>
            <input type="text" aria-label="Task name" placeholder="Task name"/>
        </div>
    )
}
