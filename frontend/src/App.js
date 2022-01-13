import React from 'react';
import { useState } from 'react';
import Login from "./containers/Login";
import SignUp from './containers/SignUp';
import HomePage from './containers/HomePage';
import Activation from './containers/Activation';
import CreateActivity from './containers/CreateActivity';
import CampIntro from './containers/CampIntro';
import AnswerForm from './containers/AnswerForm';
import FilterPage from './containers/FilterPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {

	
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage /> } />
					<Route path="/search" element={<FilterPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/activation/:uid/:token" element={<Activation />} />
                    <Route path="/create" element={<CreateActivity />} />
                    <Route path="/camping_info/:campId" element={<CampIntro />} />
                    <Route path="/answer_form/:campId" element={<AnswerForm />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
