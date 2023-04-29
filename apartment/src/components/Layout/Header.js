import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
// import ApartmentIcon from '@mui/icons-material/Apartment';
import "../../styles/HeaderStyles.css";
import { useAuth0 } from "@auth0/auth0-react";
// import {Button} from "../styles/Button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { loginWithRedirect, logout,isAuthenticated , user } = useAuth0();

  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <ApartmentIcon fontSize="large" />
        SmartBrickz
      </Typography>

      <Divider />

      <ul className="mobile-navigation">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/announcements"}>Announcements</Link>
        </li>
        <li>
          <Link to={"/about"}>Payments</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </Box>

    // </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open-drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <ApartmentIcon fontSize="large" />
              SmartBrickz
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/announcements"}>Announcements</Link>
                </li>
                <li>
                  <Link to={"/Payment"}>Payments</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>

                
                  {isAuthenticated &&  <p>{user.name}</p>}
              

                { isAuthenticated ?(<li>
                  <Button
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin }, })} >
                    Log Out
                  </Button>
                </li>):<li>
                  <Button onClick={() => loginWithRedirect()}>Log In</Button>
                </li>}
               


                
                
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporaray"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px,",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </>
  );
};

export default Header;
