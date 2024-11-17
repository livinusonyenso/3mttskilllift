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
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './component/ProtectedRoute';
import Layout from './component/Layout';
import ForgotPassword from './component/loginForm/ForgotPassword';

function App() {
  
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="mentor" element={<ProtectedRoute><Mentor /></ProtectedRoute>} />
            <Route path="peergroup" element={<ProtectedRoute><PeerGroup /></ProtectedRoute>} />
            <Route path="register-mentor" element={<RegisterMentor />} />
            <Route path="courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
            <Route path="projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
