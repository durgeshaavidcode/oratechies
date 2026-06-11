import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Tabs,
  Tab,
  Stack,
  InputAdornment,
  TextField,
  MenuItem,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  IconButton,
  Pagination,
  Typography,
} from "@mui/material";
import { Search, Add, Visibility } from "@mui/icons-material";
import PageHeader from "../components/PageHeader";
import StatusChip from "../components/StatusChip";
import { USERS } from "../data/mockData";

export default function Users() {
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState(1);
  const nav = useNavigate();
  return (
    <Box>
      <PageHeader title="Users" />
      <Card>
        <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ px: 2, borderBottom: 1, borderColor: "divider" }}>
          <Tab label="All Users" />
          <Tab label="Candidates" />
          <Tab label="Recruiters" />
          <Tab label="Blocked Users" />
        </Tabs>
        <CardContent>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ mb: 2 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search by name, email or phone"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: "text.secondary" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField select size="small" defaultValue="all" sx={{ minWidth: 160 }}>
              <MenuItem value="all">All Roles</MenuItem>
              <MenuItem value="candidate">Candidate</MenuItem>
              <MenuItem value="recruiter">Recruiter</MenuItem>
              <MenuItem value="company">Company</MenuItem>
            </TextField>
            <TextField select size="small" defaultValue="all" sx={{ minWidth: 160 }}>
              <MenuItem value="all">All Status</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="blocked">Blocked</MenuItem>
            </TextField>
            <Button variant="contained" startIcon={<Add />} sx={{ minWidth: 140 }}>
              Add User
            </Button>
          </Stack>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Joined On</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {USERS.map((u) => (
                <TableRow key={u.id} hover>
                  <TableCell>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Avatar sx={{ background: u.color, width: 36, height: 36, fontSize: 14 }}>
                        {u.initials}
                      </Avatar>
                      <Typography sx={{ fontWeight: 600 }}>{u.name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{u.role}</TableCell>
                  <TableCell>{u.email}</TableCell>
                  <TableCell>
                    <StatusChip status={u.status} />
                  </TableCell>
                  <TableCell>{u.joined}</TableCell>
                  <TableCell align="right">
                    <IconButton color="primary" onClick={() => nav(`/admin/users/${u.id}`)}>
                      <Visibility />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
            <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
              Showing 1 to 7 of 154 users
            </Typography>
            <Pagination count={22} page={page} onChange={(_, p) => setPage(p)} color="primary" shape="rounded" />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
