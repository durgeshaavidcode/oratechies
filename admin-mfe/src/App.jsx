import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import CompanyKYC from './pages/CompanyKYC';
import CompanyKYCReview from './pages/CompanyKYCReview';
import JobManagement from './pages/JobManagement';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import { Suspense } from 'react';

export default function App() {
	return (
		// <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
		// 	<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route element={<AdminLayout />}>
						<Route path="/a/" element={<Navigate to="/a/dashboard" replace />} />
						<Route path="/a/dashboard" element={<Dashboard />} />
						<Route path="/a/users" element={<Users />} />
						<Route path="/a/users/:id" element={<UserDetail />} />
						<Route path="/a/company-kyc" element={<CompanyKYC />} />
						<Route path="/a/company-kyc/:id" element={<CompanyKYCReview />} />
						<Route path="/a/jobs" element={<JobManagement />} />
						<Route path="/a/reports" element={<Reports />} />
						<Route path="/a/settings" element={<Settings />} />
						{/* <Route path="*" element={<Navigate to="/a/dashboard" replace />} /> */}
					</Route>
				</Routes>
		// 	</Suspense>
		// </BrowserRouter>
	);
}
