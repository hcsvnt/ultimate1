import React from 'react';
import { Link } from 'react-router-dom';

import styles from './register.module.css';

import TextInput from '../text-input/TextInput';
import Button from '../button/Button';

export default function Login() {
    return (
        <div className={styles.container}>
            <span className={styles.arrow}>
                <Link exact to="/">
                    left
                </Link>
            </span>
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
