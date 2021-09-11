import React from 'react';
import './App.css';
// import styles from './global.module.css';
import Layout from './components/layout/layout';
import Login from './components/login/Login';
import Register from './components/Register/Register';
import ListsDisplay from './components/lists-display/ListsDisplay';
import TodoList from './components/todo-list/TodoList';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// function App() {
//   return (
//     <div>
//       <Layout>
//         <Login />
//         <Register />
//         <ListsDisplay/>
//         <TodoList />
//       </Layout>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <h1>
                Welcome Home, Sir!
              </h1>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/lists">
              <ListsDisplay/>
            </Route>
            <Route path="/list">
              <TodoList />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
