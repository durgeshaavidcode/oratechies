import { Box, Paper, Chip, Tabs, Tab, LinearProgress, Avatar, Button } from "@mui/material";
import { useState } from "react";
import CandidateLayout from "../../../layouts/CandidateLayout";


const ALL = [
  { id: "A-2031", title: "Senior Oracle SCM Functional Consultant", company: "Oracle India", status: "Interview", color: "#7C3AED", date: "May 24, 2026", progress: 75 },
  { id: "A-2030", title: "Oracle HCM Cloud Technical Lead", company: "Oracle India", status: "In Review", color: "#B25800", date: "May 21, 2026", progress: 50 },
  { id: "A-2028", title: "Fusion Financials Consultant", company: "Oracle India", status: "Applied", color: "#00558B", date: "May 18, 2026", progress: 25 },
  { id: "A-2024", title: "OCI Cloud Architect", company: "Oracle India", status: "Rejected", color: "#9E2F21", date: "May 02, 2026", progress: 100 },
  { id: "A-2019", title: "Oracle EPM Consultant", company: "Oracle India", status: "Offer", color: "#1B7D3F", date: "Apr 22, 2026", progress: 100 },
];

const ApplicationsPage = () => {
  const [tab, setTab] = useState(0);
  const filters = ["All", "Applied", "In Review", "Interview", "Offer", "Rejected"];
  const list = tab === 0 ? ALL : ALL.filter((a) => a.status === filters[tab]);

  return (
    <CandidateLayout>
      <Box sx={{ mb: 3 }}>
        <h1 className="text-2xl font-bold text-[#1D1D1B] m-0">My Applications</h1>
        <p className="text-sm text-[#6B6B69] mt-1">{ALL.length} applications submitted</p>
      </Box>

      <Paper elevation={0} sx={{ border: "1px solid #C8C8C6", borderRadius: 2, overflow: "hidden" }}>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            borderBottom: "1px solid #C8C8C6",
            px: { xs: 1, md: 2 },
            "& .MuiTab-root": { textTransform: "none", fontWeight: 600, minHeight: 48 },
            "& .Mui-selected": { color: "#C74634 !important" },
            "& .MuiTabs-indicator": { backgroundColor: "#C74634" },
          }}
        >
          {filters.map((f) => <Tab key={f} label={f} />)}
        </Tabs>

        <Box>
          {list.map((a, i) => (
            <Box
              key={a.id}
              sx={{
                p: { xs: 2, md: 2.5 },
                display: "flex",
                alignItems: { xs: "flex-start", md: "center" },
                flexDirection: { xs: "column", md: "row" },
                gap: 2,
                borderTop: i === 0 ? "none" : "1px solid #F5F5F4",
                "&:hover": { bgcolor: "#FAFAFA" },
              }}
            >
              <Box sx={{ display: "flex", gap: 2, alignItems: "center", flex: 1, minWidth: 0, width: "100%" }}>
                <Avatar sx={{ bgcolor: "#F5E0DC", color: "#9E2F21", width: 40, height: 40, fontSize: 13 }}>
                  {a.title.split(" ").slice(0, 2).map((s) => s[0]).join("")}
                </Avatar>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <div className="text-sm font-semibold text-[#1D1D1B] truncate">{a.title}</div>
                  <div className="text-xs text-[#6B6B69]">{a.company} · {a.id} · Applied {a.date}</div>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center", width: { xs: "100%", md: "auto" } }}>
                <Chip label={a.status} size="small" sx={{ bgcolor: `${a.color}15`, color: a.color }} />
                <Box sx={{ width: { xs: "100%", md: 120 } }}>
                  <LinearProgress
                    variant="determinate"
                    value={a.progress}
                    sx={{ height: 6, borderRadius: 3, bgcolor: "#F5F5F4", "& .MuiLinearProgress-bar": { bgcolor: a.color } }}
                  />
                </Box>
                <Button size="small" sx={{ color: "#C74634" }}>View</Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>
    </CandidateLayout>
  );
}

export default ApplicationsPage;
