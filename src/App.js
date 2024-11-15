// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mentor from './pages/Mentor';
import PeerGroup from './pages/PeerGroup';
import Courses from './pages/Courses';
import RegisterMentor from './pages/RegisterMentor';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './component/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Layout from './component/Layout';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/dashbaord" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
            <Route path="mentor" element={<ProtectedRoute><Mentor /></ProtectedRoute>} />
            <Route path="peergroup"  element={<ProtectedRoute><PeerGroup/></ProtectedRoute>} />
            <Route path="register-mentor" element={<RegisterMentor />} />
            <Route path="register" element={<Register />} />
            <Route path="courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
            <Route path="projects" element={<Projects />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
