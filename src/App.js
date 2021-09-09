import './App.css';
import Layout from './components/layout/layout';
import Login from './components/login/Login';
import Register from './components/Register/Register';
import TodoList from './components/lists-display/ListsDisplay';

function App() {
  return (
    <div>
      <Layout>
        {/* <Login /> */}
        {/* <Register /> */}
        <TodoList/>
      </Layout>
    </div>
  );
}

export default App;
