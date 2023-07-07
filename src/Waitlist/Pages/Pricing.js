import React from "react";
import Navbar from "../Component/Header/Navbar";
import Footer from "../Component/Footer/Footer";
import '../../STYLES/main.css'
import {
  Box,
  Button,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
  InputLabel,
  TextField
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RequestForm from "../Component/Common/RequestForm";

const Pricing = () => {
  const theme = useTheme();
  return (
    <>
      <Navbar />
      <Box
      className="food_background"
        align="center"
        sx={{
          height: "270px",
          bgcolor: theme.palette.primary.main,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "#fff", fontFamily: "gordita" }}
        >
          Plans & Pricings
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "#fff", fontFamily: "gordita" }}
        >
          Choose a suitable plan for your restaurant.
        </Typography>
      </Box>

      <Box sx={{}}>
        <Box sx={{ margin: "0 auto", width: {lg:"85%", md:'85%', sm:'90%', xs:'90%'}, py: 5 }}>
          <Typography variant="subtitle2">Reservations</Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box
                sx={{ border: "1px solid #dadada", p: 3, borderRadius: "10px" }}
              >
                <Typography variant="body2" sx={{ color: "#717171" }}>
                  Basic
                </Typography>
                <Typography variant="subtitle1" color="primary" sx={{}}>
                  ₦40,000{" "}
                  <span style={{ fontFamily: "gordita", fontSize: "16px" }}>
                    /month
                  </span>
                </Typography>
                <Typography variant="body2" sx={{ color: "#717171" }}>
                  Start your journey with the essential features of ReistyOS and
                  get your operations up and running.
                </Typography>
                <Box mt={2}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      {" "}
                      <Typography variant="body2" sx={{ color: "#717171" }}>
                        Reservation, waitlist, and table management
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      {" "}
                      <Typography variant="body2" sx={{ color: "#717171" }}>
                        User permissions and password protection
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      {" "}
                      <Typography variant="body2" sx={{ color: "#717171" }}>
                        Ticketed events, experiences, and add-ons
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      {" "}
                      <Typography variant="body2" sx={{ color: "#717171" }}>
                        24/7 support
                      </Typography>
                    </ListItemText>
                  </ListItem>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ color: "#fff", py: 2, mt: 3 }}
                  >
                    Request Info
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12} sx={{ display: "flex" }}>
              <Box
                sx={{
                  border: "1px solid #dadada",
                  p: 3,
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2" sx={{ color: "#717171" }}>
                  Premium
                </Typography>
                <Typography variant="subtitle1" color="primary" sx={{}}>
                  ₦80,000{" "}
                  <span style={{ fontFamily: "gordita", fontSize: "16px" }}>
                    /month
                  </span>
                </Typography>
                <Typography variant="body2" sx={{ color: "#717171" }}>
                  Experience the complete service solution with premium support
                  and exclusive customizations.
                </Typography>
                <Box mt={2}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      {" "}
                      <Typography variant="body2" sx={{ color: "#717171" }}>
                        Everything in Basic
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      {" "}
                      <Typography variant="body2" sx={{ color: "#717171" }}>
                        Customizable post-meal guest survey
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      {" "}
                      <Typography variant="body2" sx={{ color: "#717171" }}>
                        Customizable guest messaging
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      {" "}
                      <Typography variant="body2" sx={{ color: "#717171" }}>
                        POS Integration
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ color: "#fff", py: 2, mt: 3 }}
                >
                  Request Info
                </Button>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12} sx={{ display: "flex" }}>
              <Box
                sx={{
                  border: "1px solid #dadada",
                  p: 3,
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2" sx={{ color: "#717171" }}>
                  Pro
                </Typography>
                <Typography variant="subtitle1" color="primary" sx={{}}>
                  ₦120,000
                  <span style={{ fontFamily: "gordita", fontSize: "16px" }}>
                    /month
                  </span>
                </Typography>
                <Typography variant="body2" sx={{ color: "#717171" }}>
                  Experience the complete service solution with pro support and
                  exclusive customizations.
                </Typography>

                <Box mt={2}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      {" "}
                      <Typography variant="body2" sx={{ color: "#717171" }}>
                        Everything in Pro
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      {" "}
                      <Typography variant="body2" sx={{ color: "#717171" }}>
                        API access and custom reporting
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      {" "}
                      <Typography variant="body2" sx={{ color: "#717171" }}>
                        24/7 support
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      {" "}
                      <Typography variant="body2" sx={{ color: "#717171" }}>
                        POS Integration
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ color: "#fff", py: 2, mt: 3 }}
                >
                  Request Info
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
      className="food_background"
        sx={{ bgcolor: theme.palette.primary.main,   py:{lg:10, md:10, sm:10, xs:0}, mb:3 }}
      >
        <Box
          sx={{
            margin: "0 auto",
            width: {lg:"80%", md:'80%', sm:'85%', xs:'100%'}, 
            bgcolor: "#fff",
            borderRadius: {lg:"5px", md:'5px', sm:'5px', xs:'0px'},
           py:10,
           
          }}
        >
<Typography variant="body1" sx={{textAlign:'center', fontSize:'18px'}}>Tell us about your restaurant business</Typography>
<Box sx={{margin:'0 auto', width:'80%', mt:3}}>
<RequestForm privacy={true}/>

</Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Pricing;
