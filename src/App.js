import logo from './logo.svg';
import './App.css';
import Login from './Components/login/Login';
import { Register } from './Components/register/Register';
import Home from './Components/home/Home';
function App() {
  return (
    <div className="App">
      <h2>Shopping App Loading.....</h2>
      <Login />
      <Register />
      <Home />
    </div>
  );
  
}

export default App;
