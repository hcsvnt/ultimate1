import React, {useState, useEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom';

import styles from './lists-display.module.css';

import ListsDisplayItem from '../lists-display-item/ListsDisplayItem';
import TextInput from '../text-input/TextInput';

import TodoListsContext from '../../hooks/TodoListsContext';


export default function ListsDisplay() {
    const history = useHistory()

    let { todoLists, setTodoLists } = useContext(TodoListsContext);

    let thisList = todoLists.filter(list => list.id === 'id-1')
    console.log('this sample list: ', thisList)

        // add params - "takes list"
    function addList() {
        let newTodoList = {
            id: `id-${todoLists.length + 1}`,
            name: '',
            task: []
        };
        let newTodoLists = [...todoLists, newTodoList];
        setTodoLists(newTodoLists);
        
        history.push(`/alist/${newTodoList.id}`)
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
 
            {todoLists.map(list => {
                let {id, name, task} = list
                return (
                    <ListsDisplayItem
                        key={id}
                        id={id}
                        name={name} 
                        task={task} 
                        createdAt="11-11-1911"
                        // stats="Completed: 0 Uncompleted: 0 All: 0"
                    />
                )
            })}
            <div className={styles.plus} onClick={addList}>
                +
            </div>
        </div>
    )   
}
