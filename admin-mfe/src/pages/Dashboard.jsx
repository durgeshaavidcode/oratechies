import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
  Avatar,
  Button,
  Divider,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";
import {
  People,
  Business,
  Work,
  Description,
  CurrencyRupee,
  ArrowUpward,
  PersonAdd,
  Person,
  Payment,
  VerifiedUser,
  CalendarToday,
  KeyboardArrowDown,
  LocationOn,
} from "@mui/icons-material";
import {
  KPIS,
  USER_OVERVIEW,
  RECENT_ACTIVITIES,
  JOBS_BY_STATUS,
  APPS_BY_STATUS,
  TOP_SKILLS,
  TOP_LOCATIONS,
} from "../data/mockData";
import PageHeader from "../components/PageHeader";
import { LineChart, Donut } from "../components/Charts";

const ICONS = { People, Business, Work, Description, CurrencyRupee, PersonAdd, Person, Payment, VerifiedUser };

function KpiCard({ k }) {
  const Icon = ICONS[k.icon];
  return (
    <Card sx={{ p: 1 }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ background: `${k.color}1A`, color: k.color, width: 48, height: 48 }}>
            <Icon />
          </Avatar>
          <Box>
            <Typography sx={{ color: "text.secondary", fontSize: 13 }}>{k.label}</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 22 }}>{k.value}</Typography>
          </Box>
        </Stack>
        <Divider sx={{ my: 1.5 }} />
        <Stack direction="row" spacing={1} alignItems="center" sx={{ color: "#16A34A", fontSize: 13 }}>
          <ArrowUpward sx={{ fontSize: 14 }} />
          <Typography sx={{ fontWeight: 600, fontSize: 13 }}>{k.delta}</Typography>
          <Typography sx={{ color: "text.secondary", fontSize: 13 }}>from last month</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

function DonutCard({ title, items }) {
  const total = items.reduce((a, b) => a + b.value, 0);
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 1.5 }}>{title}</Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Donut items={items} total={total} />
          <Stack spacing={1} sx={{ flex: 1 }}>
            {items.map((i) => (
              <Stack key={i.label} direction="row" justifyContent="space-between" alignItems="center">
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box sx={{ width: 8, height: 8, borderRadius: 99, background: i.color }} />
                  <Typography sx={{ fontSize: 13 }}>{i.label}</Typography>
                </Stack>
                <Typography sx={{ fontWeight: 600, fontSize: 13 }}>{i.value.toLocaleString()}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

function RankList({ title, items, icon }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 1.5 }}>{title}</Typography>
        <Stack spacing={1.5}>
          {items.map((it, idx) => (
            <Stack key={it.name} direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" spacing={1.5} alignItems="center">
                {icon ? (
                  icon
                ) : (
                  <Typography sx={{ color: "text.secondary", width: 16, fontSize: 13 }}>{idx + 1}</Typography>
                )}
                <Typography sx={{ fontSize: 14 }}>{it.name}</Typography>
              </Stack>
              <Box sx={{ background: "#DBEAFE", color: "#1D4ED8", px: 1.25, py: 0.25, borderRadius: 1, fontSize: 12, fontWeight: 600 }}>
                {it.value.toLocaleString()}
              </Box>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  return (
    <Box>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back, Admin! Here's what's happening today."
        right={
          <Button
            variant="outlined"
            startIcon={<CalendarToday sx={{ fontSize: 16 }} />}
            endIcon={<KeyboardArrowDown />}
            sx={{ borderColor: "#E2E8F0", color: "text.primary", background: "#fff" }}
          >
            01 May 2024 - 31 May 2024
          </Button>
        }
      />

      <Grid container spacing={2.5}>
        {KPIS.map((k) => (
          <Grid key={k.label} item xs={12} sm={6} md={2.4}>
            <KpiCard k={k} />
          </Grid>
        ))}

        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                <Typography variant="h6">User Overview</Typography>
                <Select size="small" defaultValue="30">
                  <MenuItem value="30">Last 30 Days</MenuItem>
                  <MenuItem value="7">Last 7 Days</MenuItem>
                  <MenuItem value="90">Last 90 Days</MenuItem>
                </Select>
              </Stack>
              <Stack direction="row" spacing={3} sx={{ mb: 1 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box sx={{ width: 10, height: 10, borderRadius: 99, background: "#3B82F6" }} />
                  <Typography sx={{ fontSize: 13 }}>Candidates</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box sx={{ width: 10, height: 10, borderRadius: 99, background: "#22C55E" }} />
                  <Typography sx={{ fontSize: 13 }}>Recruiters</Typography>
                </Stack>
              </Stack>
              <LineChart
                data={{
                  labels: USER_OVERVIEW.labels,
                  series: [
                    { name: "Candidates", values: USER_OVERVIEW.candidates },
                    { name: "Recruiters", values: USER_OVERVIEW.recruiters },
                  ],
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                <Typography variant="h6">Recent Activities</Typography>
                <Typography sx={{ color: "primary.main", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>
                  View All
                </Typography>
              </Stack>
              <Stack spacing={2}>
                {RECENT_ACTIVITIES.map((a, i) => {
                  const I = ICONS[a.icon] || Person;
                  return (
                    <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
                      <Avatar sx={{ background: "#EFF6FF", color: "#3B82F6", width: 36, height: 36 }}>
                        <I sx={{ fontSize: 18 }} />
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: 14 }}>{a.title}</Typography>
                        <Typography sx={{ color: "text.secondary", fontSize: 12 }}>{a.subtitle}</Typography>
                      </Box>
                      <Typography sx={{ color: "text.secondary", fontSize: 12 }}>{a.time}</Typography>
                    </Stack>
                  );
                })}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <DonutCard title="Jobs by Status" items={JOBS_BY_STATUS} />
        </Grid>
        <Grid item xs={12} md={3}>
          <DonutCard title="Applications by Status" items={APPS_BY_STATUS} />
        </Grid>
        <Grid item xs={12} md={3}>
          <RankList title="Top Skills in Demand" items={TOP_SKILLS} />
        </Grid>
        <Grid item xs={12} md={3}>
          <RankList
            title="Top Locations"
            items={TOP_LOCATIONS}
            icon={<LocationOn sx={{ fontSize: 18, color: "#3B82F6" }} />}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
