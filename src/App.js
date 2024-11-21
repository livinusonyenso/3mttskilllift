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
import DashboardMain from './component/DashboardMain/pages/DashboardPage';
import DashboardPage from './component/DashboardMain/pages/DashboardPage'; // Nested child route
import CoursesPage from './component/DashboardMain/pages/CoursesPage'; // Nested child route
import ProjectsPage from './component/DashboardMain/pages/ProjectsPage'; // Nested child route
import OfflinePage from './component/DashboardMain/pages/OfflinePage'; // Nested child route
import ProtectedRoute from './component/ProtectedRoute';
import Layout from './component/Layout';
import ForgotPassword from './component/loginForm/ForgotPassword';
import AccountSettingsPage from './component/DashboardMain/pages/SettingsPage';
import ResourcesSettingsPanel from './component/dashboard/ResourcesSettingsPanel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

          {/* Parent Route for DashboardMain */}
            <Route path="dashboardmain" element={ <ProtectedRoute><DashboardMain/> </ProtectedRoute>}>
            <Route index element={<ResourcesSettingsPanel/>} />
            <Route path="dashboardcourses" element={<CoursesPage />} />
            <Route path="dashboardprojects" element={<ProjectsPage />} />
            <Route path="dashboardoffline" element={<OfflinePage />} />
            <Route path="dashboardsettings" element={<AccountSettingsPage />} />
          </Route>

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
