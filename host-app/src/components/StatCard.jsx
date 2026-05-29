import { Paper, Box } from "@mui/material";

export default function StatCard({
  label,
  value,
  trend,
  icon,
  accent = "#C74634",
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        border: "1px solid #C8C8C6",
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        height: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
        <span className="text-xs font-semibold uppercase tracking-wide text-[#6B6B69]">{label}</span>
        {icon && (
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: 1,
              bgcolor: `${accent}15`,
              color: accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>
        )}
      </Box>
      <div className="text-3xl font-bold text-[#1D1D1B]">{value}</div>
      {trend && <div className="text-xs text-[#1B7D3F] font-medium mt-1">{trend}</div>}
    </Paper>
  );
}
