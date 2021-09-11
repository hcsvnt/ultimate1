import React, {useState} from 'react';
import styles from './lists-display.module.css';
import ListsDisplayItem from '../lists-display-item/ListsDisplayItem';
import TextInput from '../text-input/TextInput';



export default function ListsDisplay() {
    let [test, setTest] = useState('mamma mia')
    let [todoLists, setTodoLists] = useState(
        [    {
                name: "Fridge",
                task: [
                    {
                        name: "Buy butter, but not the meh one",
                        isDone: false
                    },
                    {
                        name: "Eat the watermelon before it rots",
                        isDone: false
                    },
                    {
                        name: "Remember about the salmon",
                        isDone: false
                    },
                ]
            },
            {
                name: "Work",
                task: [
                    {
                        name: "Decide whether to useContext",
                        isDone: false
                    },
                    {
                        name: "Remember to add all the necessary icons to your app",
                        isDone: false
                    },
                    {
                        name: "Add mobile styling nobody asked for",
                        isDone: true
                    },
                ]
            }
        ]
    )
        // add params - "takes list"
    function addList() {
        let newTodoList = {
            name: 'test',
            task: []
        };
        let newTodoLists = [...todoLists, newTodoList];
        setTodoLists(newTodoLists);
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
                    <ListsDisplayItem
                    key={index}
                    name={name} 
                    task={task} 
                    createdAt="11-11-1911"
                    stats="Completed: 0 Uncompleted: 0 All: 0"/>
                )
            })}
  

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
                +
            </div>
        </div>
    )   
}
