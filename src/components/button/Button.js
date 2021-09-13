import React from 'react';

import styles from './button.module.css';

export default function Button({name, className, onClick}) {
    return (
        <button 
            className={`${styles.button} ${styles[className]}`}
            onClick={onClick}
            >
            {name}
        </button>
    )
}
