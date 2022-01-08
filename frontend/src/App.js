import React from 'react';
import { useState } from 'react';
import Login from "./containers/Login";
import SignUp from './containers/SignUp';
import HotCard from './containers/HotCard';
import HomePage from './containers/HomePage';
import Activation from './containers/Activation';
import CreateActivity from './containers/CreateActivity';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage isLogin = {isLogin}/> } />
          <Route path="/login" element={<Login setIsLogin = {setIsLogin}/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/activation/:uid/:token" element={<Activation />} />
          <Route path="/create" element={<CreateActivity />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
