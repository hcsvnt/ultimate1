import './App.css';
import Layout from './components/layout/layout';
import Login from './components/login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div>
      <Layout>
        {/* <Login /> */}
        <Register />
      </Layout>
    </div>
  );
}

export default App;
