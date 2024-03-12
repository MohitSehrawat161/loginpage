import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import logo from './logo.svg';
import './App.scss';
import SignupPage  from './components/signupPage/SignupPage';
import { Routes,Route } from 'react-router-dom';
import LoginPage from './components/loginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <Routes>
<Route path='/' element={<SignupPage/>}/>
<Route path='/login' element={<LoginPage/>}/>
     
      </Routes>
    
    </div>
  );
}

export default App;
