import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenuClick = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar className="navbar">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <Link to="/" className="menu-link">
              <MenuItem onClick={handleMenuClick}>Home</MenuItem>
            </Link>
            <Link to="/maps" className="menu-link">
              <MenuItem onClick={handleMenuClick}>Maps</MenuItem>
            </Link>

            <Link to="/missions" className="menu-link">
              <MenuItem onClick={handleMenuClick}>Missions</MenuItem>
            </Link>

            <Link to="/assaultrifles" className="menu-link">
              <MenuItem onClick={handleMenuClick}>Assault Rifles</MenuItem>
            </Link>

            <Link to="/submachineguns" className="menu-link">
              <MenuItem onClick={handleMenuClick}>Submachine Guns</MenuItem>
            </Link>

            <Link to="/shotguns" className="menu-link">
              <MenuItem onClick={handleMenuClick}>Shotguns</MenuItem>
            </Link>

            <Link to="/launchers" className="menu-link">
              <MenuItem onClick={handleMenuClick}>Launchers</MenuItem>
            </Link>

            <Link to="/lesslethals" className="menu-link">
              <MenuItem onClick={handleMenuClick}>Less Lethals</MenuItem>
            </Link>

            <Link to="/sidearms" className="menu-link">
              <MenuItem onClick={handleMenuClick}>Sidearms</MenuItem>
            </Link>

            <Link to="/ammotypes" className="menu-link">
              <MenuItem onClick={handleMenuClick}>Ammo Types</MenuItem>
            </Link>

            <Link to="/armor" className="menu-link">
              <MenuItem onClick={handleMenuClick}>Armor</MenuItem>
            </Link>

            <Link to="/tacticals" className="menu-link">
              <MenuItem onClick={handleMenuClick}>Tacticals</MenuItem>
            </Link>

            <Link to="/grenades" className="menu-link">
              <MenuItem onClick={handleMenuClick}>Grenades</MenuItem>
            </Link>

            <Link to="/deployables" className="menu-link">
              <MenuItem onClick={handleMenuClick}>Deployables</MenuItem>
            </Link>

            <Link to="/headwear" className="menu-link">
              <MenuItem onClick={handleMenuClick}>Headwear</MenuItem>
            </Link>

            <Link to="/armormaterial" className="menu-link">
              <MenuItem onClick={handleMenuClick}>Armor Material</MenuItem>
            </Link>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ready or Not Wiki
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MuiNavbar;
