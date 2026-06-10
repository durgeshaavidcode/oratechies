import {
	Container,
	Chip,
	Typography,
	Box,
	Grid,
	Stack,
	Paper,
	Card,
	CardContent,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import OractechBG from '../../../assets/oratechies-bg.png';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import BusinessIcon from '@mui/icons-material/Business';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GroupsIcon from '@mui/icons-material/Groups';
import CloudIcon from '@mui/icons-material/Cloud';	
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import BarChartIcon from '@mui/icons-material/BarChart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShieldIcon from '@mui/icons-material/Shield';
import VerifiedIcon from '@mui/icons-material/Verified';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DescriptionIcon from '@mui/icons-material/Description';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Link } from 'react-router-dom';
import { Footer, Header, SearchForm, StyledButton } from '../../../../../shared-component/src';
import JobBG from '../../../assets/search-bg.png';
// @ts-ignore: CSS module declarations are not available in this project setup
import './index.css';
import Button from 'shared-ui/src/button/Button';


const stats = [
  { icon: <WorkIcon />, value: "2,450+", label: "Active Oracle Jobs" },
  { icon: <BusinessIcon />, value: "350+", label: "Oracle Hiring Companies" },
  { icon: <PeopleAltIcon />, value: "95,000+", label: "Professionals Placed" },
  { icon: <VerifiedUserIcon />, value: "100%", label: "Oracle Jobs. Only Oracle." },
];
const categories = [
  { icon: <AccountTreeIcon />, name: "Oracle SCM", jobs: "680+ Jobs" },
  { icon: <GroupsIcon />, name: "Oracle HCM", jobs: "520+ Jobs" },
  { icon: <CloudIcon />, name: "Oracle Cloud", jobs: "410+ Jobs" },
  { icon: <StorageIcon />, name: "PL/SQL Developer", jobs: "360+ Jobs" },
  { icon: <CodeIcon />, name: "Oracle EBS", jobs: "300+ Jobs" },
  { icon: <BarChartIcon />, name: "Oracle Fusion", jobs: "180+ Jobs" },
];

const features = [
  { icon: <ShieldIcon />, title: "100% Oracle Jobs", desc: "Only Oracle technologies. No mixed listings." },
  { icon: <VerifiedIcon />, title: "Verified Employers", desc: "All companies are verified & genuine." },
  { icon: <NotificationsActiveIcon />, title: "Daily Job Alerts", desc: "Get personalized job alerts straight to your inbox." },
  { icon: <DescriptionIcon />, title: "Easy Apply", desc: "Quick and hassle-free application process." },
  { icon: <TrendingUpIcon />, title: "Career Growth", desc: "Resources and tips to grow your Oracle career." },
];
const companies = ["TCS", "Infosys", "Wipro", "HCLTech", "Tech Mahindra", "Accenture", "Deloitte"];

const popular = [
	'Oracle SCM',
	'Oracle HCM',
	'Oracle Fusion',
	'PL/SQL Developer',
	'Oracle EBS',
	'Oracle Cloud',
];

const noOps = () => {};

export default function LandingPage() {
	return (
		<div className="jf-root">
			<Header />
			<Container maxWidth="xl" sx={{ backgroundImage: `url(${OractechBG})`, px: 3, py: 6 }}>
				<Box>
					<Typography variant="h3" gutterBottom sx={{ color: '#fff' }}>
						Your Next Career Move Starts Here.
					</Typography>
					<Typography variant="h4" gutterBottom sx={{ color: '#d8030b' }}>
						Powered by Oracle.
					</Typography>
					<Typography variant="body2" gutterBottom sx={{ color: '#e0dcdc' }}>
						Find 100% Oracle jobs across India, Build. Grow. Succeed with Oracle.
					</Typography>
					<Paper
						elevation={12}
						sx={{ p: { xs: 2, md: 2.5 }, borderRadius: 2, maxWidth: 1100 }}
					>
						<Grid container spacing={2}>
							<Grid size={{ xs: 12, md: 12 }}>
								<SearchForm />
							</Grid>
							<Stack
								direction="row"
								spacing={1}
								sx={{ mt: 2, flexWrap: 'wrap', gap: 1, alignItems: 'center' }}
							>
								<Typography
									variant="caption"
									sx={{ color: 'text.secondary', mr: 1 }}
								>
									Popular Searches:
								</Typography>
								{popular.map((p) => (
									<Chip key={p} label={p} size="small" clickable />
								))}
							</Stack>
						</Grid>
					</Paper>
				</Box>
			</Container>
			<Container maxWidth="md" sx={{ mt: -3, position: 'relative', zIndex: 2 }}>
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
			</Container>
			{/* CATEGORIES */}
      <Container maxWidth="xl" sx={{ mt: 6 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h1" sx={{ fontSize: { xs: 24, md: 32 } }}>
            Popular Oracle Job Categories
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            Explore top Oracle job roles and kickstart your dream career
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {categories.map((c) => (
            <Grid key={c.name} size={{ xs: 6, sm: 4, md: 2 }}>
              <Card
                variant="outlined"
                sx={{
                  textAlign: "center",
                  py: 3,
                  height: "100%",
                  transition: "all .2s",
				  bgcolor: "#fafafa",
                  "&:hover": {
                    borderColor: "#d8030b",
                    boxShadow: 3,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ color: "#d8030b", fontSize: 32, mb: 1 }}>
                    {c.icon}
                  </Box>
                  <Typography sx={{ fontWeight: 700 }}>{c.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {c.jobs}
                  </Typography>
                  <StyledButton
                    size="small"
                    endIcon={<ArrowForwardIcon />}
                    component={Link}
                    to="/jobs"
                    sx={{ mt: 1, color: "#d8030b" }}
					onClick={noOps}
                  >
                    View Jobs
                  </StyledButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* WHY */}
      <Box sx={{ backgroundImage: `url(${JobBG})`, mt: 6, py: 6 }}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            sx={{ textAlign: "center", mb: 5, fontSize: { xs: 24, md: 32 } }}
          >
            Why Choose Oracle Only Job Portal?
          </Typography>
          <Grid container spacing={3}>
            {features.map((f) => (
              <Grid key={f.title} size={{ xs: 12, sm: 6, md: 2.4 }}>
                <Stack spacing={1.5} sx={{ alignItems: "flex-start" }}>
                  <Box
                    sx={{
                      bgcolor: "rgba(199,70,52,0.1)",
                      color: "#d8030b",
                      p: 1.2,
                      borderRadius: "50%",
                      display: "flex",
                    }}
                  >
                    {f.icon}
                  </Box>
                  <Typography sx={{ fontWeight: 700 }}>{f.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {f.desc}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* TRUSTED BY */}
      <Container maxWidth="xl" sx={{ pt: 6 }}>
        <Typography variant="h5" sx={{ textAlign: "center", mb: 4, fontWeight: 700 }}>
          Trusted by Leading Organizations
        </Typography>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {companies.map((c) => (
            <Grid key={c} size={{ xs: 6, sm: 4, md: 1.7 }}>
              <Paper
                variant="outlined"
                sx={{
                  py: 3,
                  textAlign: "center",
                  fontWeight: 700,
                  color: "text.secondary",
                }}
              >
                {c}
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <StyledButton fullWidth={false} onClick={noOps} variant="outlined">
            View All Companies
          </StyledButton>
        </Box>
      </Container>
			<Footer />
		</div>
	);
}
