import React, {useState, useEffect, useContext} from 'react';
import { Redirect } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import styles from './lists-display.module.css';
import ListsDisplayItem from '../lists-display-item/ListsDisplayItem';
import TextInput from '../text-input/TextInput';

import TodoList from '../todo-list/TodoList';

import TodoListsContext from '../../hooks/TodoListsContext';


export default function ListsDisplay() {

    let { todoLists, setTodoLists } = useContext(TodoListsContext);

        // add params - "takes list"
    function addList() {
        let newTodoList = {
            name: 'test',
            task: []
        };
        let newTodoLists = [...todoLists, newTodoList];
        setTodoLists(newTodoLists);
        // <Redirect to="/alist" />
        
    }

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
                    <Link to={`/alist/${index}`}>

                        <ListsDisplayItem
                            key={index}
                            name={name} 
                            task={task} 
                            createdAt="11-11-1911"
                            stats="Completed: 0 Uncompleted: 0 All: 0"
                            // onClick={() => console.log('aaa')}
                            />
                    </Link>
                )
            })};

            {/* look scrimba useparams  -> i need to move this switch to app.js afaik
            basically my links are good, now i need to render TODOLIST from inside the switch in app.js
            and get the list id from useParams, then just get the appropriate list from context. simple eh!
            */}

            <Switch>
                <Route path="/alist/1">
                    {/* <TodoList listName={todoLists[1].name} tasksArray={todoLists[1].task}/> */}
                    <TodoList listName="a name here" tasksArray={[1, 2]}/>
                </Route>
                {/* {todoLists.map((list, index) => {
                    let {name, task} = list
                    return(
                        <Route path={`/alist/${index}`}>
                            <TodoList name={name} task={task}/>
                        </Route>
                    )
                })} */}
            </Switch>
  

            {/* <ListsDisplayItem name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <ListsDisplayItem name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <ListsDisplayItem name="Kuchnia eksperymentalna Józefa Stalina" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <ListsDisplayItem name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <ListsDisplayItem name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <ListsDisplayItem name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <ListsDisplayItem name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <ListsDisplayItem name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <ListsDisplayItem name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <ListsDisplayItem name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <ListsDisplayItem name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" />
            <ListsDisplayItem name="Szkoła" createdAt="11-05-1999" stats="Completed: 3 Uncompleted: 20 All: 23" /> */}
            <div 
                className={styles.plus}
                onClick={addList}
                >
                    <Link to="/alist">
                        +
                    </Link>
            </div>
        </div>
    )   
}
