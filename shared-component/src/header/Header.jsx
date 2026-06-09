import {
  AppBar,
  Toolbar,
  Button,
  Container,
  TextField,
  InputAdornment,
  Chip,
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Drawer,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import OratechiesLogo from "../../assets/oratechiesLogo.svg";
// @ts-ignore: CSS module declarations are not available in this project setup
import "./Header.css";
import StyledButton from "../button/Button";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from "react";
import SideDrawer from "../drawer/Drawer";


const HomeIcon = (props) => {
    return (<a href="/" className="jf-logo" aria-label="Oratechies Home" >
      <img src={OratechiesLogo} alt="Logo" {...props}/> 
    </a>);
}
export default function Header() {
      const id = React.useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
      <AppBar position="sticky" className="jf-appbar">
        <Toolbar className="jf-toolbar">
          <div className="jf-logo-container">
             
            <div class="jf-nav-drawer"><SideDrawer/></div>

            <HomeIcon className="jf-logo"/>
          </div>
          <Box>
            <Button className="jf-nav-link">Jobs</Button>
            <Button className="jf-nav-link">Companies</Button>
            <Button className="jf-nav-link">Skills</Button>
                <>
                <Button
                    id={buttonId}
                    aria-controls={open ? menuId : undefined}
                    aria-haspopup="true"
                    aria-expanded={open}
                    onClick={handleClick}
                    className="jf-nav-link"
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    Resources
                </Button>
                <Menu
                    id={menuId}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                    list: {
                        'aria-labelledby': buttonId,
                    },
                    }}
                >
                    <MenuItem onClick={handleClose}>Test</MenuItem>
                    <MenuItem onClick={handleClose}>Test 2</MenuItem>
                    <MenuItem onClick={handleClose}>Test 3</MenuItem>
                </Menu>
                </>
            <Button className="jf-nav-link">Career Tips</Button>
          </Box>
          
          <nav className="jf-nav">
            <Link key="/auth" to="/auth" className="jf-signin"><StyledButton variant="outlined">Login</StyledButton></Link>
            <Link key="/auth" to="/auth" className="jf-signin"><StyledButton>Sign in</StyledButton></Link>
          </nav>
        </Toolbar>
      </AppBar>
  );
}
