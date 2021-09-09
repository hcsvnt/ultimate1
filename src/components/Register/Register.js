import React from 'react';
import loginStyles from '../login/login.module.css';
import styles from './register.module.css';
import LoginInput from '../login-input/LoginInput';
import Button from '../button/Button';

export default function Login() {
    return (
        <div className={loginStyles.container}>
            <span className={styles.arrow}>left</span>
            <h2 className={styles.title}>
                Create a new account
            </h2>
            <LoginInput placeholder="Username"/>
            <LoginInput placeholder="Email"/>
            <LoginInput placeholder="Password"/>
            <LoginInput placeholder="Repeat password"/>
            <Button name="Create"/>
        </div>
    )
}
