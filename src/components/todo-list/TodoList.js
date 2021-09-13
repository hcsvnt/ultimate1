import React, { useState, useContext } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import styles from './todo-list.module.css';

import TextInput from '../text-input/TextInput';
import Button from '../button/Button';
import TodoItem from '../todo-item/TodoItem';

import TodoListsContext from '../../hooks/TodoListsContext';


export default function TodoList() {   
    const history = useHistory();
    const {id} = useParams();
    
    let todoListsContext = useContext(TodoListsContext)
    let {todoLists, setTodoLists} = todoListsContext;

    let [name, setName] = useState(todoLists[id].name);
    let [task, setTask] = useState(todoLists[id].task);
    // here im just setting the values from context initially, but whatever changes inside this
    // component is only local to this component, i need to update the context state via the add func

    // TODO pass setTask etc down to todoitem

    function handleName(event) {
        setName(event.target.value)
        console.log(event.target.value)
    }

    function updateList() {
        let updatedList = { name, task };
        let updatedLists = [...todoLists];
        updatedLists.splice(id, 1, updatedList);
        setTodoLists(updatedLists);

        history.push('/lists')
    }
 
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
                        <TodoItem itemName={name} itemIsDone={isDone} key={index} />
                    )
                    })}
                <TodoItem/>
            </div>
            <div className={styles.todoButtons}>
                <Button name="CANCEL" className="button--red"/>
                <Button 
                    name="ADD"
                    // onClick={updateList} 
                    />
            </div>
            <div className={styles.bottom}>
                <Link to="/lists">
                    CANCEL
                </Link>
                <Button
                    name="SAVE" 
                    className="button--big"
                    onClick={updateList}
                />
            </div>
        </div>
    )
}
