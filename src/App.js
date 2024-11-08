import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar  from './component/Navbar'
import Mentor from './pages/Mentor';
import PeerGroup from './pages/PeerGroup';
import RegisterMentor from './pages/RegisterMentor';
import RegisterMentee from './pages/RegisterMentee';
import Projects from './pages/Projects';
import Home from './component/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/peergroup" element={<PeerGroup />} />
          <Route path="/register-mentor" element={<RegisterMentor />} />
          <Route path="/register-mentee" element={<RegisterMentee />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
