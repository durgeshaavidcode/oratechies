import { Box, Typography } from "@mui/material";

export default function PageHeader({ title, subtitle, right }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        mb: 3,
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Box>
        <Typography variant="h4">{title}</Typography>
        {subtitle && (
          <Typography sx={{ color: "text.secondary", mt: 0.5, fontSize: 14 }}>
            {subtitle}
          </Typography>
        )}
      </Box>
      {right}
    </Box>
  );
}
