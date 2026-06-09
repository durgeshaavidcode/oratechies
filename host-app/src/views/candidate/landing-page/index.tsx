import {
	Container,
	Chip,
	Card,
	CardContent,
	Typography,
	IconButton,
	Box,
	Grid,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OractechBG from '../../../assets/oratechies-bg.png';
import { Header, SearchForm } from '../../../../../shared-component/src';
// @ts-ignore: CSS module declarations are not available in this project setup
import './index.css';


const categories = ['Design', 'Development', 'Marketing', 'Sales', 'Tech'];
const types = ['Remote', 'Onsite', 'Finance', 'HR', 'Tech'];

const jobs = [
	{
		title: 'Lead Product Designer',
		company: 'Innovate Corp',
		location: 'USA York, NY',
		salary: 'USD 120k - 150k',
		tags: ['Remote', 'Full-time'],
	},
	{
		title: 'Development',
		company: 'Tech Solutions',
		location: 'USA York, NY',
		salary: 'USD 100k - 130k',
		tags: ['Remote', 'Full-time'],
	},
	{
		title: 'Software Engineer',
		company: 'Tech Solutions',
		location: 'USA York, NY',
		salary: 'USD 120k - 150k',
		tags: ['Remote', 'Full-time'],
	},
	{
		title: 'Marketing Manager',
		company: 'Tech Solutions',
		location: 'USA York, NY',
		salary: 'USD 110k - 140k',
		tags: ['Remote', 'Full-time'],
	},
	{
		title: 'Sales Representative',
		company: 'Tech Solutions',
		location: 'USA York, NY',
		salary: 'USD 80k - 110k',
		tags: ['Remote', 'Full-time'],
	},
	{
		title: 'Global Sales Lead',
		company: 'Global Sales',
		location: 'USA York, NY',
		salary: 'USD 130k - 160k',
		tags: ['Remote', 'Full-time'],
	},
];

export default function LandingPage() {
	return (
		<div className="jf-root">
			<Header />
			<Container maxWidth="xl" sx={{ backgroundImage: `url(${OractechBG})`, px: 3, py: 4 }}>
				<Box>
					<Typography variant="h3" gutterBottom sx={{color: '#fff'}}>
						Your Next Career Move Starts Here.
					</Typography>
					<Typography variant="h4" gutterBottom sx={{color: '#d8030b'}}>
						Powered by Oracle.
					</Typography>
					<Typography variant="body2" gutterBottom sx={{color: '#e0dcdc'}}>
						Find 100% Orcle jobs across India, Build Grow, Succeed with Oracle.
					</Typography>
					<Grid
						container
						spacing={2}
            sx={{ backgroundColor: '#fff', mt: 3, p: 2, borderRadius: 2, width: '80%' }}
					>
						<Grid size={{ xs: 12, md: 12 }}>
							<SearchForm />
						</Grid>
						<Grid size={{ xs: 12, md: 12 }}>
							<Grid container spacing={0}>
								<Grid size={{ xs: 12, md: 2 }}>
									<Typography
										variant="overline"
										gutterBottom
									>
										Popular Searches:
									</Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 10 }}>
									{categories.map((c, i) => (
										<Chip
											key={c}
											label={c}
											sx={{ mr: 1 }}
											variant={i === 0 ? 'outlined' : 'filled'}
										/>
									))}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Container>
			<Container maxWidth="lg">
				<div className="jf-chip-row">
					{types.map((t, i) => (
						<Chip
							key={t}
							label={t}
							className={`jf-chip ${i === 0 ? 'jf-chip-active' : ''}`}
						/>
					))}
				</div>

				<Typography className="jf-subtitle">
					Designing user experiences for our cutting products.
				</Typography>

				<div className="jf-main">
					<div className="jf-jobs">
						{jobs.map((j) => (
							<Card key={j.title} className="jf-card">
								<CardContent>
									<div className="jf-card-top">
										<div className="jf-avatar" />
										<div style={{ flex: 1 }}>
											<Typography className="jf-job-title">
												{j.title}
											</Typography>
											<div className="jf-job-meta">{j.company}</div>
											<div className="jf-job-meta">{j.location}</div>
											<div className="jf-job-meta">{j.salary}</div>
										</div>
									</div>
									<Typography className="jf-job-desc">
										Designing user experiences for cutting-edge products.
									</Typography>
									<div className="jf-tag-row">
										{j.tags.map((t) => (
											<Chip
												key={t}
												label={t}
												className="jf-tag"
												size="small"
											/>
										))}
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					<aside className="jf-filters">
						<Typography variant="h6">Filters</Typography>
						<div className="jf-filter-item">
							Location
							<IconButton size="small">
								<MoreVertIcon fontSize="small" />
							</IconButton>
						</div>
						<div className="jf-filter-item">Job Type</div>
						<div className="jf-filter-item">Experience Level</div>
					</aside>
				</div>
			</Container>
		</div>
	);
}
