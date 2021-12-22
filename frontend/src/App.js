import React from 'react';
import Login from "./containers/Login";
import SignUp from './containers/SignUp';
import HotCard from './containers/HotCard';
import HomePage from './containers/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage /> } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
