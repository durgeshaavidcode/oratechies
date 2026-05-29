import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const CandidateDashboard = React.lazy(() => import('../views/candidate/dashboard'));
const CandidateApplications = React.lazy(() => import('../views/candidate/application'));
const EditProfilePage = React.lazy(() => import('../views/candidate/profile'));
const JobsListPage = React.lazy(() => import('../views/candidate/job'));
const LoginCard = React.lazy(() => import('auth_mfe/Auth'));
const AppRouter = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}> 
      <Routes>
        <Route path="/" element={<CandidateDashboard />} />
        <Route path="/dashboard" element={<CandidateDashboard />} />
        <Route path="/applications" element={<CandidateApplications />} />
        <Route path="/profile/edit" element={<EditProfilePage />} />
        <Route path="/jobs" element={<JobsListPage />} />
        <Route path="/auth" element={<LoginCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;   