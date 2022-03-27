import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import Login from '../src/components/Login';
import  Signup from '../src/components/Signup';

function App() {
  return (
    <div className="App">
      <br/>
      <Login/> <br/>
      <Signup/>
    </div>
  );
}

export default App;
