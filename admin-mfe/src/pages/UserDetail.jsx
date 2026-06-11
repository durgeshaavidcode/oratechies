import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Avatar,
  Typography,
  Stack,
  Breadcrumbs,
  Link,
  Button,
  Divider,
} from "@mui/material";
import {
  Email,
  Phone,
  CalendarMonth,
  Edit,
  Block,
  Delete,
  CheckCircle,
} from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import { USERS } from "../data/mockData";
import StatusChip from "../components/StatusChip";

const ROW = ({ label, value, valueSx }) => (
  <Stack direction="row" spacing={2}>
    <Typography sx={{ color: "text.secondary", minWidth: 110, fontSize: 14 }}>{label}</Typography>
    <Typography sx={{ color: "text.secondary" }}>:</Typography>
    <Typography sx={{ fontWeight: 500, fontSize: 14, ...valueSx }}>{value}</Typography>
  </Stack>
);

export default function UserDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const user = USERS.find((u) => u.id === id) || USERS[0];

  return (
    <Box>
      <Breadcrumbs sx={{ mb: 2 }}>
        <Link component={RouterLink} to="/admin/users" underline="hover" sx={{ color: "primary.main", fontWeight: 600 }}>
          Users
        </Link>
        <Typography sx={{ color: "text.primary", fontWeight: 600 }}>User Details</Typography>
      </Breadcrumbs>

      <Grid container spacing={2.5}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Avatar sx={{ width: 110, height: 110, mx: "auto", mb: 2, background: user.color, fontSize: 36 }}>
                {user.initials}
              </Avatar>
              <Typography variant="h6">{user.name}</Typography>
              <Box sx={{ mt: 1 }}>
                <StatusChip status={user.status} />
              </Box>
              <Divider sx={{ my: 2 }} />
              <Stack spacing={1.5} alignItems="flex-start">
                <Stack direction="row" spacing={1} alignItems="center">
                  <Email sx={{ fontSize: 18, color: "text.secondary" }} />
                  <Typography sx={{ fontSize: 13 }}>{user.email}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Phone sx={{ fontSize: 18, color: "text.secondary" }} />
                  <Typography sx={{ fontSize: 13 }}>{user.phone}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <CalendarMonth sx={{ fontSize: 18, color: "text.secondary" }} />
                  <Typography sx={{ fontSize: 13 }}>Joined on {user.joined}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <PersonIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                  <Typography sx={{ fontSize: 13 }}>User ID: {user.id}</Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>

          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1.5 }}>Quick Actions</Typography>
              <Stack spacing={1.25}>
                <Button startIcon={<Edit />} variant="outlined" fullWidth>
                  Edit User
                </Button>
                <Button startIcon={<Block />} variant="outlined" color="error" fullWidth>
                  Block User
                </Button>
                <Button startIcon={<Delete />} variant="outlined" color="inherit" fullWidth>
                  Delete User
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={9}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: "primary.main", borderBottom: 2, borderColor: "primary.main", display: "inline-block", pb: 0.5 }}>
                Profile
              </Typography>

              <Typography variant="h6" sx={{ mb: 2 }}>Personal Information</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1.5}>
                    <ROW label="Full Name" value={user.name} />
                    <ROW label="Email" value={user.email} />
                    <ROW label="Phone" value={user.phone} />
                    <ROW label="Date of Birth" value="15 Jan 1995" />
                    <ROW label="Gender" value="Male" />
                    <ROW label="Location" value="Bangalore, Karnataka, India" />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1.5}>
                    <ROW label="Role" value={user.role} />
                    <ROW
                      label="Status"
                      value={user.status}
                      valueSx={{ color: user.status === "Active" ? "success.main" : "warning.main" }}
                    />
                    <Stack direction="row" spacing={2}>
                      <Typography sx={{ color: "text.secondary", minWidth: 110, fontSize: 14 }}>Email Verified</Typography>
                      <Typography sx={{ color: "text.secondary" }}>:</Typography>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography sx={{ fontSize: 14 }}>Yes</Typography>
                        <CheckCircle sx={{ fontSize: 16, color: "success.main" }} />
                      </Stack>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                      <Typography sx={{ color: "text.secondary", minWidth: 110, fontSize: 14 }}>Phone Verified</Typography>
                      <Typography sx={{ color: "text.secondary" }}>:</Typography>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography sx={{ fontSize: 14 }}>Yes</Typography>
                        <CheckCircle sx={{ fontSize: 16, color: "success.main" }} />
                      </Stack>
                    </Stack>
                    <ROW label="Joined On" value={`${user.joined}, 10:30 AM`} />
                    <ROW label="Last Login" value="29 May 2024, 09:15 AM" />
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
