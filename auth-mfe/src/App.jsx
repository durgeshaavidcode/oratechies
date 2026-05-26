import React from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import BrandingPanel from './components/BrandingPanel';
import LoginForm from './components/LoginForm';

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

const App = () => {
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
            background: 'linear-gradient(160deg, #0a1628 0%, #0d2137 40%, #0f2b4a 70%, #0a1e36 100%)',
            minHeight: { xs: '280px', sm: '320px', md: '100vh' },
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
            <LoginForm />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
