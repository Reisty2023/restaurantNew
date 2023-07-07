import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../../Components/Header";
import emptyRes from "../../../assets/emptyRes.svg";
import background from "../../../assets/resta.jpg";
import background2 from "../../../assets/ressta.jpg";
import editIcon from "../../../assets/Icons/edit.svg";
import deleteIcon from "../../../assets/Icons/delete.svg";
import { Link } from "react-router-dom";

const restauarantList = [
  {
    name: "Orchid Bistro",
    image: background,
  },
  {
    name: "Oriental Buffet",
    image: background2,
  },
  {
    name: "Morning Slides",
    image: background,
  },
  {
    name: "Raddisson",
    image: background,
  },
  {
    name: "Coffee Cafe",
    image: background2,
  },
];
const RestaurantProfile = () => {
  const [created, setCreated] = useState(false);
  return (
    <Box>
      <Header title="Restaurant Profile" />
      {!created ? (
        <Box
          sx={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              px:2
            }}
          >
            <Box onClick={() => setCreated(true)}>
              <img src={emptyRes} alt="emptyRes" />
            </Box>
            <Box align="center">
              <Typography
                variant="caption"
                sx={{ color: "#fff", fontFamily: "gordita", fontSize: "16px" }}
              >
                No restaurant profile found
              </Typography>
              <Typography
                sx={{
                  color: "#cccccc",
                  fontFamily: "gordita",
                  fontSize: "12px",
                }}
              >
                You have no restaurant profile . Click on “add new” to add a new
                restaurant profile
              </Typography>
            </Box>
            <Link to="/quick-setup">
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  background: "#fff",
                  color: "#1a1a1a",
                  "&:hover": { background: "#dadada", color: "black" },
                }}
              >
                Quick Setup
              </Button>
            </Link>
          </Box>
        </Box>
      ) : (
        <>
          <Box sx={{ px: 2, py: 3, height: "80vh", overflow: "scroll" }}>
            <Grid container spacing={2}>
              {restauarantList.map((item) => (
                <Grid item lg={3} xs={12}>
                  <Box
                    sx={{
                      border: "0.5px solid #fff",
                      height: "330px",
                      display: "flex",
                      flexDirection: "column",
                      p: 1.7,
                    }}
                  >
                    <Box
                      src=""
                      variant="square"
                      sx={{
                        width: "100%",
                        height: "220px",
                        backgroundImage: `url(${item.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <IconButton
                        sx={{
                          borderRadius: "0px",
                          bgcolor: "#2b2b2b",
                          m: 1,
                          "&:hover": { bgcolor: "#2b2b2bb7" },
                        }}
                      >
                        <img src={editIcon} />
                      </IconButton>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mt: 4,
                      }}
                    >
                      <Box>
                        <Typography sx={{ color: "#fff", fontSize: "16px" }}>
                          {item.name}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#fff",
                            fontSize: "14px",
                            mt: 1,
                            textDecoration: "underline",
                            cursor: "pointer",
                            "&:hover": { color: "#ffffff80" },
                          }}
                        >
                          View info
                        </Typography>
                      </Box>
                      <Box>
                        <IconButton>
                          <img src={deleteIcon} />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      )}
    </Box>
  );
};

export default RestaurantProfile;
