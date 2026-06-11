import { Chip } from "@mui/material";

const MAP = {
  Active: { bg: "#DCFCE7", color: "#15803D" },
  Approved: { bg: "#DCFCE7", color: "#15803D" },
  Verified: { bg: "#DCFCE7", color: "#15803D" },
  Pending: { bg: "#FEF3C7", color: "#B45309" },
  "Under Review": { bg: "#FEF3C7", color: "#B45309" },
  Blocked: { bg: "#FEE2E2", color: "#B91C1C" },
  Rejected: { bg: "#FEE2E2", color: "#B91C1C" },
  Failed: { bg: "#FEE2E2", color: "#B91C1C" },
  Success: { bg: "#DCFCE7", color: "#15803D" },
  Inactive: { bg: "#F1F5F9", color: "#475569" },
  Closed: { bg: "#E0F2FE", color: "#0369A1" },
  Expired: { bg: "#FFEDD5", color: "#C2410C" },
};

export default function StatusChip({ status, size = "small" }) {
  const c = MAP[status] || { bg: "#F1F5F9", color: "#475569" };
  return (
    <Chip
      label={status}
      size={size}
      sx={{
        background: c.bg,
        color: c.color,
        fontWeight: 600,
        borderRadius: 1.5,
        height: 26,
      }}
    />
  );
}
