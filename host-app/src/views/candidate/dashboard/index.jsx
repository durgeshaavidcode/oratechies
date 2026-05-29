// import { createFileRoute } from "@tanstack/react-router";
import { Box, Paper, Chip, Button, LinearProgress, Avatar } from "@mui/material";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CandidateLayout from "../../../layouts/CandidateLayout";
import StatCard from "../../../components/StatCard";
import JobCard from "../../../components/JobCard";
const MOCK_JOBS = [
  {
    id: "1001",
    title: "Senior Oracle SCM Functional Consultant",
    department: "SCM Cloud · Oracle Consulting",
    location: "Bengaluru, India",
    type: "Full-time",
    postedAgo: "2 days ago",
    badge: "New",
    skills: ["Oracle SCM", "Inventory", "Order Management", "PL/SQL"],
  },
  {
    id: "1002",
    title: "Oracle HCM Cloud Technical Lead",
    department: "HCM Cloud · Cloud Engineering",
    location: "Hyderabad, India",
    type: "Full-time · Hybrid",
    postedAgo: "5 days ago",
    skills: ["HCM", "HDL", "BIP", "OTBI", "Fast Formula"],
  },
  {
    id: "1003",
    title: "Database Administrator — Oracle 19c",
    department: "Database Engineering",
    location: "Remote · India",
    type: "Full-time · Remote",
    postedAgo: "1 week ago",
    skills: ["Oracle DB", "RAC", "Data Guard", "RMAN", "Shell"],
  },
  {
    id: "1004",
    title: "Fusion Financials Consultant",
    department: "ERP Cloud",
    location: "Pune, India",
    type: "Contract",
    postedAgo: "3 days ago",
    badge: "Urgent",
    skills: ["GL", "AP", "AR", "Fusion Financials"],
  },
  {
    id: "1005",
    title: "Cloud Solutions Architect — OCI",
    department: "Oracle Cloud Infrastructure",
    location: "Bengaluru, India",
    type: "Full-time",
    postedAgo: "Just now",
    badge: "New",
    skills: ["OCI", "Terraform", "Kubernetes", "Networking"],
  },
];

// export const Route = createFileRoute("/dashboard")({
//   head: () => ({ meta: [{ title: "Dashboard — OraTechi's" }] }),
//   component: DashboardPage,
// });

const applications = [
  { id: "A-2031", title: "Senior Oracle SCM Functional Consultant", status: "Interview", color: "#7C3AED", date: "May 24, 2026" },
  { id: "A-2030", title: "Oracle HCM Cloud Technical Lead", status: "In Review", color: "#B25800", date: "May 21, 2026" },
  { id: "A-2028", title: "Fusion Financials Consultant", status: "Applied", color: "#00558B", date: "May 18, 2026" },
];

const DashboardPage = () => {
  return (
    <CandidateLayout>
      {/* Greeting */}
      <Box sx={{ mb: 4 }}>
        <h1 className="text-2xl font-bold text-[#1D1D1B] m-0">👋 Welcome back, Aarav</h1>
        <p className="text-sm text-[#6B6B69] mt-1">Here's a snapshot of your hiring journey today.</p>
      </Box>

      {/* Stats */}
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: 2, mb: 4 }}>
        <StatCard label="Applications" value={12} icon={<WorkOutlinedIcon fontSize="small" />} trend="↑ 3 this month" />
        <StatCard label="In Review" value={3} icon={<HourglassEmptyIcon fontSize="small" />} accent="#B25800" />
        <StatCard label="Interviews" value={1} icon={<EventOutlinedIcon fontSize="small" />} accent="#7C3AED" />
        {/* <StatCard label="Saved Jobs" value={8} icon={<BookmarkBorderIcon fontSize="small" />} accent="#00558B" /> */}
      </Box>

      {/* Recommended jobs */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
        <h2 className="text-lg font-semibold text-[#1D1D1B] m-0">Recommended for you</h2>
        <Button variant="text" sx={{ color: "#C74634" }}>View all</Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 5 }}>
        {MOCK_JOBS.slice(0, 3).map((j) => <JobCard key={j.id} job={j} />)}
      </Box>

      {/* Recent applications */}
      <h2 className="text-lg font-semibold text-[#1D1D1B] mb-3">Recent applications</h2>
      <Paper elevation={0} sx={{ border: "1px solid #C8C8C6", borderRadius: 2, overflow: "hidden" }}>
        {applications.map((a, i) => (
          <Box
            key={a.id}
            sx={{
              p: 2.5,
              display: "flex",
              alignItems: "center",
              gap: 2,
              borderTop: i === 0 ? "none" : "1px solid #F5F5F4",
              "&:hover": { bgcolor: "#FAFAFA" },
            }}
          >
            <Avatar sx={{ bgcolor: "#F5E0DC", color: "#9E2F21", width: 36, height: 36, fontSize: 13 }}>
              {a.title.split(" ").slice(0, 2).map((s) => s[0]).join("")}
            </Avatar>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <div className="text-sm font-semibold text-[#1D1D1B] truncate">{a.title}</div>
              <div className="text-xs text-[#6B6B69]">{a.id} · Applied {a.date}</div>
            </Box>
            <Chip label={a.status} size="small" sx={{ bgcolor: `${a.color}15`, color: a.color }} />
            <Box sx={{ width: 120, display: { xs: "none", md: "block" } }}>
              <LinearProgress
                variant="determinate"
                value={a.status === "Applied" ? 25 : a.status === "In Review" ? 50 : 75}
                sx={{ height: 6, borderRadius: 3, bgcolor: "#F5F5F4", "& .MuiLinearProgress-bar": { bgcolor: a.color } }}
              />
            </Box>
          </Box>
        ))}
      </Paper>
    </CandidateLayout>
  );
}

export default DashboardPage;
