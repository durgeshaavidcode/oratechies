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
		<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route element={<AdminLayout />}>
						<Route path="/" element={<Navigate to="/admin-dashboard" replace />} />
						<Route path="/admin-dashboard" element={<Dashboard />} />
						<Route path="/admin-users" element={<Users />} />
						<Route path="/admin-users/:id" element={<UserDetail />} />
						<Route path="/admin-company-kyc" element={<CompanyKYC />} />
						<Route path="/admin-company-kyc/:id" element={<CompanyKYCReview />} />
						<Route path="/admin-jobs" element={<JobManagement />} />
						<Route path="/admin-reports" element={<Reports />} />
						<Route path="/admin-settings" element={<Settings />} />
						{/* <Route path="*" element={<Navigate to="/admin-dashboard" replace />} /> */}
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}
