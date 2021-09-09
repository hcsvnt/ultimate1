import React from 'react';
import styles from './login.module.css';
import TextInput from '../text-input/TextInput';
import Button from '../button/Button';

export default function Login() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Login
            </h2>
            <TextInput placeholder="Email or Username"/>
            <TextInput placeholder="Password"/>
            <Button name="Login" className="button--big"/>
            <p>
                or
            </p>
            <a>create an account</a>
        </div>
    )
}
