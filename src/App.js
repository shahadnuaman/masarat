import logo from './logo.svg';
import './App.css';
import Users from './components/users';
import Tag from './components/tag';
import SysUsers from './components/sysUsers';
import { Route , Routes, useNavigate} from 'react-router-dom';
import Home from './home';
import { Component } from 'react';
import NavBar from './components/navBar';
import Counters from './components/counters';
import Counter from './components/counter';
import Composing from './components/composing';
import Login from './components/login';

class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Routes>
   
    <Route path='/user' Component={Users} />
     <Route path ='/tag'   Component={Tag}   />
     <Route path ='/counters'  Component={Counters}   />
        <Route path='/counter'  Component={Counter} />
        <Route path='/composing' Component={Composing} />
        <Route  exact path="/"   Component={Login}/>



        </Routes>


    
    </div>
  );
}}

export default App;
