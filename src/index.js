import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './components/counter';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import { Test } from './components/test';
///import Counter from './components/counter';
// import Tag from './components/tag'
import 'bootstrap/dist/css/bootstrap.css';
import './style/login.css'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar';
// import NavBar from './components/navBar';
 import 'react-toastify/dist/ReactToastify.css'
        
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
