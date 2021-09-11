import React from 'react';
import styles from './text-input.module.css';

export default function TextInput({value, placeholder}) {
    return (
        <input 
        className={styles.input} 
        type="text"
        value={value} 
        placeholder={placeholder}/>
    )
}
