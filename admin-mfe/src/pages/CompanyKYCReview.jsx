import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Avatar,
  Typography,
  Button,
  Tabs,
  Tab,
  Breadcrumbs,
  Link,
  IconButton,
  Chip,
  Divider,
  TextField,
} from "@mui/material";
import { useState } from "react";
import {
  ArrowBack,
  Download,
  KeyboardArrowDown,
  Email,
  Phone,
  Language,
  LocationOn,
  CheckCircle,
  Visibility,
  Description,
  PictureAsPdf,
  Cancel,
  Help,
  Info,
} from "@mui/icons-material";
import StatusChip from "../components/StatusChip";
import { COMPANIES, KYC_DOCUMENTS } from "../data/mockData";

function DocCard({ d }) {
  return (
    <Card sx={{ border: "1px solid #E2E8F0" }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
          <Typography sx={{ fontWeight: 600, fontSize: 14 }}>{d.name}</Typography>
          {d.verified && <Chip size="small" label="Verified" sx={{ background: "#DCFCE7", color: "#15803D", fontWeight: 600 }} />}
        </Stack>
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
          <Avatar variant="rounded" sx={{ background: "#FEE2E2", width: 40, height: 48 }}>
            <PictureAsPdf sx={{ color: "#DC2626" }} />
          </Avatar>
          <Box>
            <Typography sx={{ color: "primary.main", fontSize: 13, fontWeight: 600 }}>{d.file}</Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 12, whiteSpace: "pre-line" }}>
              {d.extra}
            </Typography>
          </Box>
        </Stack>
        <Button startIcon={<Visibility />} variant="outlined" fullWidth>
          View Document
        </Button>
      </CardContent>
    </Card>
  );
}

export default function CompanyKYCReview() {
  const { id } = useParams();
  const nav = useNavigate();
  const c = COMPANIES.find((x) => x.id === id) || COMPANIES[0];
  const [tab, setTab] = useState(0);
  const checklist = ["Company Registration Certificate", "PAN Card", "GST Certificate", "MoA / AoA", "Address Proof", "Bank Statement"];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2, flexWrap: "wrap", gap: 2 }}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <IconButton onClick={() => nav(-1)} sx={{ background: "#fff", border: "1px solid #E2E8F0" }}>
            <ArrowBack />
          </IconButton>
          <Breadcrumbs>
            <Link component={RouterLink} to="/admin/company-kyc" underline="hover" sx={{ color: "primary.main", fontWeight: 600 }}>
              Company KYC
            </Link>
            <Typography sx={{ color: "text.primary", fontWeight: 600 }}>Review Company</Typography>
          </Breadcrumbs>
        </Stack>
        <Stack direction="row" spacing={1.5}>
          <Button variant="outlined" startIcon={<Download />}>Download All Documents</Button>
          <Button variant="outlined" endIcon={<KeyboardArrowDown />}>More Actions</Button>
        </Stack>
      </Stack>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Stack direction="row" spacing={2}>
                <Avatar variant="rounded" sx={{ background: c.color, width: 72, height: 72, fontSize: 24 }}>
                  {c.initials}
                </Avatar>
                <Box>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                    <Typography variant="h6">{c.name}</Typography>
                    <StatusChip status={c.status} />
                  </Stack>
                  <Stack spacing={0.75}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Email sx={{ fontSize: 16, color: "text.secondary" }} />
                      <Typography sx={{ fontSize: 13 }}>{c.email}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Phone sx={{ fontSize: 16, color: "text.secondary" }} />
                      <Typography sx={{ fontSize: 13 }}>{c.phone}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Language sx={{ fontSize: 16, color: "text.secondary" }} />
                      <Typography sx={{ fontSize: 13 }}>{c.website}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <LocationOn sx={{ fontSize: 16, color: "text.secondary" }} />
                      <Typography sx={{ fontSize: 13 }}>{c.location}</Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                {[
                  ["Company ID", c.id],
                  ["Plan", <Chip key="p" label={c.plan} size="small" sx={{ background: c.planColor, color: c.planText, fontWeight: 600 }} />],
                  ["Registered On", c.registered],
                  ["Contact Person", c.contact],
                  ["Designation", c.designation],
                  ["Contact Number", c.phone],
                  ["Email", c.email],
                ].map(([k, v]) => (
                  <Stack key={k} direction="row" spacing={2}>
                    <Typography sx={{ color: "text.secondary", minWidth: 130, fontSize: 13 }}>{k}</Typography>
                    {typeof v === "string" ? <Typography sx={{ fontSize: 13, fontWeight: 500 }}>{v}</Typography> : v}
                  </Stack>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>KYC Submission Details</Typography>
              <Stack spacing={1.25}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{ color: "text.secondary", fontSize: 13 }}>Submitted On</Typography>
                  <Typography sx={{ fontSize: 13, fontWeight: 500 }}>{c.submitted}, {c.time}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{ color: "text.secondary", fontSize: 13 }}>Total Documents</Typography>
                  <Typography sx={{ fontSize: 13, fontWeight: 500 }}>6</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{ color: "text.secondary", fontSize: 13 }}>Pending Documents</Typography>
                  <Typography sx={{ fontSize: 13, fontWeight: 500 }}>0</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography sx={{ color: "text.secondary", fontSize: 13 }}>Verification Status</Typography>
                  <StatusChip status="Under Review" />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Card>
            <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ px: 2, borderBottom: 1, borderColor: "divider" }}>
              <Tab label="KYC Documents" />
              <Tab label="Company Information" />
              <Tab label="Billing Information" />
              <Tab label="Activity Log" />
            </Tabs>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>KYC Documents</Typography>
              <Grid container spacing={2}>
                {KYC_DOCUMENTS.map((d) => (
                  <Grid key={d.name} item xs={12} sm={6} md={4}>
                    <DocCard d={d} />
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ mt: 2, p: 1.5, borderRadius: 1, background: "#EFF6FF", color: "#1D4ED8", display: "flex", alignItems: "center", gap: 1 }}>
                <Info sx={{ fontSize: 18 }} />
                <Typography sx={{ fontSize: 14 }}>All required documents have been submitted.</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1.5 }}>Verification Checklist</Typography>
              <Stack spacing={1.25}>
                {checklist.map((c) => (
                  <Stack key={c} direction="row" spacing={1} alignItems="center">
                    <CheckCircle sx={{ color: "success.main", fontSize: 20 }} />
                    <Typography sx={{ fontSize: 14 }}>{c}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Divider sx={{ my: 2 }} />
              <Typography sx={{ fontWeight: 600, mb: 1 }}>Admin Notes</Typography>
              <TextField
                multiline
                rows={3}
                fullWidth
                placeholder="Add your notes here..."
                size="small"
                helperText="0 / 500"
              />
              <Stack spacing={1.25} sx={{ mt: 2 }}>
                <Button variant="contained" color="success" startIcon={<CheckCircle />}>
                  Approve Company
                </Button>
                <Button variant="contained" color="error" startIcon={<Cancel />}>
                  Reject Company
                </Button>
                <Button variant="outlined" startIcon={<Help />}>
                  Request More Information
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
