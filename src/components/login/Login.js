import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import styles from './login.module.css';

import TextInput from '../text-input/TextInput';
import Button from '../button/Button';

export default function Login() {
    const history = useHistory();

    function logIn() {
        history.push('/lists')
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Login
            </h2>
            <TextInput placeholder="Email or Username"/>
            <TextInput placeholder="Password"/>
            <Button name="Login" className="button--big" onClick={logIn}/>
            <p>
                or
            </p>
            <Link to="/register">create an account</Link>
        </div>
    )
}
