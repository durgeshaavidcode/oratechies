import { Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, Drawer } from "@mui/material";
import DashboardIcon from "@mui/icons-material/DashboardOutlined";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link, useLocation } from "react-router-dom";

const items = [
  { label: "Dashboard", to: "/dashboard", icon: <DashboardIcon fontSize="small" /> },
  { label: "Find Jobs", to: "/jobs", icon: <WorkOutlinedIcon fontSize="small" /> },
  { label: "Applications", to: "/applications", icon: <AssignmentTurnedInIcon fontSize="small" /> },
//   { label: "Saved Jobs", to: "/saved", icon: <BookmarkBorderIcon fontSize="small" /> },
  { label: "Profile", to: "/profile/edit", icon: <PersonOutlinedIcon fontSize="small" /> },
];

const secondary = [
  { label: "Notifications", to: "/notifications", icon: <NotificationsNoneIcon fontSize="small" /> },
  { label: "Settings", to: "/settings", icon: <SettingsIcon fontSize="small" /> },
];

function NavList({ onNavigate }) {
  const loc = useLocation();
  // Debug log to check the value of loc
  const isActive = (to) => loc && typeof loc.pathname === 'string' && (loc.pathname === to || loc.pathname.startsWith(to + "/"));

  return (
    <>
      <List dense sx={{ py: 1 }}>
        {items.map((it) => (
          <Link key={it.to} to={it.to} className="no-underline" onClick={onNavigate}>
            <ListItemButton
              selected={isActive(it.to)}
              sx={{
                mx: 1,
                borderRadius: 1,
                "&.Mui-selected": {
                  bgcolor: "#F5E0DC",
                  borderLeft: "3px solid #C74634",
                  pl: 1.625,
                  "& .MuiListItemText-primary": { color: "#C74634", fontWeight: 600 },
                  "& .MuiListItemIcon-root": { color: "#C74634" },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 32, color: "#3D3D3B" }}>{it.icon}</ListItemIcon>
              <ListItemText slotProps={{ primary: { sx: { fontSize: 14, color: "#1D1D1B" } } }} primary={it.label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider sx={{ my: 1, mx: 2 }} />
      <List dense>
        {secondary.map((it) => (
          <Link key={it.to} to={it.to} className="no-underline" onClick={onNavigate}>
            <ListItemButton selected={isActive(it.to)} sx={{ mx: 1, borderRadius: 1 }}>
              <ListItemIcon sx={{ minWidth: 32, color: "#3D3D3B" }}>{it.icon}</ListItemIcon>
              <ListItemText slotProps={{ primary: { sx: { fontSize: 14, color: "#1D1D1B" } } }} primary={it.label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </>
  );
}

export default function Sidebar({ mobileOpen = false, onMobileClose }) {
  return (
    <>
      {/* Desktop sidebar */}
      <Box
        component="aside"
        sx={{
          width: 240,
          flexShrink: 0,
          bgcolor: "#FFFFFF",
          borderRight: "1px solid #C8C8C6",
          minHeight: "calc(100vh - 64px)",
          position: "sticky",
          top: 64,
          display: { xs: "none", md: "block" },
        }}
      >
        <NavList />
      </Box>

      {/* Mobile drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={onMobileClose}
        slotProps={{ paper: { sx: { width: 260 } } }}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box sx={{ height: 56, display: "flex", alignItems: "center", px: 2, borderBottom: "2px solid #C74634", bgcolor: "#1D1D1B" }}>
          <Box sx={{ width: 36, height: 24, bgcolor: "#C74634", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 12, letterSpacing: 1, mr: 1 }}>
            ORA
          </Box>
          <span className="text-white font-semibold tracking-tight">OraTechi's</span>
        </Box>
        <NavList onNavigate={onMobileClose} />
      </Drawer>
    </>
  );
}
