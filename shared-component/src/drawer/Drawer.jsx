import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { Link } from 'react-router-dom';
import StyledButton from '../button/Button';

export default function SideDrawer() {
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	const DrawerList = (
		<Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
			<List>
				{['Jobs', 'Companies', 'Skills', 'Career Tips'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				<ListItem key={'Resources'} disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<MailIcon />
						</ListItemIcon>
						<ListItemText primary={'Resources'} />
					</ListItemButton>
				</ListItem>
				<Divider />
				{['Test', 'Test 2', 'Test 3'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				<Box  sx={{ m: 2 }}>
					<Link key="/auth" to="/auth" className="jf-signin">
						<StyledButton startIcon={<LoginIcon />} variant="outlined">Login</StyledButton>
					</Link>
				</Box>
				<Box sx={{ m: 2 }}>
					<Link key="/auth" to="/auth" className="jf-signin">
						<StyledButton startIcon={<PersonAddAlt1Icon />}>Sign in</StyledButton>
					</Link>
				</Box>
			</List>
		</Box>
	);

	return (
		<div>
			<Button onClick={toggleDrawer(true)}>
				<MenuIcon color="action" />
			</Button>
			<Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
				{DrawerList}
			</Drawer>
		</div>
	);
}
