import React from 'react';
import styles from './button.module.css';

export default function button({name}) {
    return (
        <button className={styles.button}>
            {name}
        </button>
    )
}
