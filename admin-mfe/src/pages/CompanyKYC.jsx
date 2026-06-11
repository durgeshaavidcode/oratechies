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
  Typography,
  Pagination,
  Chip,
} from "@mui/material";
import { Search, FilterList, Download } from "@mui/icons-material";
import PageHeader from "../components/PageHeader";
import { COMPANIES } from "../data/mockData";

export default function CompanyKYC() {
  const [tab, setTab] = useState(0);
  const nav = useNavigate();
  return (
    <Box>
      <PageHeader
        title="Company KYC Verification"
        subtitle="Review and verify company KYC documents and details."
        right={
          <Button variant="contained" startIcon={<Download />}>
            Export Report
          </Button>
        }
      />
      <Card>
        <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ px: 2, borderBottom: 1, borderColor: "divider" }}>
          <Tab label="Pending (12)" />
          <Tab label="Approved (145)" />
          <Tab label="Rejected (18)" />
          <Tab label="All Companies (175)" />
        </Tabs>
        <CardContent>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ mb: 2 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search by company name, email or contact person"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: "text.secondary" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField select size="small" defaultValue="all" sx={{ minWidth: 160 }}>
              <MenuItem value="all">All Plans</MenuItem>
              <MenuItem value="basic">Basic Plan</MenuItem>
              <MenuItem value="pro">Pro Plan</MenuItem>
              <MenuItem value="premium">Premium Plan</MenuItem>
            </TextField>
            <TextField select size="small" defaultValue="all" sx={{ minWidth: 160 }}>
              <MenuItem value="all">All Locations</MenuItem>
              <MenuItem value="blr">Bangalore</MenuItem>
              <MenuItem value="hyd">Hyderabad</MenuItem>
            </TextField>
            <Button variant="outlined" startIcon={<FilterList />}>
              Filters
            </Button>
          </Stack>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Company</TableCell>
                <TableCell>Contact Person</TableCell>
                <TableCell>Plan</TableCell>
                <TableCell>Submitted On</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {COMPANIES.map((c) => (
                <TableRow key={c.id} hover>
                  <TableCell>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Avatar variant="rounded" sx={{ background: c.color, width: 40, height: 40 }}>
                        {c.initials}
                      </Avatar>
                      <Box>
                        <Typography sx={{ fontWeight: 600 }}>{c.name}</Typography>
                        <Typography sx={{ color: "text.secondary", fontSize: 13 }}>{c.email}</Typography>
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ fontWeight: 600 }}>{c.contact}</Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: 13 }}>{c.phone}</Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={c.plan}
                      size="small"
                      sx={{ background: c.planColor, color: c.planText, fontWeight: 600 }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography>{c.submitted}</Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: 13 }}>{c.time}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="contained" size="small" onClick={() => nav(`/admin/company-kyc/${c.id}`)}>
                      Review
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
            <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
              Showing 1 to 5 of 12 companies
            </Typography>
            <Pagination count={3} color="primary" shape="rounded" />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
