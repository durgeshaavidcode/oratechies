// All hardcoded data for the admin app
import dayjs from "dayjs";

export const KPIS = [
  { label: "Total Users", value: "12,547", delta: "+8.5%", color: "#3B82F6", icon: "People" },
  { label: "Companies", value: "2,345", delta: "+6.3%", color: "#10B981", icon: "Business" },
  { label: "Active Jobs", value: "4,321", delta: "+7.4%", color: "#F59E0B", icon: "Work" },
  { label: "Applications", value: "18,765", delta: "+9.2%", color: "#8B5CF6", icon: "Description" },
  { label: "Total Revenue", value: "₹ 24,45,780", delta: "+12.5%", color: "#EF4444", icon: "CurrencyRupee" },
];

export const USER_OVERVIEW = {
  labels: ["May 1", "May 8", "May 15", "May 22", "May 29"],
  candidates: [4200, 4500, 6200, 7100, 9300],
  recruiters: [2100, 1900, 3000, 3800, 4600],
};

export const RECENT_ACTIVITIES = [
  { icon: "PersonAdd", title: "New company registration", subtitle: "TechSoft Solutions", time: "2 mins ago" },
  { icon: "Work", title: "Job posted", subtitle: "Oracle Fusion Developer", time: "10 mins ago" },
  { icon: "Person", title: "New application received", subtitle: "John Doe applied for Oracle DBA", time: "15 mins ago" },
  { icon: "Payment", title: "Payment received", subtitle: "Plan: Pro - 1 Year", time: "20 mins ago" },
  { icon: "VerifiedUser", title: "Company KYC approved", subtitle: "CloudAtix Solutions", time: "1 hour ago" },
];

export const JOBS_BY_STATUS = [
  { label: "Active Jobs", value: 4321, color: "#3B82F6" },
  { label: "Pending Approval", value: 562, color: "#F59E0B" },
  { label: "Expired Jobs", value: 1245, color: "#EF4444" },
  { label: "Rejected Jobs", value: 321, color: "#8B5CF6" },
  { label: "Reported Jobs", value: 98, color: "#EC4899" },
];

export const APPS_BY_STATUS = [
  { label: "New", value: 8765, color: "#3B82F6" },
  { label: "Shortlisted", value: 4321, color: "#10B981" },
  { label: "Interview Scheduled", value: 2456, color: "#F59E0B" },
  { label: "Hired", value: 1223, color: "#8B5CF6" },
  { label: "Rejected", value: 1999, color: "#EF4444" },
];

export const TOP_SKILLS = [
  { name: "Oracle Fusion", value: 2345 },
  { name: "PL/SQL", value: 1987 },
  { name: "Oracle E-Business Suite", value: 1456 },
  { name: "Oracle Cloud", value: 1234 },
  { name: "Oracle Reports", value: 987 },
];

export const TOP_LOCATIONS = [
  { name: "Bangalore", value: 3245 },
  { name: "Hyderabad", value: 2356 },
  { name: "Mumbai", value: 1987 },
  { name: "Pune", value: 1456 },
  { name: "Chennai", value: 1245 },
];

export const USERS = [
  { id: "USR1001", name: "John Doe", role: "Candidate", email: "john.doe@email.com", phone: "+91 98765 43210", status: "Active", joined: "28 Apr 2024", initials: "JD", color: "#3B82F6" },
  { id: "USR1002", name: "Jane Smith", role: "Recruiter", email: "jane.smith@techsoft.com", phone: "+91 98876 54321", status: "Active", joined: "26 Apr 2024", initials: "JS", color: "#EC4899" },
  { id: "USR1003", name: "TechSoft Solutions", role: "Company", email: "hr@techsoft.com", phone: "+91 98765 43210", status: "Pending", joined: "25 Apr 2024", initials: "TS", color: "#8B5CF6" },
  { id: "USR1004", name: "Robert Brown", role: "Candidate", email: "robert.brown@email.com", phone: "+91 91234 56789", status: "Active", joined: "24 Apr 2024", initials: "RB", color: "#10B981" },
  { id: "USR1005", name: "Emily Davis", role: "Recruiter", email: "emily.davis@infotech.com", phone: "+91 99876 54321", status: "Blocked", joined: "23 Apr 2024", initials: "ED", color: "#F59E0B" },
  { id: "USR1006", name: "Michael Johnson", role: "Candidate", email: "michael.j@email.com", phone: "+91 98789 65432", status: "Active", joined: "22 Apr 2024", initials: "MJ", color: "#EF4444" },
  { id: "USR1007", name: "Sarah Wilson", role: "Recruiter", email: "sarah.wilson@oracletech.com", phone: "+91 90012 34567", status: "Active", joined: "21 Apr 2024", initials: "SW", color: "#06B6D4" },
];

