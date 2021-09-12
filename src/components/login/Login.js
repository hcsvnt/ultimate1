import React from 'react';
import {Link} from 'react-router-dom';
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
            <Link to="lists">
                <Button name="Login" className="button--big"/>
            </Link>
            <p>
                or
            </p>
            {/* <a>create an account</a> */}
            <Link to="/register">create an account</Link>
        </div>
    )
}
