import { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  ToggleButtonGroup,
  ToggleButton,
  Chip,
  Divider,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import CandidateLayout from "../../../layouts/CandidateLayout";
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

const FILTERS = {
  Department: ["SCM Cloud", "HCM Cloud", "ERP Cloud", "Database Engineering", "OCI"],
  "Job Type": ["Full-time", "Contract", "Internship"],
  Level: ["Entry", "Mid", "Senior", "Lead", "Director"],
  Posted: ["Last 24h", "Last 7 days", "Last 30 days"],
};

const JobsListPage = () => {
  const [sort, setSort] = useState("relevance");

  return (
    <CandidateLayout>
      <Box sx={{ mb: 3 }}>
        <h1 className="text-2xl font-bold text-[#1D1D1B] m-0">Find your next role</h1>
        <p className="text-sm text-[#6B6B69] mt-1">{MOCK_JOBS.length * 47} open positions across Oracle</p>
      </Box>

      {/* Search bar */}
      <Paper elevation={0} sx={{ p: 2, mb: 3, border: "1px solid #C8C8C6", borderRadius: 2, display: "flex", gap: 1.5, flexWrap: { xs: "wrap", md: "nowrap" } }}>
        <TextField
          placeholder="Job title, skill, or keyword"
          slotProps={{ input: { startAdornment: <InputAdornment position="start"><SearchIcon fontSize="small" /></InputAdornment> } }}
          sx={{ flex: 2 }}
        />
        <TextField
          placeholder="Location"
          slotProps={{ input: { startAdornment: <InputAdornment position="start"><LocationOnOutlinedIcon fontSize="small" /></InputAdornment> } }}
          sx={{ flex: 1 }}
        />
        <Button variant="contained" size="large" sx={{ px: 4 }}>Search</Button>
      </Paper>

      {/* Layout: filters + results */}
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "260px 1fr" }, gap: 3 }}>
        {/* Filters */}
        <Paper elevation={0} sx={{ p: 2.5, border: "1px solid #C8C8C6", borderRadius: 2, height: "fit-content", position: { md: "sticky" }, top: { md: 80 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <TuneIcon fontSize="small" sx={{ color: "#C74634" }} />
            <span className="text-sm font-semibold">Filters</span>
            <span className="ml-auto text-xs text-[#C74634] cursor-pointer">Clear all</span>
          </Box>

          {Object.entries(FILTERS).map(([title, items], idx) => (
            <Box key={title} sx={{ mb: 2 }}>
              {idx > 0 && <Divider sx={{ mb: 2 }} />}
              <div className="text-xs uppercase tracking-wide font-semibold text-[#3D3D3B] mb-1">{title}</div>
              {items.map((it) => (
                <FormControlLabel
                  key={it}
                  control={<Checkbox size="small" sx={{ "&.Mui-checked": { color: "#C74634" } }} />}
                  label={<span className="text-sm">{it}</span>}
                  sx={{ display: "block", ml: 0 }}
                />
              ))}
            </Box>
          ))}
        </Paper>

        {/* Results */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2, flexWrap: "wrap", gap: 1 }}>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              <Chip label="Bengaluru ✕" size="small" onDelete={() => {}} sx={{ bgcolor: "#F5E0DC", color: "#9E2F21" }} />
              <Chip label="Full-time ✕" size="small" onDelete={() => {}} sx={{ bgcolor: "#F5E0DC", color: "#9E2F21" }} />
            </Box>
            <TextField
              select
              size="small"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              sx={{ width: 180 }}
            >
              <MenuItem value="relevance">Most relevant</MenuItem>
              <MenuItem value="recent">Most recent</MenuItem>
              <MenuItem value="salary">Salary: high to low</MenuItem>
            </TextField>
          </Box>

          <ToggleButtonGroup size="small" value="list" exclusive sx={{ mb: 2 }}>
            <ToggleButton value="list">List</ToggleButton>
            <ToggleButton value="grid">Grid</ToggleButton>
          </ToggleButtonGroup>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {MOCK_JOBS.map((j) => <JobCard key={j.id} job={j} />)}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button variant="outlined" size="large">Load more jobs</Button>
          </Box>
        </Box>
      </Box>
    </CandidateLayout>
  );
}

export default JobsListPage;
