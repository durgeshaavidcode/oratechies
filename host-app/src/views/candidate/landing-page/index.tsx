import {
  AppBar,
  Toolbar,
  Button,
  Container,
  TextField,
  InputAdornment,
  Chip,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
// @ts-ignore: CSS module declarations are not available in this project setup
import "./index.css";

const categories = ["Design", "Development", "Marketing", "Sales", "Tech"];
const types = ["Remote", "Onsite", "Finance", "HR", "Tech"];

const jobs = [
  { title: "Lead Product Designer", company: "Innovate Corp", location: "USA York, NY", salary: "USD 120k - 150k", tags: ["Remote", "Full-time"] },
  { title: "Development", company: "Tech Solutions", location: "USA York, NY", salary: "USD 100k - 130k", tags: ["Remote", "Full-time"] },
  { title: "Software Engineer", company: "Tech Solutions", location: "USA York, NY", salary: "USD 120k - 150k", tags: ["Remote", "Full-time"] },
  { title: "Marketing Manager", company: "Tech Solutions", location: "USA York, NY", salary: "USD 110k - 140k", tags: ["Remote", "Full-time"] },
  { title: "Sales Representative", company: "Tech Solutions", location: "USA York, NY", salary: "USD 80k - 110k", tags: ["Remote", "Full-time"] },
  { title: "Global Sales Lead", company: "Global Sales", location: "USA York, NY", salary: "USD 130k - 160k", tags: ["Remote", "Full-time"] },
];

export default function LandingPage() {
  return (
    <div className="jf-root">
      <AppBar position="sticky" className="jf-appbar">
        <Toolbar className="jf-toolbar">
          <div className="jf-logo">
            <span className="jf-logo-mark">
              <WorkOutlineIcon />
            </span>
            OraTechies
          </div>
          <nav className="jf-nav">
            <Button className="jf-nav-link">Jobs</Button>
            <Button className="jf-nav-link">Companies</Button>
            <Button className="jf-nav-link">About</Button>
            <Link key="/auth" to="/auth" className="jf-signin">Sign in</Link>
          </nav>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" className="jf-container">
        <div className="jf-search">
          <TextField
            placeholder="Job title or keyword"
            size="small"
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            placeholder="Location"
            size="small"
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnOutlinedIcon fontSize="small" />
                  </InputAdornment>
                ),
              },
            }}
          />
          <Button className="jf-search-btn" variant="contained">Search</Button>
        </div>

        <div className="jf-chip-row">
          {categories.map((c, i) => (
            <Chip key={c} label={c} className={`jf-chip ${i === 0 ? "jf-chip-active" : ""}`} />
          ))}
        </div>
        <div className="jf-chip-row">
          {types.map((t, i) => (
            <Chip key={t} label={t} className={`jf-chip ${i === 0 ? "jf-chip-active" : ""}`} />
          ))}
        </div>

        <Typography className="jf-subtitle">
          Designing user experiences for our cutting products.
        </Typography>

        <div className="jf-main">
          <div className="jf-jobs">
            {jobs.map((j) => (
              <Card key={j.title} className="jf-card">
                <CardContent>
                  <div className="jf-card-top">
                    <div className="jf-avatar" />
                    <div style={{ flex: 1 }}>
                      <Typography className="jf-job-title">{j.title}</Typography>
                      <div className="jf-job-meta">{j.company}</div>
                      <div className="jf-job-meta">{j.location}</div>
                      <div className="jf-job-meta">{j.salary}</div>
                    </div>
                  </div>
                  <Typography className="jf-job-desc">
                    Designing user experiences for cutting-edge products.
                  </Typography>
                  <div className="jf-tag-row">
                    {j.tags.map((t) => (
                      <Chip key={t} label={t} className="jf-tag" size="small" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <aside className="jf-filters">
            <Typography variant="h6">Filters</Typography>
            <div className="jf-filter-item">
              Location
              <IconButton size="small"><MoreVertIcon fontSize="small" /></IconButton>
            </div>
            <div className="jf-filter-item">Job Type</div>
            <div className="jf-filter-item">Experience Level</div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
