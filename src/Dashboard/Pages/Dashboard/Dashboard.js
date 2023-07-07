import React from 'react'
import TopNav from '../../Layout/TopNav'
import { Box, Grid, Typography } from '@mui/material'

const Dashboard = () => {
  return (
<>
<TopNav/>
<Box sx={{bgcolor:'#262626', }}>
<Box sx={{margin:'0 auto', width:'85%', pt:13, pb:10}}>
<Typography variant='h2'>Monday,  April 2</Typography>
<Grid container sx={{mt:3}} spacing={2}>
    <Grid item lg={4} xs={6}>
        <Box>
            <Typography sx={{color:'#fff', fontSize:'13px'}}>Expected Today</Typography>
            <Box sx={{bgcolor:'#BC172F',  borderRadius:'5px', height:'130px', mt:1, py:4, px:2, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <Typography sx={{color:'#fff', fontSize:'13px'}}>Monday,  April 2</Typography>
            <Box mt={4} sx={{display:'flex' ,justifyContent:'space-between', width:'50%'}}>
                <Box >
                    <Typography sx={{color:'#fff', fontSize:'13px'}}>0</Typography>
                    <Typography sx={{color:'#fff', fontSize:'13px'}}>Covers</Typography>
                </Box>
                <Box >
                    <Typography sx={{color:'#fff', fontSize:'13px'}}>0</Typography>
                    <Typography sx={{color:'#fff', fontSize:'13px'}}>Parties</Typography>
                </Box>
            </Box>
            </Box>
        </Box>
    </Grid>
    <Grid item lg={4} xs={6}>
        <Box>
            <Typography sx={{color:'#fff', fontSize:'13px'}}>Booked on Reisty today</Typography>
            <Box sx={{bgcolor:'#BC172F',  borderRadius:'5px', height:'130px', mt:1, py:4, px:2, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <Typography sx={{color:'#fff', fontSize:'13px'}}>Monday,  April 2</Typography>
            <Box mt={4} sx={{display:'flex' ,justifyContent:'space-between', width:'50%'}}>
                <Box >
                    <Typography sx={{color:'#fff', fontSize:'13px'}}>0</Typography>
                    <Typography sx={{color:'#fff', fontSize:'13px'}}>Covers</Typography>
                </Box>
                <Box >
                    <Typography sx={{color:'#fff', fontSize:'13px'}}>0</Typography>
                    <Typography sx={{color:'#fff', fontSize:'13px'}}>Parties</Typography>
                </Box>
            </Box>
            </Box>
        </Box>
    </Grid>
    <Grid item lg={4} xs={12}>
        <Box>
            <Typography sx={{color:'#fff', fontSize:'13px'}}>Walk-ins Today</Typography>
            <Box sx={{bgcolor:'#BC172F',  borderRadius:'5px', height:'130px', mt:1, py:4, px:2, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <Typography sx={{color:'#fff', fontSize:'13px'}}>Monday,  April 2</Typography>
            <Box mt={4} sx={{display:'flex' ,justifyContent:'space-between', width:'50%'}}>
                <Box >
                    <Typography sx={{color:'#fff', fontSize:'13px'}}>0</Typography>
                    <Typography sx={{color:'#fff', fontSize:'13px'}}>Covers</Typography>
                </Box>
                <Box >
                    <Typography sx={{color:'#fff', fontSize:'13px'}}>0</Typography>
                    <Typography sx={{color:'#fff', fontSize:'13px'}}>Parties</Typography>
                </Box>
            </Box>
            </Box>
        </Box>
    </Grid>
</Grid>
</Box>
</Box>
<Box sx={{bgcolor:'#1A1A1A', height:'600px'}}>

</Box>
</>
  )
}

export default Dashboard
