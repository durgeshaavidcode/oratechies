import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  Badge,
  Avatar,
  Stack,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications,
  Mail,
  KeyboardArrowDown,
  Dashboard as DashboardIcon,
  People,
  Business,
  Work,
  CardMembership,
  Payment,
  SupportAgent,
  Assessment,
  Settings as SettingsIcon,
  Logout,
  Circle,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store";
import { SIDEBAR_BG, SIDEBAR_ACTIVE } from "../theme";
import { ADMIN } from "../data/mockData";

const DRAWER_WIDTH = 248;

const NAV = [
  { to: "/dashboard", label: "Dashboard", icon: <DashboardIcon /> },
  { to: "/users", label: "Users", icon: <People /> },
  { to: "/company-kyc", label: "Company KYC", icon: <Business /> },
  { to: "/jobs", label: "Job Management", icon: <Work /> },
  { to: "/subscription-plans", label: "Subscription Plans", icon: <CardMembership />, disabled: true },
  { to: "/payments", label: "Payments", icon: <Payment />, disabled: true },
  { to: "/support", label: "Support Tickets", icon: <SupportAgent />, disabled: true },
  { to: "/reports", label: "Reports", icon: <Assessment /> },
  { to: "/settings", label: "Settings", icon: <SettingsIcon /> },
];

function SidebarItem({ item }) {
  const baseSx = {
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    px: 2.5,
    py: 1.25,
    mx: 1.5,
    borderRadius: 2,
    color: "#CBD5E1",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: 14,
    cursor: item.disabled ? "not-allowed" : "pointer",
    opacity: item.disabled ? 0.55 : 1,
    "&:hover": { background: item.disabled ? "transparent" : "rgba(255,255,255,0.06)" },
  };
  if (item.disabled)
    return (
      <Box sx={baseSx}>
        {item.icon}
        <span>{item.label}</span>
      </Box>
    );
  return (
    <NavLink
      to={item.to}
      style={({ isActive }) => ({
        textDecoration: "none",
        display: "block",
      })}
    >
      {({ isActive }) => (
        <Box
          sx={{
            ...baseSx,
            background: isActive ? SIDEBAR_ACTIVE : "transparent",
            color: isActive ? "#fff" : "#CBD5E1",
            boxShadow: isActive ? "0 6px 16px rgba(37,99,235,.35)" : "none",
            "&:hover": { background: isActive ? SIDEBAR_ACTIVE : "rgba(255,255,255,0.06)" },
          }}
        >
          {item.icon}
          <span>{item.label}</span>
        </Box>
      )}
    </NavLink>
  );
}

function Sidebar() {
  return (
    <Box
      sx={{
        width: DRAWER_WIDTH,
        background: SIDEBAR_BG,
        color: "#fff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        top: 0,
      }}
    >
      <Box sx={{ p: 3, pb: 2 }}>
        <Typography sx={{ color: "#EF4444", fontWeight: 900, fontSize: 28, letterSpacing: 1 }}>
          ORACLE
        </Typography>
        <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: 14, mt: 0.5 }}>
          Job Portal - Admin
        </Typography>
      </Box>
      <Divider sx={{ borderColor: "rgba(255,255,255,0.06)" }} />
      <Box sx={{ flex: 1, py: 1.5, overflowY: "auto" }}>
        <Stack spacing={0.5}>
          {NAV.map((n) => (
            <SidebarItem key={n.label} item={n} />
          ))}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              px: 2.5,
              py: 1.25,
              mx: 1.5,
              borderRadius: 2,
              color: "#CBD5E1",
              cursor: "pointer",
              "&:hover": { background: "rgba(255,255,255,0.06)" },
            }}
          >
            <Logout />
            <span>Logout</span>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ p: 2, m: 2, borderRadius: 2, background: "rgba(255,255,255,0.04)" }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Circle sx={{ color: "#22C55E", fontSize: 12 }} />
          <Typography sx={{ fontSize: 13, fontWeight: 600 }}>System Status</Typography>
        </Stack>
        <Typography sx={{ fontSize: 12, color: "#94A3B8", mt: 0.5 }}>
          All Systems Operational
        </Typography>
      </Box>
    </Box>
  );
}

function Topbar() {
  const dispatch = useDispatch();
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "#fff",
        color: "#0F172A",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      <Toolbar sx={{ gap: 2, minHeight: 68 }}>
        <IconButton onClick={() => dispatch(toggleSidebar())}>
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            flex: 1,
            maxWidth: 520,
            mx: "auto",
            display: "flex",
            alignItems: "center",
            gap: 1,
            background: "#F1F5F9",
            borderRadius: 99,
            px: 2,
            py: 0.75,
          }}
        >
          <SearchIcon sx={{ color: "#94A3B8", fontSize: 20 }} />
          <InputBase placeholder="Search anything..." sx={{ flex: 1, fontSize: 14 }} />
        </Box>
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton>
            <Badge badgeContent={5} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={3} color="error">
              <Mail />
            </Badge>
          </IconButton>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ pl: 1, cursor: "pointer" }}>
            <Avatar src={ADMIN.avatar} sx={{ width: 36, height: 36 }} />
            <Typography sx={{ fontWeight: 600, fontSize: 14 }}>{ADMIN.name}</Typography>
            <KeyboardArrowDown sx={{ fontSize: 18 }} />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default function AdminLayout() {
  const open = useSelector((s) => s.ui.sidebarOpen);
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", background: "#F8FAFC" }}>
      {open && <Sidebar />}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <Topbar />
        <Box sx={{ p: 3, flex: 1 }}>
          <Outlet />
        </Box>
        <Box
          sx={{
            px: 3,
            py: 2,
            display: "flex",
            justifyContent: "space-between",
            color: "#64748B",
            fontSize: 13,
            borderTop: "1px solid #E2E8F0",
            background: "#fff",
          }}
        >
          <span>© 2024 Oracle Job Portal. All rights reserved.</span>
          <span>Version 1.0.0</span>
        </Box>
      </Box>
    </Box>
  );
}
