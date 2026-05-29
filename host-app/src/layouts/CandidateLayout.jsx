import { Box } from "@mui/material";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function CandidateLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ bgcolor: "#F5F5F4", minHeight: "100vh" }}>
      <Navbar onMenuClick={() => setMobileOpen(true)} />
      <Box sx={{ display: "flex" }}>
        <Sidebar mobileOpen={mobileOpen} onMobileClose={() => setMobileOpen(false)} />
        <Box
          component="main"
          sx={{
            flex: 1,
            minWidth: 0,
            p: { xs: 2, sm: 3, md: 4 },
            maxWidth: 1440,
            mx: "auto",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
      <Box
        component="footer"
        sx={{
          height: 40,
          borderTop: "1px solid #C8C8C6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#6B6B69",
          fontSize: 12,
          bgcolor: "#FFFFFF",
          px: 2,
          textAlign: "center",
        }}
      >
        © 2026 Oracle Corporation — OraTechi's
      </Box>
    </Box>
  );
}
