import { Box, Grid, Card, CardContent, Stack, Avatar, Typography, Breadcrumbs, Link, Button, ButtonGroup } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Work, Business, People, Description, CurrencyRupee, ArrowUpward, Download, KeyboardArrowDown } from "@mui/icons-material";
import PageHeader from "../components/PageHeader";
import { REPORT_KPIS } from "../data/mockData";

const ICONS = { Work, Business, People, Description, CurrencyRupee };

function KpiCard({ k }) {
  const Icon = ICONS[k.icon];
  return (
    <Card sx={{ background: k.color, border: "none" }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1.5 }}>
          <Avatar sx={{ background: "rgba(255,255,255,.65)", color: k.iconColor, width: 48, height: 48 }}>
            <Icon />
          </Avatar>
          <Box>
            <Typography sx={{ color: "text.secondary", fontSize: 13 }}>{k.label}</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 22 }}>{k.value}</Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={0.75} alignItems="center" sx={{ color: "#16A34A" }}>
          <ArrowUpward sx={{ fontSize: 14 }} />
          <Typography sx={{ fontWeight: 600, fontSize: 13 }}>{k.delta}</Typography>
          <Typography sx={{ color: "text.secondary", fontSize: 13 }}>vs last month</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function Reports() {
  return (
    <Box>
      <PageHeader
        title="Reports"
        subtitle="View and download detailed reports and analytics."
        right={
          <ButtonGroup variant="contained">
            <Button startIcon={<Download />}>Export Report</Button>
            <Button size="small"><KeyboardArrowDown /></Button>
          </ButtonGroup>
        }
      />
      <Breadcrumbs sx={{ mb: 2 }}>
        <Link component={RouterLink} to="/dashboard" underline="hover" sx={{ color: "primary.main", fontWeight: 600 }}>
          Home
        </Link>
        <Typography sx={{ color: "text.primary", fontWeight: 600 }}>Reports</Typography>
      </Breadcrumbs>
      <Grid container spacing={2.5}>
        {REPORT_KPIS.map((k) => (
          <Grid item xs={12} sm={6} md={2.4} key={k.label}>
            <KpiCard k={k} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
