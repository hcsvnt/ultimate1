import React, {useState} from 'react';
import styles from './todo-list.module.css';
import TextInput from '../text-input/TextInput';
import Button from '../button/Button';
import TodoItem from '../todo-item/TodoItem';

export default function TodoList() {
    
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
            <div className={styles.bottom}>
                <a>CANCEL</a>
                <Button name="SAVE" className="button--big"/>
            </div>
        </div>
    )
}
