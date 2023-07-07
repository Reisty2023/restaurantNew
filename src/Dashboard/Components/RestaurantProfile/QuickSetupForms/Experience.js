import { Box, Typography, InputLabel, TextField, Grid, Button } from '@mui/material'
import React from 'react'

const Experience = () => {
  return (
  <>
        <Box sx={{ bgcolor: "#333333", mt: 2, borderRadius: "5px" }}>
        <Box sx={{ margin: "0 auto", width: "85%", py: 5 }}>
          <Typography variant="caption" sx={{ color: "#fff" }}>
          Restaurant Experience
          </Typography>
          <Box sx={{mt:3}}>
          <InputLabel
                  sx={{
                    color: "#ccc",
                    fontSize: "13px",
                    fontFamily: "Gordita",
                    mb: 1,
                  }}
                >
               Experiences
                </InputLabel>
                <TextField
                  placeholder="Restaurant Experience 1"
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
                <Grid container sx={{mt:2}} spacing={2}>
                  <Grid item lg={6}>
                  <InputLabel
                  sx={{
                    color: "#ccc",
                    fontSize: "13px",
                    fontFamily: "Gordita",
                    mb: 1,
                  }}
                >
         Table Reservations
                </InputLabel>
                <TextField
                  placeholder="Select"
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
                  <Grid item lg={6}>
                  <InputLabel
                  sx={{
                    color: "#ccc",
                    fontSize: "13px",
                    fontFamily: "Gordita",
                    mb: 1,
                  }}
                >
       Deposit Per Person
                </InputLabel>
                <TextField
                  placeholder="#"
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
                  <Grid item lg={12}>
                  <InputLabel
                  sx={{
                    color: "#ccc",
                    fontSize: "13px",
                    fontFamily: "Gordita",
                    mb: 1,
                  }}
                >
 Descriptions
                </InputLabel>
                <TextField
                  placeholder="Descriptions"
                  size="large"
                  fullWidth
                  multiline
                  rows={5}
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
                </Grid>
          </Box>
          </Box>
          </Box>

          <Button variant='contained' sx={{mt:2}}>Add Another</Button>
  </>
  )
}

export default Experience