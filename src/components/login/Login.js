import React from 'react';
import styles from './login.module.css';

export default function Login() {
    return (
        <div className={styles.container}>
            <h2>
                Login
            </h2>
            <input type="text" placeholder="Email or Username"/>
            <input type="text" placeholder="Password"/>
            <button>
                Login
            </button>
            <p>
                or
            </p>
            <a>create an account</a>
        </div>
    )
}
