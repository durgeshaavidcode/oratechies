import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import RemoteErrorBoundary from '../utils/RemoteErrorBoundary';

const CandidateLandingPage = React.lazy(() => import('../views/candidate/landing-page'));
const CandidateDashboard = React.lazy(() => import('../views/candidate/dashboard'));
const CandidateApplications = React.lazy(() => import('../views/candidate/application'));
const EditProfilePage = React.lazy(() => import('../views/candidate/profile'));
const JobsListPage = React.lazy(() => import('../views/candidate/job'));
const LoginCard = React.lazy(() => import('auth_mfe/Auth'));
const AdminPage = React.lazy(() => import('admin_mfe/Admin'));

const AuthRoute = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    if (e?.preventDefault) {
      e.preventDefault();
    }

    // Handle login logic
    console.log('Login attempt: login submitted');
    navigate('/dashboard');
  };

  return <LoginCard handleLogin={handleLogin} />;
};

const AppRouter = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<CandidateLandingPage />} />
          <Route path="/dashboard" element={<CandidateDashboard />} />
          <Route path="/applications" element={<CandidateApplications />} />
          <Route path="/profile/edit" element={<EditProfilePage />} />
          <Route path="/jobs" element={<JobsListPage />} />
          <Route path="/auth" element={<AuthRoute />} />
          <Route
            path="/admin/*"
            element={
              <RemoteErrorBoundary>
                <Suspense fallback={<div style={{ padding: '20px' }}>Loading admin...</div>}>
                  <AdminPage />
                </Suspense>
              </RemoteErrorBoundary>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;   