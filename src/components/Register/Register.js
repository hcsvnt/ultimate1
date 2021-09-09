import React from 'react';
import loginStyles from '../login/login.module.css';
import styles from './register.module.css';
import TextInput from '../text-input/TextInput';
import Button from '../button/Button';

export default function Login() {
    return (
        <div className={loginStyles.container}>
            <span className={styles.arrow}>left</span>
            <h2 className={styles.title}>
                Create a new account
            </h2>
            <TextInput placeholder="Username"/>
            <TextInput placeholder="Email"/>
            <TextInput placeholder="Password"/>
            <TextInput placeholder="Repeat password"/>
            <Button name="Create" className="button--big"/>
        </div>
    )
}
