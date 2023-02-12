import logo from './logo.svg';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState('naman@gmail.com')

  useEffect(()=>{
    console.log("USER",user)
  },[user])
  const userFunc = (userid)=>{
    setUser(userid)
  }
  return (
    <div className="App">
       <Router>
     <Routes>
         <Route exact path="/" element = {<Home user={user}/>}></Route>
         <Route exact path="/login" element = {<Login userFunc={userFunc}/>}></Route>
         <Route exact path="/signup" element = {<Signup/>}></Route>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
