import { Box, Container, Typography, Stack, Link as MLink } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#0d0d0d", color: "#ddd", mt: 8, py: 6 }}>
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          <Box>
            <Typography sx={{ color: "#C74634", fontWeight: 900, fontSize: 22 }}>
              ORATECHIES
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "#999" }}>
              Oracle Only Job Portal — 100% Oracle jobs, nothing else.
            </Typography>
          </Box>
          <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap" }}>
            <MLink href="#" underline="hover" color="inherit">About</MLink>
            <MLink href="#" underline="hover" color="inherit">Privacy</MLink>
            <MLink href="#" underline="hover" color="inherit">Terms</MLink>
            <MLink href="#" underline="hover" color="inherit">Contact</MLink>
          </Stack>
        </Stack>
        <Typography variant="caption" sx={{ display: "block", mt: 4, color: "#666" }}>
          © {new Date().getFullYear()} Oracle Only Job Portal. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
