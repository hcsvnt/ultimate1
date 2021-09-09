import React from 'react';
import styles from './text-input.module.css';

export default function TextInput({placeholder}) {
    return (
        <input className={styles.input} type="text" placeholder={placeholder}/>
    )
}
