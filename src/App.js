import './App.css';
// import styles from './global.module.css';
import Layout from './components/layout/layout';
import Login from './components/login/Login';
import Register from './components/Register/Register';
import ListsDisplay from './components/lists-display/ListsDisplay';
import TodoList from './components/todo-list/TodoList';

function App() {
  return (
    <div>
      <Layout>
        <Login />
        <Register />
        <ListsDisplay/>
        <TodoList />
      </Layout>
    </div>
  );
}

export default App;
