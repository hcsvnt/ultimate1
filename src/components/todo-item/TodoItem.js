import React, { useState } from 'react';
import { isDOMComponent } from 'react-dom/test-utils';

import styles from './todo-item.module.css';

function TodoItem({itemName, itemIsDone, isNew, handleNewItemName, handleNewItemIsDone}) {
    let [name, setName] = useState(itemName);
    let [isDone, setIsDone] = useState(itemIsDone);

    function handleName(event) {
        setName(event.target.value)
        if(isNew) {
            handleNewItemName(name);
        }
    }
    // how to make this more reusable
    
    function handleIsDone() {
        setIsDone(!isDone)
        if(isNew) {
            handleNewItemIsDone(isDone);
            
        }
    }

    return (
        <div className={styles.container}>
            <input 
                type="checkbox" 
                name="isDone" 
                id="name" 
                value={isDone} 
                onChange={handleIsDone} 
                title="Task completed" 
                aria-label="Task completed"
            />
            <input 
                type="text" 
                name="name" 
                id="name" 
                value={name}
                onChange={handleName} 
                aria-label="Task name" 
                placeholder="Task name"
            />
        </div>
    )
}

export default TodoItem;