export const COMPANIES = [
  { id: "COMP10045", name: "TechSoft Solutions Pvt. Ltd.", initials: "TS", color: "#1E3A8A", email: "hr@techsoft.com", phone: "+91 98765 43210", contact: "Jane Smith", designation: "HR Manager", plan: "Pro Plan", planColor: "#DBEAFE", planText: "#1D4ED8", submitted: "29 May 2024", time: "10:30 AM", status: "Pending", website: "www.techsoft.com", location: "Bangalore, Karnataka, India", registered: "15 May 2024" },
  { id: "COMP10046", name: "Oracle Experts Ltd.", initials: "OE", color: "#EA580C", email: "contact@oracleexperts.com", phone: "+91 91234 56789", contact: "Robert Brown", designation: "Director", plan: "Premium Plan", planColor: "#EDE9FE", planText: "#7C3AED", submitted: "28 May 2024", time: "03:15 PM", status: "Pending", website: "www.oracleexperts.com", location: "Hyderabad, India", registered: "10 May 2024" },
  { id: "COMP10047", name: "Fusion Tech Pvt. Ltd.", initials: "FT", color: "#0D9488", email: "info@fusiontech.com", phone: "+91 99876 54321", contact: "Emily Davis", designation: "HR Lead", plan: "Pro Plan", planColor: "#DBEAFE", planText: "#1D4ED8", submitted: "27 May 2024", time: "11:45 AM", status: "Pending", website: "www.fusiontech.com", location: "Pune, India", registered: "08 May 2024" },
  { id: "COMP10048", name: "DataSolve Inc.", initials: "DS", color: "#F59E0B", email: "hr@datasolve.com", phone: "+91 98789 65432", contact: "Michael Johnson", designation: "CTO", plan: "Basic Plan", planColor: "#DCFCE7", planText: "#15803D", submitted: "26 May 2024", time: "02:20 PM", status: "Pending", website: "www.datasolve.com", location: "Chennai, India", registered: "05 May 2024" },
  { id: "COMP10049", name: "CloudAtix Solutions", initials: "CA", color: "#F97316", email: "hello@cloudatix.com", phone: "+91 90012 34567", contact: "Sarah Wilson", designation: "Head of HR", plan: "Pro Plan", planColor: "#DBEAFE", planText: "#1D4ED8", submitted: "25 May 2024", time: "09:10 AM", status: "Pending", website: "www.cloudatix.com", location: "Mumbai, India", registered: "02 May 2024" },
];

export const KYC_DOCUMENTS = [
  { name: "Company Registration Certificate", file: "registration_certificate.pdf", verified: true, extra: "Document No.\nU65987412" },
  { name: "PAN Card", file: "pan_card.pdf", verified: true, extra: "PAN Number\nAABCT1234Q" },
  { name: "GST Certificate", file: "gst_certificate.pdf", verified: true, extra: "GSTIN\n29AABCT1234Q1Z5" },
  { name: "MoA / AoA", file: "moa_aoa.pdf", verified: true, extra: "Uploaded on\n29 May 2024" },
  { name: "Address Proof", file: "address_proof.pdf", verified: true, extra: "Uploaded on\n29 May 2024" },
  { name: "Bank Statement", file: "bank_statement.pdf", verified: true, extra: "Uploaded on\n29 May 2024" },
];

