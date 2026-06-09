import { Button, TextField, InputAdornment, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './SearchForm.css';
import StyledButton from '../button/Button';
import containerBG from '../../assets/container-bg.svg';
import MultipleSelectCheckmark from '../multi-select-checkmark/MultiSelectCheckmark';

export default function SearchForm() {
	return (
		<Grid container spacing={2}>
			<Grid size={{ xs: 6, md: 3, lg: 4 }}>
				<TextField
					placeholder="Job title or keyword"
					size="small"
					fullWidth
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon fontSize="small" />
								</InputAdornment>
							),
						},
					}}
				/>
			</Grid>
			<Grid size={{ xs: 6, md: 3, lg: 3 }}>
				<MultipleSelectCheckmark />
			</Grid>
			<Grid size={{ xs: 6, md: 3, lg: 3 }}>
				<TextField
					placeholder="Location"
					size="small"
					fullWidth
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position="start">
									<LocationOnOutlinedIcon fontSize="small" />
								</InputAdornment>
							),
						},
					}}
				/>
			</Grid>
			<Grid size={{ xs: 12, md: 3, lg: 2 }}>
				<StyledButton>Search Job</StyledButton>
			</Grid>
		</Grid>
	);
}
