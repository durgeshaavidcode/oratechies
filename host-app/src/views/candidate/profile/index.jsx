import {
  Box,
  Paper,
  TextField,
  Button,
  Tabs,
  Tab,
  Autocomplete,
  Chip,
  MenuItem,
  IconButton,
  Divider,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CandidateLayout from "../../../layouts/CandidateLayout";


const SKILLS = ["Oracle SCM", "Oracle HCM", "PL/SQL", "Java", "OCI", "Kubernetes", "React", "Terraform", "Python"];

const EditProfilePage = () => {
  const [tab, setTab] = useState(0);

  return (
    <CandidateLayout>
      <Box sx={{ mb: 3, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
        <Box>
          <h1 className="text-2xl font-bold text-[#1D1D1B] m-0">Edit profile</h1>
          <p className="text-sm text-[#6B6B69]">Keep your profile updated to get matched faster.</p>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="text" sx={{ color: "#6B6B69" }}>Cancel</Button>
          <Button variant="contained">Save changes</Button>
        </Box>
      </Box>

      <Paper elevation={0} sx={{ border: "1px solid #C8C8C6", borderRadius: 2, overflow: "hidden" }}>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          sx={{
            borderBottom: "1px solid #C8C8C6",
            px: 2,
            "& .MuiTab-root": { textTransform: "none", fontWeight: 600 },
            "& .Mui-selected": { color: "#C74634 !important" },
            "& .MuiTabs-indicator": { backgroundColor: "#C74634" },
          }}
        >
          <Tab label="Personal" />
          <Tab label="Professional" />
          <Tab label="Experience" />
          <Tab label="Education" />
          <Tab label="Resume" />
        </Tabs>

        <Box sx={{ p: { xs: 3, md: 4 } }}>
          {tab === 0 && <PersonalTab />}
          {tab === 1 && <ProfessionalTab />}
          {tab === 2 && <ExperienceTab />}
          {tab === 3 && <EducationTab />}
          {tab === 4 && <ResumeTab />}
        </Box>
      </Paper>
    </CandidateLayout>
  );
}

function PersonalTab() {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
      <TextField label="Full Name" required defaultValue="Aarav Sharma" />
      <TextField label="Email" required defaultValue="aarav.sharma@oracle.com" />
      <TextField label="Mobile" required defaultValue="+91 98765 43210" />
      <TextField label="Alternate Mobile" />
      <TextField label="Date of Birth" type="date" slotProps={{ inputLabel: { shrink: true } }} defaultValue="1995-04-12" />
      <TextField select label="Gender" defaultValue="">
        {["Male", "Female", "Non-binary", "Prefer not to say"].map((g) => (
          <MenuItem key={g} value={g}>{g}</MenuItem>
        ))}
      </TextField>
      <TextField label="Current Location" defaultValue="Bengaluru" />
      <TextField label="Preferred Locations" defaultValue="Bengaluru, Hyderabad, Remote" />
      <TextField label="LinkedIn URL" defaultValue="linkedin.com/in/aarav" />
      <TextField label="Portfolio / GitHub" />
    </Box>
  );
}

function ProfessionalTab() {
  return (
    <>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
        <TextField select label="Current Job Title" defaultValue="Senior Engineer">
          {["Software Engineer", "Senior Engineer", "Tech Lead", "Architect", "DBA", "Consultant"].map((j) => (
            <MenuItem key={j} value={j}>{j}</MenuItem>
          ))}
        </TextField>
        <TextField label="Current Employer" defaultValue="Oracle India" />
        <TextField select label="Total Experience" defaultValue="5-8 years">
          {["0-1 years", "1-3 years", "3-5 years", "5-8 years", "8-12 years", "12+ years"].map((e) => (
            <MenuItem key={e} value={e}>{e}</MenuItem>
          ))}
        </TextField>
        <TextField select label="Notice Period" defaultValue="30 days">
          {["Immediate", "15 days", "30 days", "60 days", "90 days"].map((e) => (
            <MenuItem key={e} value={e}>{e}</MenuItem>
          ))}
        </TextField>
        <TextField label="Current CTC (LPA)" type="number" defaultValue={28} />
        <TextField label="Expected CTC (LPA)" type="number" defaultValue={36} />
        <TextField select label="Functional / Technical" defaultValue="Techno-Functional">
          {["Functional", "Technical", "Techno-Functional"].map((e) => (
            <MenuItem key={e} value={e}>{e}</MenuItem>
          ))}
        </TextField>
        <TextField select label="Work Preference" defaultValue="Hybrid">
          {["Onsite", "Hybrid", "Remote"].map((e) => (
            <MenuItem key={e} value={e}>{e}</MenuItem>
          ))}
        </TextField>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Autocomplete
          multiple
          options={SKILLS}
          defaultValue={["Oracle SCM", "PL/SQL", "OCI", "Kubernetes"]}
          renderInput={(params) => <TextField {...params} label="Skills" />}
        />
      </Box>
      <Box sx={{ mt: 3 }}>
        <TextField label="Professional summary" multiline rows={4} fullWidth defaultValue="Techno-functional consultant with 7+ years of experience leading Oracle SCM Cloud implementations across APAC." />
      </Box>
    </>
  );
}

const experiences = [
  { role: "Senior Consultant", company: "Oracle India", period: "Jan 2022 — Present" },
  { role: "Consultant", company: "Deloitte Consulting", period: "Jul 2019 — Dec 2021" },
];

function ExperienceTab() {
  return (
    <Box>
      {experiences.map((e, i) => (
        <Box key={i}>
          {i > 0 && <Divider sx={{ my: 3 }} />}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <div className="text-sm font-semibold text-[#1D1D1B]">Experience #{i + 1}</div>
            <IconButton size="small" sx={{ color: "#C74634" }}><DeleteOutlinedIcon fontSize="small" /></IconButton>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
            <TextField label="Role" defaultValue={e.role} />
            <TextField label="Company" defaultValue={e.company} />
            <TextField label="Start Date" type="month" slotProps={{ inputLabel: { shrink: true } }} />
            <TextField label="End Date" type="month" slotProps={{ inputLabel: { shrink: true } }} />
            <TextField label="Location" />
            <TextField label="Employment Type" select defaultValue="Full-time">
              {["Full-time", "Contract", "Internship"].map((t) => <MenuItem key={t} value={t}>{t}</MenuItem>)}
            </TextField>
          </Box>
          <TextField sx={{ mt: 2 }} label="Description" multiline rows={3} fullWidth />
        </Box>
      ))}
      <Button startIcon={<AddIcon />} sx={{ mt: 3 }} variant="outlined">Add another experience</Button>
    </Box>
  );
}

function EducationTab() {
  return (
    <Box>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
        <TextField label="Degree" defaultValue="B.E. Computer Science" />
        <TextField label="Institution" defaultValue="BITS Pilani" />
        <TextField label="Start Year" type="number" defaultValue={2015} />
        <TextField label="End Year" type="number" defaultValue={2019} />
        <TextField label="Grade / CGPA" defaultValue="8.6" />
        <TextField label="Specialization" defaultValue="Software Systems" />
      </Box>
      <Button startIcon={<AddIcon />} sx={{ mt: 3 }} variant="outlined">Add another qualification</Button>
    </Box>
  );
}

function ResumeTab() {
  return (
    <Box>
      <Paper elevation={0} sx={{ p: 2, border: "1px solid #C8C8C6", borderRadius: 1, mb: 2, display: "flex", gap: 2, alignItems: "center" }}>
        <DescriptionOutlinedIcon sx={{ color: "#C74634", fontSize: 32 }} />
        <Box sx={{ flex: 1 }}>
          <div className="text-sm font-semibold">Aarav_Sharma_Resume.pdf</div>
          <div className="text-xs text-[#6B6B69]">Uploaded May 12, 2026 · 412 KB</div>
        </Box>
        <Chip label="Default" size="small" sx={{ bgcolor: "#D6F0E0", color: "#1B7D3F" }} />
        <IconButton size="small"><DeleteOutlinedIcon fontSize="small" /></IconButton>
      </Paper>

      <Box
        sx={{
          border: "2px dashed #C8C8C6",
          borderRadius: 1,
          p: 5,
          textAlign: "center",
          bgcolor: "#FAFAFA",
          "&:hover": { borderColor: "#C74634", bgcolor: "#F5E0DC" },
          cursor: "pointer",
        }}
      >
        <CloudUploadOutlinedIcon sx={{ fontSize: 48, color: "#C74634" }} />
        <div className="text-base font-semibold mt-2">Drop a new resume here or click to upload</div>
        <div className="text-xs text-[#6B6B69]">PDF or DOCX, max 5MB · You can store up to 3 resumes</div>
        <Button variant="outlined" sx={{ mt: 2 }}>Browse files</Button>
      </Box>
    </Box>
  );
}

export default EditProfilePage;
