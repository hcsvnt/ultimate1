import React from 'react';
import styles from './button.module.css';

export default function Button({name, className}) {
    return (
        <button className={`${styles.button} ${styles[className]}`}>
            {name}
        </button>
    )
}
