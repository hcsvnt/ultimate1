import React from 'react';
import styles from './lists-display.module.css';
import Todo from '../lists-display-item/ListsDisplayItem';
import LoginInput from '../login-input/LoginInput';



export default function TodoList() {
    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>

            <LoginInput placeholder="Search"/>
                <select>
                    <option>
                        Sort by
                    </option>
                    <option>
                        name
                    </option>
                    <option>
                        date
                    </option>
                    <option>
                        maybe most Uncompleted?
                    </option>
                </select>
            </div>
            <Todo name="Praca" createdAt="11-11-1989" stats="Completed: 1 Uncompleted: 17 All: 18" />
            <Todo name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <Todo name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <Todo name="Kuchnia eksperymentalna Józefa Stalina" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <Todo name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <Todo name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <Todo name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <Todo name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <Todo name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <Todo name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <Todo name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <Todo name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <Todo name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <div className={styles.plus}>
                +
            </div>
        </div>
    )   
}
