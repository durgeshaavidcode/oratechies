import { Paper, Chip, Button, Box, IconButton } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Link } from "react-router-dom";


export default function JobCard({ job }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        border: "1px solid #C8C8C6",
        borderRadius: 2,
        transition: "all 150ms",
        "&:hover": { boxShadow: "0 4px 16px rgba(0,0,0,0.10)", borderColor: "#C74634" },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
        <Box sx={{ flex: 1, minWidth: 0, width: "100%" }}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 1, flexWrap: "wrap" }}>
            {job.badge && (
              <Chip label={job.badge} size="small" sx={{ bgcolor: "#F5E0DC", color: "#9E2F21", height: 20 }} />
            )}
            <span className="text-xs text-[#6B6B69]">{job.department}</span>
          </Box>
          <Link to={`/jobs/${job.id}`} className="no-underline">
            <h3 className="text-base sm:text-lg font-semibold text-[#1D1D1B] hover:text-[#C74634] m-0">
              {job.title}
            </h3>
          </Link>
          <Box sx={{ display: "flex", gap: { xs: 1.5, sm: 2 }, mt: 1, flexWrap: "wrap", color: "#6B6B69", fontSize: 13 }}>
            <span className="flex items-center gap-1">
              <LocationOnOutlinedIcon sx={{ fontSize: 16 }} /> {job.location}
            </span>
            <span className="flex items-center gap-1">
              <WorkOutlinedIcon sx={{ fontSize: 16 }} /> {job.type}
            </span>
            <span className="flex items-center gap-1">
              <AccessTimeIcon sx={{ fontSize: 16 }} /> {job.postedAgo}
            </span>
          </Box>
          <Box sx={{ mt: 2, display: "flex", gap: 0.75, flexWrap: "wrap" }}>
            {job.skills.slice(0, 5).map((s) => (
              <Chip key={s} label={s} size="small" variant="outlined" sx={{ borderColor: "#C8C8C6" }} />
            ))}
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: { xs: "row", sm: "column" }, alignItems: { xs: "center", sm: "flex-end" }, gap: 1, width: { xs: "100%", sm: "auto" }, justifyContent: { xs: "space-between", sm: "flex-start" } }}>
          <IconButton size="small">
            <BookmarkBorderIcon fontSize="small" />
          </IconButton>
          <Link to={`/jobs/${job.id}/apply`} className="no-underline">
            <Button variant="contained" size="small" sx={{ minWidth: 100 }}>
              Apply
            </Button>
          </Link>
        </Box>
      </Box>
    </Paper>
  );
}
