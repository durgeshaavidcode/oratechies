import React from 'react';
import Button from '@mui/material/Button';

export default function StyledButton({ children, onClick, variant = 'contained' }) {
  const containedStyle = {
				backgroundColor: (theme) =>
					theme.palette.mode === 'light' ? '#d8030b' : '#424242', 
				color: (theme) => (theme.palette.mode === 'light' ? '#ffffff':'#d8030b'),
				'&:hover': {
					backgroundColor: (theme) =>
						theme.palette.mode === 'light' ? '#ffffff' : '#212121',
          color: (theme) => (theme.palette.mode === 'light' ? '#d8030b' : '#ffffff'),
				},
			}
  const outlinedStyle = {
        // 1. Set the text and border colors based on the mode
        color: (theme) => 
          theme.palette.mode === 'light' ? '#d8030b' : '#b0bec5', // Black text vs Light Gray text
        borderColor: (theme) => 
          theme.palette.mode === 'light' ? '#d8030b' : '#424242', // Black border vs Dark Gray border

        // 2. Adjust hover states so it behaves beautifully
        '&:hover': {
          borderColor: (theme) => 
            theme.palette.mode === 'light' ? '#212121' : '#616161',
          backgroundColor: (theme) => 
            theme.palette.mode === 'light' ? '#d8030b' : 'rgba(255, 255, 255, 0.05)',
          color: (theme) => 
          theme.palette.mode === 'light' ? '#fff' : '#b0bec5',
        },
      }
	return (
		<Button
			variant={variant}
      fullWidth
      sx={variant === 'contained' ? containedStyle : outlinedStyle}

		>
			{children}
		</Button>
	);
}
