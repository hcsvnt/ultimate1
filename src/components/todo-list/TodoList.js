import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import styles from './todo-list.module.css';

import TextInput from '../text-input/TextInput';
import Button from '../button/Button';
import TodoItem from '../todo-item/TodoItem';

import TodoListsContext from '../../hooks/TodoListsContext';


export default function TodoList() {   
    const history = useHistory();
    const {id} = useParams();
    
    let {todoLists, setTodoLists} = useContext(TodoListsContext);
    let currentList = todoLists.filter(list => list.id === id)[0]

    let [name, setName] = useState(currentList.name);   
    let [task, setTask] = useState(currentList.task);

    let [newItemKey, setNewItemKey] = useState(0);

    const ref = useRef(null);

    // here im just setting the values from context initially, but whatever changes inside this
    // component is only local to this component, i need to update the context state via the add func

    // TODO pass setTask etc down to todoitem

    function handleName(event) {
        setName(event.target.value)
        console.log(event.target.value)
    };

    function saveList() {
        let updatedList = { id, name, task };
        let updatedLists = [...todoLists.filter(list => list.id !== id), updatedList];
        setTodoLists(updatedLists);

        history.push('/lists')
    };

    function handleTask(index) {
        // callback function pass to child as prop and set state to child state or smth

    }

    function cancelNewTask() {
        console.log('cancel');
        setNewItemKey(newItemKey += 1);
    }

    function addTask() {
        // console.log('adding task', newItem.current)
        
    }

    useEffect(() => {
        console.log(ref.current)
    }, [])

 
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <TextInput 
                    value={name}
                    onChange={handleName}
                    placeholder="List name"/>
            </div>
            <div>
                {task.map((item, index) => {
                    let {name, isDone} = item
                    return (
                        <TodoItem key={index} itemName={name} itemIsDone={isDone} onChange={handleTask(index)} />
                    )
                    })}
                <TodoItem key={newItemKey} ref={ref} />
                {/* this should probably be just an input */}
            </div>
            <div className={styles.todoButtons}>
                <Button name="CANCEL" className="button--red" onClick={cancelNewTask}/>
                <Button 
                    name="ADD"
                    onClick={addTask} 
                    />
            </div>
            <div className={styles.bottom}>
                <Link to="/lists">
                    CANCEL
                </Link>
                <Button
                    name="SAVE" 
                    className="button--big"
                    onClick={saveList}
                />
            </div>
        </div>
    )
}
