import React from 'react';
import styles from './login.module.css';
import LoginInput from '../login-input/LoginInput';
import Button from '../button/Button';

export default function Login() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Login
            </h2>
            <LoginInput placeholder="Email or Username"/>
            <LoginInput placeholder="Password"/>
            <Button name="Login"/>
            <p>
                or
            </p>
            <a>create an account</a>
        </div>
    )
}
