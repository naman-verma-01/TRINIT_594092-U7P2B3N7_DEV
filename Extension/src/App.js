import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes, Switch } from "react-router-dom";
import Home from './Page/Home';
import Login from './Page/Login';
import Signup from './Page/Signup';
/*global chrome*/
function App() {
  let status = localStorage.getItem('statusExt')
  let user = localStorage.getItem('userid')
  const [toggle, setToggle] = useState(true)

  const toggler = ()=>{
    setToggle(!toggle)
  }
  //window.alert(`APPstatus ${status} ${user}`)
  return (
    <div >
      {status === null?<><Signup toggler={toggler}/></>:null}
      {status === "false"?<><Login toggler={toggler}/></>:null}
      {status === "true"?<><Home toggler={toggler}/></>:null}
    
      {/*<BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
  </BrowserRouter>*/}
    </div>
  );
}

export default App;
