import React from 'react';
import { Box, CssBaseline, Grid, Paper, Stack, ThemeProvider, Typography, createTheme } from '@mui/material';
import BrandingPanel from './components/BrandingPanel';
import LoginForm from './components/LoginForm';
import WorkIcon from '@mui/icons-material/Work';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import BusinessIcon from '@mui/icons-material/Business';
import { Footer } from 'shared-ui';

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  palette: {
    background: {
      default: '#f5f5f5',
    },
  },
});

const stats = [
  { icon: <WorkIcon />, value: "2,450+", label: "Active Oracle Jobs" },
  { icon: <BusinessIcon />, value: "350+", label: "Oracle Hiring Companies" },
  { icon: <PeopleAltIcon />, value: "95,000+", label: "Professionals Placed" },
  { icon: <VerifiedUserIcon />, value: "100%", label: "Oracle Jobs. Only Oracle." },
];

const App = ({ handleLogin }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          minHeight: '100vh',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Left Panel - Branding */}
        <Box
          sx={{
            flex: { xs: 'none', md: '0 0 48%', lg: '0 0 50%' },
            minHeight: { xs: '280px', md: '100vh' },
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            // Curved right edge on desktop
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: { xs: 'unset', md: '-40px' },
              bottom: { xs: '-40px', md: 0 },
              left: { xs: 0, md: 'unset' },
              width: { xs: '0%', md: '80px' },
              height: { xs: '80px', md: '100%' },
              background: { xs: '#f7f8fa', md: '#f7f8fa' },
              borderRadius: { xs: '40px 40px 0 0', md: '40px 0 0 40px' },
              zIndex: 2,
            },
          }}
        >
          <BrandingPanel />
        </Box>

        {/* Right Panel - Login Form */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f7f8fa',
            px: { xs: 2.5, sm: 4, md: 5, lg: 6 },
            py: { xs: 4, sm: 5, md: 4 },
            position: 'relative',
            zIndex: 3,
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 460,
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.06)',
              px: { xs: 3, sm: 4 },
              py: { xs: 3.5, sm: 4.5 },
            }}
          >
            <LoginForm handleLogin={handleLogin} />
          </Box>
        </Box>
        
      </Box>
      <Box sx={{m: 4}}>
          <Paper elevation={2} sx={{ p: { xs: 2, md: 2.5 }, borderRadius: 2 }}>
                    <Grid container spacing={2}>
                      {stats.map((s) => (
                        <Grid key={s.label} size={{ xs: 6, md: 3 }}>
                          <Stack direction="row" spacing={2} sx={{ alignItems: 'center', borderRight: '1px solid #e0e0e0'}}>
                            <Box sx={{ color: '#d8030b', display: 'flex' }}>
                              {s.icon}
                            </Box>
                            <Box>
                              <Typography
                                sx={{ fontWeight: 800, fontSize: { xs: 18, md: 22 } }}
                              >
                                {s.value}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {s.label}
                              </Typography>
                            </Box>
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>
        </Box>
        <Footer />
    </ThemeProvider>
  );
};

export default App;
