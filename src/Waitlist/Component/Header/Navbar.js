import {
  AppBar,
  Box,
  Button,
  Grid,
  Typography,
  MenuItem,
  useTheme,
  useMediaQuery,
  Tabs,
  Tab,
  MenuList
} from "@mui/material";
import React from "react";
import logo from "../../../assets/Logo/logo.svg";
import Popover from "@mui/material/Popover";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Drawers from "./Drawers";
import { Link } from "react-router-dom";
import { HashLink  } from 'react-router-hash-link'
// import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [color, setColor] = React.useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Box sx={{ height: "98px" }} id="index">
        <AppBar
          sx={{
            height: "98px",
            background: "#fff",
            borderBottom: isMobile && "1px solid #dadada",
            boxShadow: !color && "none",
          }}
        >
          <Box
            sx={{
              margin: "0 auto",
              width: "85%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid
              container
              sx={{ display: "flex", alignItems: "center", height: "98px" }}
            >
              <Grid item lg={2} md={2}>
                <Link to='/'>
                <img src={logo} alt="Reisty_Logo" />
                </Link>
              </Grid>
              {isMobile ? (
                <>
                  <Drawers />
                </>
              ) : (
                <>
                  <Grid
                    item
                    lg={7}
                    md={6}
                    display="flex"
                    sx={{ alignItems: "center" }}
                  >
              <Tabs>
                <Tab onMouseOver={handleClick} label="Solutions" sx={{fontSize:'15px'}}/>
                <Link to="/pricing" style={{color:'#2b2b2b',}}>
                {/* <Link   to="#reservations" spy={true} smooth={true} offset={-100} duration={500}> */}
                <Tab label="Pricing" sx={{fontSize:'15px'}}/>
                </Link>
                <Link to="/" style={{color:'#2b2b2b',}}>
                {/* <Link   to="#reservations" spy={true} smooth={true} offset={-100} duration={500}> */}
                <Tab label="Support" sx={{fontSize:'15px'}}/>
                </Link>
                {/* </Link> */}
              </Tabs>
                  </Grid>
                  <Grid item lg={3} md={4} align="right">
                    <Link to="/login">
                      <Button
                        variant="outlined"
                        sx={{
                          border: "1px solid #dadada",
                          color: " #2B2B2B",
                          py: 1.1,
                          px: 3,
                          borderRadius: "5px",
                          fontSize: "14px",
                          fontWeight: "bolder",
                        }}
                      >
                        Log in
                      </Button>
                    </Link>
                    <Link to="/get-started">
                      <Button
                        variant="contained"
                        sx={{
                          ml: 3,
                          py: 1.1,
                          borderRadius: "5px",
                          fontSize: "14px",
                          fontWeight: "bolder",
                        }}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </Grid>
                </>
              )}
            </Grid>
          </Box>
        </AppBar>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
    
        >
          <MenuList       onMouseLeave={handleClose}>
          <HashLink   to="/#reservation_management" spy={true} smooth={true} offset={-100} duration={500}>
          <MenuItem onClick={handleClose}>Reservation Management</MenuItem>
          </HashLink>
          <HashLink   to="/#menu_management" spy={true} smooth={true} offset={-100} duration={500}>
          <MenuItem onClick={handleClose}>Menu Management</MenuItem>
          </HashLink>
          <HashLink   to="/#boosting" spy={true} smooth={true} offset={-100} duration={500}>
          <MenuItem onClick={handleClose}>Boosting Online Presence</MenuItem>
          </HashLink>
          <HashLink   to="/#review" spy={true} smooth={true} offset={-100} duration={500}>
          <MenuItem onClick={handleClose}>Review Management</MenuItem>
          </HashLink>
          </MenuList>
        </Popover>
      </Box>
    </>
  );
};

export default Navbar;
