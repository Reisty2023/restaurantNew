import { Box, AppBar, Grid, IconButton, Typography, List, ListItemButton,  useMediaQuery,
    useTheme, } from "@mui/material";
import React from "react";
import logo from "../../assets/Logo/single.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, useLocation } from "react-router-dom";
import Drawers from "./Drawers";

const TopNav = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const router = useLocation();
  return (
    <AppBar
      sx={{
        bgcolor: "#1a1a1a",
        height: "8vh",
        borderBottom: "0.5px solid #ffffff80",
      }}
    >
        {
            isMatch ?
            <>
       <Drawers/>
            </>
            :
        
      <Grid
        container
        sx={{
          margin: "0 auto",
          width: "98%",
          display: "flex",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Grid item lg={2.2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link to="/dashboard">
              <img src={logo} alt="reistry_logo" />
            </Link>
            <List sx={{display:'flex'}}>
            <ListItemButton
            
              variant="caption"
              sx={{ color: "#ffffff80", fontSize: "14px", fontFamily:'gordita' }}
            >
              Reservations
            </ListItemButton>
            <ListItemButton
              variant="caption"
              sx={{ color: "#ffffff80", fontSize: "14px", fontFamily:'gordita' }}
            >
              Guests
            </ListItemButton>
            <ListItemButton
              variant="caption"
              sx={{ color: "#ffffff80", fontSize: "14px",fontFamily:'gordita' }}
            >
             POS
            </ListItemButton>
            <Link to="/dashboard/restaurantprofile">
            <ListItemButton
             selected={router.pathname === "/dashboard/restaurantprofile"}
              variant="caption"
              sx={{ color: "#ffffff80", fontSize: "14px", fontFamily:'gordita','&.Mui-selected':{background:'none', color:'#fff', borderBottom:'4px solid #BC172F'} }}
            >
              Settings
            </ListItemButton>
            </Link>
            </List>
          </Box>
        </Grid>
        <Grid item lg={9.8}>
          <Box align="right">
            <IconButton>
              <MoreVertIcon sx={{ color: "#fff" }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
}
    </AppBar>
  );
};

export default TopNav;
