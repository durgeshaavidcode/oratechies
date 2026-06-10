import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
  Divider,
  Stack,
  Alert,
} from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import StyledButton from 'shared-ui/src/button/Button';

const LoginForm: React.FC<{ handleLogin?: (e?: React.FormEvent) => void }> = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSocialLogin = () => {
    console.log('Login with provider:');
    if (handleLogin) {
      handleLogin();
    }
  };

  const handleSubmitClick = (e: React.FormEvent) => {
    // e.preventDefault();
    if (handleLogin) {
      handleLogin(e);
    }
  };

  const noOps = () => {};

  return (
    <Box
      component="form"
      onSubmit={handleSubmitClick}
      sx={{
        width: '100%',
        maxWidth: 440,
        mx: 'auto'
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 800,
          color: '#1a1a2e',
          mb: 0.5,
          fontSize: { xs: '1.75rem', md: '2rem' },
        }}
      >
        Welcome Back!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#666',
          mb: 3.5,
          fontSize: '0.95rem',
        }}
      >
        Login to continue your Oracle career journey
      </Typography>

      {/* Email */}
      <TextField
        fullWidth
        label="Email Address"
        type="email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          mb: 2.5,
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: '#fff',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#F5820D',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#F5820D',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#F5820D',
          },
        }}
      />

      {/* Password */}
      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{
          mb: 1.5,
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: '#fff',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#F5820D',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#F5820D',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#F5820D',
          },
        }}
      />

      {/* Remember Me & Forgot Password */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2.5,
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              sx={{
                color: '#ccc',
                '&.Mui-checked': {
                  color: '#d8030b',
                },
              }}
            />
          }
          label={
            <Typography sx={{ fontSize: '0.9rem', color: '#333', fontWeight: 500 }}>
              Remember Me
            </Typography>
          }
        />
        <Link
          href="#"
          underline="none"
          sx={{
            color: '#d8030b',
            fontSize: '0.9rem',
            fontWeight: 600,
            '&:hover': {
              color: '#0066cc',
            },
          }}
        >
          Forgot Password?
        </Link>
      </Box>

      {/* Login Button */}
      <StyledButton
        type="submit"
          onClick={noOps}
        fullWidth
        variant="contained"
        size="large"
      >
        Login
      </StyledButton>

      {/* Divider */}
      <Divider
        sx={{
          my: 3,
          color: '#999',
          fontSize: '0.85rem',
          fontWeight: 500,
          '&::before, &::after': {
            borderColor: '#e0e0e0',
          },
        }}
      >
        OR
      </Divider>

      {/* Social Login Buttons */}
      {/* <Stack spacing={1.5} sx={{ mb: 3 }}>
        <SocialLoginButton provider="linkedin" onClick={handleSocialLogin} />
        <SocialLoginButton provider="google" onClick={handleSocialLogin} />
      </Stack> */}

      {/* Create Account */}
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          color: '#333',
          fontWeight: 600,
          mb: 2.5,
          fontSize: '0.95rem',
        }}
      >
        New to Oratechies?{' '}
        <Link
          href="#"
          underline="none"
          sx={{
            color: '#d8030b',
            fontWeight: 700,
            '&:hover': {
              color: '#0066cc',
            },
          }}
        >
          Create Account
        </Link>
      </Typography>

      {/* Warning */}
      <Alert
        icon={<WarningAmberIcon sx={{ color: '#F5820D' }} />}
        severity="warning"
        sx={{
          backgroundColor: 'transparent',
          border: 'none',
          p: 0,
          '& .MuiAlert-message': {
            color: '#777',
            fontSize: '0.8rem',
            lineHeight: 1.5,
          },
          '& .MuiAlert-icon': {
            mr: 1,
            alignItems: 'flex-start',
            pt: 0.2,
          },
        }}
      >
        Oratechies never charges candidates. Do not pay money to recruiters.
      </Alert>
    </Box>
  );
};

export default LoginForm;
