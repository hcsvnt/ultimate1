import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import styles from './todo-list.module.css';
import TextInput from '../text-input/TextInput';
import Button from '../button/Button';
import TodoItem from '../todo-item/TodoItem';

import TodoListsContext from '../../hooks/TodoListsContext';

export default function TodoList() {

    let { todoLists } = useContext(TodoListsContext)
    
    let [name, setName] = useState('');
    // let [task, setTask] = useState([]);
    let [task, setTask] = useState(
            [
                {
                    name: "Mop the kitchen",
                    isDone: false
                },
                {
                    name: "Hoover the hoose",
                    isDone: true
                },

            ]
        );
        console.log(todoLists)
        console.log('oh my my')

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <TextInput value={name} placeholder="List name"/>
            </div>
            <div>
                {task.map((item, index) => {
                    let {name, isDone} = item
                    return (
                        <TodoItem itemName={name} itemIsDone={isDone} key={index} />
                    )
                    })}
                <TodoItem/>
                {/* 
                
                    HERE
                */}
            </div>
            <div className={styles.todoButtons}>
                <Button name="CANCEL" className="button--red"/>
                <Button name="ADD" />
            </div>
            <div>
                {/* CONTEXT TESTS */}
                <h2>
                    We testing here
                </h2>
                <p>
                    {/* {testContext} */}
                </p>
            </div>
            <div className={styles.bottom}>
                <Link to="/lists">
                    CANCEL
                </Link>
                {/* <a>CANCEL</a> */}
                <Button name="SAVE" className="button--big"/>
            </div>
        </div>
    )
}