export const JOBS = [
  { id: "JOB1001", title: "Oracle Fusion HCM Consultant", company: "TechSoft Solutions", companyInitials: "TS", companyColor: "#1E3A8A", plan: "Pro Plan", location: "Bangalore, India", type: "Hybrid", jobType: "Full Time", exp: "5 - 8 Years", posted: "29 May 2024", applications: 28, status: "Approved" },
  { id: "JOB1002", title: "Oracle EBS Technical Developer", company: "Oracle Experts Ltd.", companyInitials: "OE", companyColor: "#EA580C", plan: "Premium Plan", location: "Hyderabad, India", type: "On-site", jobType: "Full Time", exp: "3 - 6 Years", posted: "28 May 2024", applications: 17, status: "Pending" },
  { id: "JOB1003", title: "Oracle Database Administrator", company: "Fusion Tech Pvt. Ltd.", companyInitials: "FT", companyColor: "#0D9488", plan: "Pro Plan", location: "Pune, India", type: "Hybrid", jobType: "Full Time", exp: "4 - 7 Years", posted: "27 May 2024", applications: 21, status: "Approved" },
  { id: "JOB1004", title: "Oracle Cloud Financials Consultant", company: "DataSolve Inc.", companyInitials: "DS", companyColor: "#F59E0B", plan: "Basic Plan", location: "Chennai, India", type: "On-site", jobType: "Contract", exp: "6 - 10 Years", posted: "26 May 2024", applications: 14, status: "Pending" },
  { id: "JOB1005", title: "Oracle SCM Functional Consultant", company: "CloudAtix Solutions", companyInitials: "CA", companyColor: "#F97316", plan: "Pro Plan", location: "Mumbai, India", type: "Hybrid", jobType: "Full Time", exp: "5 - 9 Years", posted: "25 May 2024", applications: 31, status: "Approved" },
  { id: "JOB1006", title: "Oracle BI Publisher Developer", company: "InfoNext Technologies", companyInitials: "IN", companyColor: "#4F46E5", plan: "Premium Plan", location: "Noida, India", type: "On-site", jobType: "Full Time", exp: "3 - 5 Years", posted: "24 May 2024", applications: 9, status: "Rejected" },
  { id: "JOB1007", title: "Oracle Taleo Developer", company: "HCM Hub Pvt. Ltd.", companyInitials: "HH", companyColor: "#16A34A", plan: "Basic Plan", location: "Bangalore, India", type: "Hybrid", jobType: "Contract", exp: "4 - 6 Years", posted: "23 May 2024", applications: 12, status: "Approved" },
];

export const JOB_STATS = [
  { label: "Total Jobs", value: 256, color: "#DBEAFE", iconBg: "#3B82F6", icon: "Work" },
  { label: "Pending Approval", value: 18, color: "#FEF3C7", iconBg: "#F59E0B", icon: "Schedule" },
  { label: "Approved Jobs", value: 208, color: "#DCFCE7", iconBg: "#16A34A", icon: "CheckCircle" },
  { label: "Rejected Jobs", value: 12, color: "#FEE2E2", iconBg: "#EF4444", icon: "Cancel" },
  { label: "Expired Jobs", value: 18, color: "#FFEDD5", iconBg: "#F97316", icon: "Event" },
  { label: "Closed Jobs", value: 15, color: "#E0F2FE", iconBg: "#0EA5E9", icon: "FolderOff" },
];

export const REPORT_KPIS = [
  { label: "Total Jobs Posted", value: "12,458", delta: "+18.6%", color: "#DBEAFE", iconColor: "#3B82F6", icon: "Work" },
  { label: "Total Companies", value: "2,845", delta: "+14.2%", color: "#DCFCE7", iconColor: "#16A34A", icon: "Business" },
  { label: "Total Users", value: "18,932", delta: "+22.8%", color: "#EDE9FE", iconColor: "#8B5CF6", icon: "People" },
  { label: "Total Applications", value: "45,672", delta: "+16.4%", color: "#FEF3C7", iconColor: "#F59E0B", icon: "Description" },
  { label: "Total Revenue", value: "₹ 45,87,230", delta: "+19.3%", color: "#FEE2E2", iconColor: "#EF4444", icon: "CurrencyRupee" },
];

export const ADMIN = { name: "Admin", avatar: "https://i.pravatar.cc/100?img=12" };
