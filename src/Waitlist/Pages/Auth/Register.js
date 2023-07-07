import React from "react";
import Navbar from "../../Component/Header/Navbar";
import {
  Box,
  Button,
  Divider,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
  InputLabel,
  TextField,
  IconButton,
} from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../../../assets/Logo/logo.svg";
import AppleIcon from "@mui/icons-material/Apple";

const Register = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ pt: 5, borderTop: "0.5px solid #dadada" }}>
        <Box
          sx={{
            margin: "0 auto",
            width: "40%",
            bgcolor: "#fff",
            boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Box
            sx={{
              margin: "0 auto",
              width: { lg: "70%", md: "70%", sm: "80%", xs: "100%" },
              py: 6,
            }}
            align="center"
          >
            <img src={logo} alt="Resitry_Logo" />
            <Typography
              variant="body1"
              sx={{
                mt: 1.6,
                fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "12px" },
                lineHeight: { lg: "28px", md: "28px", sm: "26px", xs: "22px" },
              }}
            >
              Sign up for a free account create and manage all your reservations
            </Typography>
            <Stack sx={{ margin: "0 auto", width: "85%", mt: 2 }} rowGap={2}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "10px",
                  color: "#000",
                  py: 1,
                  border: "1px solid #dadada",
                }}
              >
                <FacebookRoundedIcon sx={{ mr: 1 }} /> Log in with Facebook
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "10px",
                  color: "#000",
                  py: 1,
                  border: "1px solid #dadada",
                }}
              >
                <GoogleIcon sx={{ mr: 1 }} /> Log in with Google
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "10px",
                  color: "#000",
                  py: 1,
                  border: "1px solid #dadada",
                }}
              >
                <AppleIcon sx={{ mr: 1 }} /> Log in with Apple
              </Button>

              <Divider>Or</Divider>
            </Stack>
            <Box sx={{mt:3}}>
            <InputLabel
                    sx={{
                      color: "#2B2B2B",
                      fontSize: "13px",
                      fontFamily: "Gordita",
                      textAlign: "left",
                    }}
                  >
           First Name <span style={{color:'#BC172F'}}>*</span>
                  </InputLabel>
                  <TextField
                  required
                    placeholder="First Name "
                    margin="dense"
                    size="large"
                    fullWidth
                    InputProps={{
                      style: {
                        fontFamily: "Gordita",
                        fontSize: "13px",
                        borderRadius: "10px",
                        offset: " 1px solid #737373",
                        // Replace with your desired font family
                      },
                    }}
                  />
            <InputLabel
                    sx={{
                      color: "#2B2B2B",
                      fontSize: "13px",
                      fontFamily: "Gordita",
                      textAlign: "left",
                      mt:2
                    }}
                  >
           Last Name <span style={{color:'#BC172F'}}>*</span>
                  </InputLabel>
                  <TextField
                  required
                    placeholder="Last Name "
                    margin="dense"
                    size="large"
                    fullWidth
                    InputProps={{
                      style: {
                        fontFamily: "Gordita",
                        fontSize: "13px",
                        borderRadius: "10px",
                        offset: " 1px solid #737373",
                        // Replace with your desired font family
                      },
                    }}
                  />
            <InputLabel
                    sx={{
                      color: "#2B2B2B",
                      fontSize: "13px",
                      fontFamily: "Gordita",
                      textAlign: "left",
                      mt:2
                    }}
                  >
          Email Address <span style={{color:'#BC172F'}}>*</span>
                  </InputLabel>
                  <TextField
                  required
                    placeholder="Email Address  "
                    margin="dense"
                    size="large"
                    fullWidth
                    InputProps={{
                      style: {
                        fontFamily: "Gordita",
                        fontSize: "13px",
                        borderRadius: "10px",
                        offset: " 1px solid #737373",
                        // Replace with your desired font family
                      },
                    }}
                  />
            </Box>
          </Box>
          
        </Box>
      </Box>
    </>
  );
};

export default Register;
