import React, {useState, useEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom';

import styles from './lists-display.module.css';

import ListsDisplayItem from '../lists-display-item/ListsDisplayItem';
import TextInput from '../text-input/TextInput';

import TodoListsContext from '../../hooks/TodoListsContext';


export default function ListsDisplay() {
    const history = useHistory()

    let { todoLists, setTodoLists } = useContext(TodoListsContext);

        // add params - "takes list"
    function addList() {
        let newTodoList = {
            name: 'test',
            task: []
        };
        let newTodoLists = [...todoLists, newTodoList];
        setTodoLists(newTodoLists);
        
        history.push(`/alist/${newTodoLists.length - 1}`)
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <TextInput placeholder="Search"/>
                {/* should the below be a component? */}
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
 
            {todoLists.map((list, index) => {
                let {name, task} = list
                return (
                    <ListsDisplayItem
                        key={index}
                        index={index}
                        name={name} 
                        task={task} 
                        createdAt="11-11-1911"
                        stats="Completed: 0 Uncompleted: 0 All: 0"
                    />
                )
            })}
            <div className={styles.plus} onClick={addList}>
                +
            </div>
        </div>
    )   
}
