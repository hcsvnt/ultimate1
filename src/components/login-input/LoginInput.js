import React from 'react';
import styles from './login-input.module.css';

export default function LoginInput({placeholder}) {
    return (
        <input className={styles.input} type="text" placeholder={placeholder}/>
    )
}
