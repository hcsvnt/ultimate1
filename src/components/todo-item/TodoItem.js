import React, { useState } from 'react';

import styles from './todo-item.module.css';

export default function TodoItem({itemName, itemIsDone}) {
    let [name, setName] = useState(itemName);
    let [isDone, setIsDone] = useState(itemIsDone);

    function handleName(event) {
        setName(event.target.value)
        console.log(name)
    }
    // how to make this more reusable
    
    function handleIsDone() {
        setIsDone(!isDone)
        console.log(isDone)
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
