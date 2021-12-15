import React from 'react';
import Login from "./containers/Login";
import SignUp from './containers/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element = {<h1>Hello</h1>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
