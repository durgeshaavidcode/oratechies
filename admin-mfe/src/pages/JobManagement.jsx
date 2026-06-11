import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Tabs,
  Tab,
  Stack,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Typography,
  IconButton,
  Chip,
  Pagination,
  Grid,
  Menu,
} from "@mui/material";
import {
  Search,
  FilterList,
  Refresh,
  Add,
  LocationOn,
  Visibility,
  Edit,
  MoreHoriz,
  Work,
  Schedule,
  CheckCircle,
  Cancel,
  Event,
  FolderOff,
  ContentCopy,
  Description,
  Delete,
  Block,
} from "@mui/icons-material";
import PageHeader from "../components/PageHeader";
import StatusChip from "../components/StatusChip";
import { JOBS, JOB_STATS } from "../data/mockData";

const STAT_ICONS = { Work, Schedule, CheckCircle, Cancel, Event, FolderOff };

function StatCard({ s }) {
  const Icon = STAT_ICONS[s.icon];
  return (
    <Card sx={{ background: s.color, border: "none" }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ background: "rgba(255,255,255,.7)", color: s.iconBg, width: 48, height: 48 }}>
            <Icon />
          </Avatar>
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: 22 }}>{s.value}</Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 13 }}>{s.label}</Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

function ActionMenu() {
  const [anchor, setAnchor] = useState(null);
  return (
    <>
      <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
        <MoreHoriz />
      </IconButton>
      <Menu anchorEl={anchor} open={!!anchor} onClose={() => setAnchor(null)}>
        <MenuItem onClick={() => setAnchor(null)}>
          <Visibility sx={{ fontSize: 18, mr: 1 }} /> View Job
        </MenuItem>
        <MenuItem onClick={() => setAnchor(null)}>
          <Edit sx={{ fontSize: 18, mr: 1 }} /> Edit Job
        </MenuItem>
        <MenuItem onClick={() => setAnchor(null)}>
          <Description sx={{ fontSize: 18, mr: 1 }} /> View Applications
        </MenuItem>
        <MenuItem onClick={() => setAnchor(null)}>
          <Block sx={{ fontSize: 18, mr: 1 }} /> Close Job
        </MenuItem>
        <MenuItem onClick={() => setAnchor(null)} sx={{ color: "error.main" }}>
          <Delete sx={{ fontSize: 18, mr: 1 }} /> Delete Job
        </MenuItem>
      </Menu>
    </>
  );
}

export default function JobManagement() {
  const [tab, setTab] = useState(0);
  return (
    <Box>
      <PageHeader
        title="Job Management"
        subtitle="Manage, review and moderate all job postings on the platform."
        right={
          <Button variant="contained" startIcon={<Add />}>
            Post a Job
          </Button>
        }
      />

      <Card sx={{ mb: 2 }}>
        <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ px: 2, borderBottom: 1, borderColor: "divider" }}>
          <Tab label="All Jobs (256)" />
          <Tab label="Pending Approval (18)" />
          <Tab label="Approved (208)" />
          <Tab label="Rejected (12)" />
          <Tab label="Expired (18)" />
          <Tab label="Closed (15)" />
        </Tabs>
        <CardContent>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ mb: 2 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search by job title, company or keywords"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: "text.secondary" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField select size="small" defaultValue="all" sx={{ minWidth: 140 }}>
              <MenuItem value="all">All Status</MenuItem>
            </TextField>
            <TextField select size="small" defaultValue="all" sx={{ minWidth: 140 }}>
              <MenuItem value="all">All Job Types</MenuItem>
            </TextField>
            <TextField select size="small" defaultValue="all" sx={{ minWidth: 140 }}>
              <MenuItem value="all">All Locations</MenuItem>
            </TextField>
            <Button variant="outlined" startIcon={<FilterList />}>Filters</Button>
            <Button startIcon={<Refresh />} color="primary">Clear All</Button>
          </Stack>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Job Title</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Job Type</TableCell>
                <TableCell>Experience</TableCell>
                <TableCell>Posted On</TableCell>
                <TableCell>Applications</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {JOBS.map((j) => (
                <TableRow key={j.id} hover>
                  <TableCell>
                    <Typography sx={{ color: "primary.main", fontWeight: 600, cursor: "pointer" }}>{j.title}</Typography>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Avatar variant="rounded" sx={{ background: j.companyColor, width: 36, height: 36, fontSize: 13 }}>
                        {j.companyInitials}
                      </Avatar>
                      <Box>
                        <Typography sx={{ fontWeight: 600, fontSize: 14 }}>{j.company}</Typography>
                        <Typography sx={{ color: "primary.main", fontSize: 12 }}>{j.plan}</Typography>
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <LocationOn sx={{ fontSize: 14, color: "text.secondary" }} />
                      <Typography sx={{ fontSize: 13 }}>{j.location}</Typography>
                    </Stack>
                    <Typography sx={{ color: "text.secondary", fontSize: 12 }}>{j.type}</Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      size="small"
                      label={j.jobType}
                      sx={{ background: j.jobType === "Contract" ? "#EDE9FE" : "#DCFCE7", color: j.jobType === "Contract" ? "#7C3AED" : "#15803D", fontWeight: 600 }}
                    />
                  </TableCell>
                  <TableCell>{j.exp}</TableCell>
                  <TableCell>{j.posted}</TableCell>
                  <TableCell>
                    <Typography sx={{ fontWeight: 600 }}>{j.applications}</Typography>
                    <Typography sx={{ color: "primary.main", fontSize: 12, cursor: "pointer" }}>View</Typography>
                  </TableCell>
                  <TableCell>
                    <StatusChip status={j.status} />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton color="primary"><Visibility /></IconButton>
                    <IconButton color="default"><Edit /></IconButton>
                    <ActionMenu />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
            <Typography sx={{ color: "text.secondary", fontSize: 14 }}>Showing 1 to 7 of 256 jobs</Typography>
            <Pagination count={37} color="primary" shape="rounded" />
          </Stack>
        </CardContent>
      </Card>

      <Grid container spacing={2}>
        {JOB_STATS.map((s) => (
          <Grid key={s.label} item xs={12} sm={6} md={2}>
            <StatCard s={s} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
