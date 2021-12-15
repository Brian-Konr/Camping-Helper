import React from 'react';
import Login from "./containers/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element = {<h1>Hello</h1>} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
