import React from 'react';

import styles from './text-input.module.css';

export default function TextInput({value, placeholder, onChange}) {
    return (
        <input 
        className={styles.input} 
        type="text"
        value={value} 
        onChange={onChange}
        placeholder={placeholder}/>
    )
}
