import {
  Box,
  Grid,
  Typography,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
} from "@mui/material";
import React from "react";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Offerings = () => {
  const [role, setRole] = React.useState("");

  const handleChangeSelect = (event) => {
    setRole(event.target.value);
  };
  return (
    <>
      <Box sx={{ bgcolor: "#333333", mt: 2, borderRadius: "5px" }}>
        <Box sx={{ margin: "0 auto", width: "85%", py: 5 }}>
          <Typography variant="caption" sx={{ color: "#fff" }}>
            Entice guests by showcasing what sets your business apart.
          </Typography>
          <Box
            sx={{
              mt: 3,
              bgcolor: "#ffffff1a",
              borderRadius: "5px",
              p: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                fontFamily: "gordita-light",
              }}
            >
              <TipsAndUpdatesIcon sx={{ mr: 1 }} /> Giving information about the
              services and offerings of your business can significantly
              influence a guest's decision on where to dine or visit.
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item lg={6} xs={12}>
              <InputLabel
                sx={{
                  color: "#ccc",
                  fontSize: "13px",
                  fontFamily: "Gordita",
                  mb: 1,
                }}
              >
                Menu link
              </InputLabel>
              <TextField
                placeholder="Menu link"
                size="large"
                fullWidth
                InputProps={{
                  style: {
                    fontFamily: "Gordita",
                    fontSize: "13px",
                    borderRadius: "10px",
                    offset: " 1px solid #ccc",
                    color: "#ccc",
                    border: "1px solid #ccc",

                    // Replace with your desired font family
                  },
                }}
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputLabel
                sx={{
                  color: "#ccc",
                  fontSize: "13px",
                  fontFamily: "Gordita",
                  mb: 1,
                }}
              >
                Executive chef
              </InputLabel>
              <TextField
                placeholder="Executive chef"
                size="large"
                fullWidth
                InputProps={{
                  style: {
                    fontFamily: "Gordita",
                    fontSize: "13px",
                    borderRadius: "10px",
                    offset: " 1px solid #ccc",
                    color: "#ccc",
                    border: "1px solid #ccc",

                    // Replace with your desired font family
                  },
                }}
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputLabel
                sx={{
                  color: "#ccc",
                  fontSize: "13px",
                  fontFamily: "Gordita",
                  mb: 1,
                }}
              >
                Dietary options
              </InputLabel>
              <Box sx={{ border: "1px solid #ccc", borderRadius: "5px", p: 3 }}>
                {/* <ThemeProvider theme={themeRadio}> */}
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    sx={{
                      color: "#cccccc",
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="female"
                    control={<Checkbox/>}
                    label="Glutton Free"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="male"
                    control={<Checkbox/>}
                    label="Kosher"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Vegan"
                  />
                </RadioGroup>
                {/* </ThemeProvider> */}
              </Box>
            </Grid>

            <Grid item lg={6} xs={12} sx={{}}>
              <InputLabel
                sx={{
                  color: "#ccc",
                  fontSize: "13px",
                  fontFamily: "Gordita",
                  mb: 1,
                }}
              >
                Beverages
              </InputLabel>
              <Box
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ p: 3 }}>
                  {/* <ThemeProvider theme={themeRadio}> */}
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      sx={{
                        color: "#cccccc",
                        "& > span": {
                          fontFamily: "Gordita",
                          fontSize: "12px",
                          color: "#cccccc",
                        },
                      }}
                      value="female"
                      control={<Checkbox/>}
                      label="Beer"
                    />
                    <FormControlLabel
                      sx={{
                        "& > span": {
                          fontFamily: "Gordita",
                          fontSize: "12px",
                          color: "#cccccc",
                        },
                      }}
                      value="male"
                      control={<Checkbox/>}
                      label="Cocktails"
                    />
                    <FormControlLabel
                      sx={{
                        "& > span": {
                          fontFamily: "Gordita",
                          fontSize: "12px",
                          color: "#cccccc",
                        },
                      }}
                      value="other"
                      control={<Checkbox/>}
                      label="Wine"
                    />
                  </RadioGroup>
                  {/* </ThemeProvider> */}
                </Box>
                <Box sx={{ borderRadius: "5px", p: 3 }}>
                  {/* <ThemeProvider theme={themeRadio}> */}
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      sx={{
                        color: "#cccccc",
                        "& > span": {
                          fontFamily: "Gordita",
                          fontSize: "12px",
                          color: "#cccccc",
                        },
                      }}
                      value="female"
                      control={<Checkbox/>}
                      label="Full Bar"
                    />
                    <FormControlLabel
                      sx={{
                        "& > span": {
                          fontFamily: "Gordita",
                          fontSize: "12px",
                          color: "#cccccc",
                        },
                      }}
                      value="male"
                      control={<Checkbox/>}
                      label="Cocktails"
                    />
                    <FormControlLabel
                      sx={{
                        "& > span": {
                          fontFamily: "Gordita",
                          fontSize: "12px",
                          color: "#cccccc",
                        },
                      }}
                      value="other"
                      control={<Checkbox/>}
                      label="Wine"
                    />
                  </RadioGroup>
                  {/* </ThemeProvider> */}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ bgcolor: "#333333", mt: 2, borderRadius: "5px" }}>
        <Box sx={{ margin: "0 auto", width: "85%", py: 5 }}>
          <Typography variant="caption" sx={{ color: "#fff" }}>
            Clarify the atmosphere and style of your establishment, providing
            guests with an idea of what to anticipate.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <InputLabel
              sx={{
                color: "#ccc",
                fontSize: "13px",
                fontFamily: "Gordita",
                mb: 1,
              }}
            >
              Restaurant Type
            </InputLabel>
            <Select
              fullWidth
              value={role}
              onChange={handleChangeSelect}
              sx={{
                borderRadius: "10px",
                fontFamily: "Gordita",
                color: "#717171",
                fontSize: "13px",
                border: "1px solid #ccc",
              }}
              displayEmpty
              inputProps={{
                "aria-label": "Without label",
                style: {
                  fontSize: "13px",
                  borderRadius: "10px",
                  offset: " 1px solid #737373",
                  // Replace with your desired font family
                },
              }}
            >
              <MenuItem
                sx={{ fontFamily: "gordita-light", fontSize: "13px" }}
                value=""
              >
                Please Select
              </MenuItem>
              <MenuItem
                sx={{ fontFamily: "gordita-light", fontSize: "13px" }}
                value="Restaurant Owner"
              >
                Restaurant Owner
              </MenuItem>
              <MenuItem
                sx={{ fontFamily: "gordita-light", fontSize: "13px" }}
                value="Manager"
              >
                Manager
              </MenuItem>
              <MenuItem
                sx={{ fontFamily: "gordita-light", fontSize: "13px" }}
                value="Head Chef"
              >
                Head Chef
              </MenuItem>
              <MenuItem
                sx={{ fontFamily: "gordita-light", fontSize: "13px" }}
                value="Server"
              >
                Server
              </MenuItem>
              <MenuItem
                sx={{ fontFamily: "gordita-light", fontSize: "13px" }}
                value="Reservation Coordinator"
              >
                Reservation Coordinator
              </MenuItem>
              <MenuItem
                sx={{ fontFamily: "gordita-light", fontSize: "13px" }}
                value="Other "
              >
                Other{" "}
              </MenuItem>
            </Select>
          </Box>

          <InputLabel
            sx={{
              color: "#ccc",
              fontSize: "13px",
              fontFamily: "Gordita",
              mb: 1,
              mt: 3,
            }}
          >
            Dietary options
          </InputLabel>
          <Box sx={{ border: "2px solid #ccc", borderRadius: "5px", p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <Box>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    sx={{
                      color: "#cccccc",
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="female"
                    control={<Checkbox />}
                    label="Banquet"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="male"
                    control={<Checkbox/>}
                    label="Cafe"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Counter Seating"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Happy Hour"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Late Night"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Private Room"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Weekend Brunch"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Beer Garden"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Cigar Room"
                  />
                </RadioGroup>
              </Box>
              <Box>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    sx={{
                      color: "#cccccc",
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="female"
                    control={<Checkbox/>}
                    label="Bar / Lounge"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="male"
                    control={<Checkbox/>}
                    label="Chef Table"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Dancing"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Entertainment"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="High Tees"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Outdoor Firepit"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Takeout"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Outdoor Dining"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Patio"
                  />
                </RadioGroup>
              </Box>
            </Box>
          </Box>

          <InputLabel
            sx={{
              color: "#ccc",
              fontSize: "13px",
              fontFamily: "Gordita",
              mb: 1,
              mt: 3,
            }}
          >
            Smoking options
          </InputLabel>
          <Box sx={{border:'2px solid #ccc', borderRadius:'5px', p:2}}>
          <Box
             
                  sx={{display:'flex', justifyContent:'space-between'}}
                >
                  <FormControlLabel
                    sx={{
                      color: "#cccccc",
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="female"
                    control={<Checkbox />}
                    label="Indoor smoking Area"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="male"
                    control={<Checkbox/>}
                    label="Non smoking area"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox />}
                    label="Outdoor smoking area"
                  />
     
        
           
                </Box>
          </Box>
        </Box>
        
      </Box>

      <Box  sx={{ bgcolor: "#333333", mt: 2, borderRadius: "5px" }}>
      <Box sx={{ margin: "0 auto", width: "85%", py: 5 }}>
      <Typography variant="caption" sx={{ color: "#fff" }}>
      Inform guests about the health and safety protocols in place at your establishment.
          </Typography>
          <InputLabel
            sx={{
              color: "#ccc",
              fontSize: "13px",
              fontFamily: "Gordita",
              mb: 1,
              mt: 3,
            }}
          >
         Sanitizing and maintaining cleanliness
          </InputLabel>
          <Box sx={{ border: "2px solid #ccc", borderRadius: "5px", p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    sx={{
                      color: "#cccccc",
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="female"
                    control={<Checkbox />}
                    label="Daily thorough cleaning of shared spaces."
                  />
                 
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Payment methods without physical contact are accepted."
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Digital, disposable or sanitized menu provided"
                  />
               
                </RadioGroup>
              </Box>
              <Box>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    sx={{
                      color: "#cccccc",
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="female"
                    control={<Checkbox/>}
                    label="Customers are provided with sanitizers or wipes."
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="male"
                    control={<Checkbox/>}
                    label="Sealed or wiped utensils used"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="After the meal, surfaces are thoroughly sanitized."
                  />
                
                </RadioGroup>
              </Box>
            </Box>
            
          </Box>
          <InputLabel
            sx={{
              color: "#ccc",
              fontSize: "13px",
              fontFamily: "Gordita",
              mb: 1,
              mt: 3,
            }}
          >
         Physical Distancing
          </InputLabel>
          <Box sx={{ border: "2px solid #ccc", borderRadius: "5px", p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    sx={{
                      color: "#cccccc",
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="female"
                    control={<Checkbox />}
                    label="Distancing maintained in common area"
                  />
                 
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Extra Space between tables"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Limited number of seated diners"
                  />
               
                </RadioGroup>
              </Box>
           
            </Box>
            
          </Box>
          <InputLabel
            sx={{
              color: "#ccc",
              fontSize: "13px",
              fontFamily: "Gordita",
              mb: 1,
              mt: 3,
            }}
          >
Protective Equipment
          </InputLabel>
          <Box sx={{ border: "2px solid #ccc", borderRadius: "5px", p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    sx={{
                      color: "#cccccc",
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="female"
                    control={<Checkbox />}
                    label="Diners must wear masks unless eating or drinking"
                  />
                 
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Wasitwaff wear masks"
                  />
            
               
                </RadioGroup>
              </Box>
            
            </Box>
            
          </Box>
          <InputLabel
            sx={{
              color: "#ccc",
              fontSize: "13px",
              fontFamily: "Gordita",
              mb: 1,
              mt: 3,
            }}
          >
Screening
          </InputLabel>
          <Box sx={{ border: "2px solid #ccc", borderRadius: "5px", p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    sx={{
                      color: "#cccccc",
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="female"
                    control={<Checkbox />}
                    label="Contact tracing information collected"
                  />
                 
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Diner temperature check required"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Proof of vaccination required for indoor dining"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Proof of  vaccination required before outdoor dinning"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Sick staff prohibited in the workplace"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Staff is vaccinated"
                  />
                  <FormControlLabel
                    sx={{
                      "& > span": {
                        fontFamily: "Gordita",
                        fontSize: "12px",
                        color: "#cccccc",
                      },
                    }}
                    value="other"
                    control={<Checkbox/>}
                    label="Staff temperature check required"
                  />
               
                </RadioGroup>
              </Box>
       
            </Box>
            
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Offerings;
