import React from 'react';
import styles from './todo-list.module.css';
import TextInput from '../text-input/TextInput';
import Button from '../button/Button';
import TodoItem from '../todo-item/TodoItem';

export default function TodoList() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <TextInput placeholder="List name"/>
            </div>
            <div>
                <TodoItem/>
                <TodoItem/>
                {/* <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/> */}
            </div>
            <div className={styles.todoButtons}>
                <Button name="CANCEL" className="button--red"/>
                <Button name="ADD" />
            </div>
            <div className={styles.bottom}>
                <a>CANCEL</a>
                <Button name="SAVE" className="button--big"/>
            </div>
        </div>
    )
}
