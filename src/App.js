import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Layout from './components/layout/layout';
import Login from './components/login/Login';
import Register from './components/Register/Register';
import ListsDisplay from './components/lists-display/ListsDisplay';
import TodoList from './components/todo-list/TodoList';

import TodoListsContext from './hooks/TodoListsContext';

// MAKE FETCH A CUSTOM HOOK MAAAN!

const testUser = {
  "username": "loko",
  "email": "mailpaziem@gmail.com",
  "password": "lokoestamuyloco",
}
const testUser2 = {
  username: "loko2",
  email: "mailpaziem@gmail.com",
  password: "mati321",
}

const apiUrl = 'https://recruitment.ultimate.systems';

function App() {

  let [todoLists, setTodoLists] = useState(
    [    {
            id: "id-1",
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
          id: "id-2",
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


async function registerUser(user) {
  const options = {
    method: 'POST',
    body: JSON.stringify(user)
  }

  try {
    const response = await fetch(`${apiUrl}/auth/local/register`, options);
    const data = await response.json();
    console.log(data)
    return data

  } catch (e) {
    console.error(e)
  }
}

async function login(user) {
  let {username, password} = user;
  let credentials = {
    identifier: username,
    password: password
  }
  const options = {
    method: 'POST',
    body: JSON.stringify(credentials)
  }

  try {
    const response = await fetch(`${apiUrl}/auth/local`, options);
    const data = await response.json();
    console.log(data)
    return data

  } catch (e) {
    console.error(e)
  }
}

async function getTodoLists() {
  try {
    const response = await fetch(`${apiUrl}/to-do-lists`);
    const data = await response.json();
    console.log(data)
    return data

  } catch (e) {
    console.error(e)
  }
}

useEffect(() => {
  // registerUser(testUser);
  // login(testUser);
  // getTodoLists(testUser)


},[])

  return (
    <div>
      <Router>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/register">
                <Register  />
              </Route>
              <TodoListsContext.Provider value={{todoLists, setTodoLists}}>
                <Route path="/lists">
                    <ListsDisplay/>
                </Route>
                  <Route path="/alist/:id">
                    <TodoList/>
                </Route>
              </TodoListsContext.Provider>
            </Switch>
          </Layout>
      </Router>
    </div>
  );
}

export default App;

  

