import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const features = [
  '100% Oracle Jobs',
  'Verified Recruiters',
  'Zero Candidate Fees',
];

const BrandingPanel: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        px: { xs: 4, md: 6, lg: 8 },
        py: { xs: 5, md: 6 },
        overflow: 'hidden',
      }}
    >
      {/* Decorative gradient circles */}
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-15%',
          left: '-15%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,130,13,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 800,
            color: '#ffffff',
            mb: 1.5,
            fontSize: { xs: '2rem', md: '2.5rem', lg: '2.8rem' },
            letterSpacing: '-0.5px',
          }}
        >
          Oratechies
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: 400,
            mb: 6,
            fontSize: { xs: '1rem', md: '1.15rem' },
          }}
        >
          The Home of Oracle Careers
        </Typography>

        <Stack spacing={2}>
          {features.map((feature) => (
            <Box
              key={feature}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              <CheckIcon
                sx={{
                  color: '#4FC3F7',
                  fontSize: 22,
                  fontWeight: 'bold',
                }}
              />
              <Typography
                sx={{
                  color: '#ffffff',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                }}
              >
                {feature}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default BrandingPanel;
