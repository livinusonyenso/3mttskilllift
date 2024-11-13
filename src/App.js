import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar  from './component/Navbar'
import Mentor from './pages/Mentor';
import PeerGroup from './pages/PeerGroup';
import Courses from './pages/Courses'
import RegisterMentor from './pages/RegisterMentor';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import { Dashboard } from './pages/Dashboard';


export const logginContext = createContext();



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/dashbaord'  element={<Dashboard/>}/>
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/peergroup" element={<PeerGroup />} />
          <Route path="/register-mentor" element={<RegisterMentor />} />
          <Route path="/register" element={<Register/>} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/signin" element={<SignIn/>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
