import { Box } from '@mui/material'
import React, {useState} from 'react'
import TopNav from './TopNav'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
    const [open, setOpen] = useState(false);
  return (
 <Box>
    <TopNav/>
    <Box sx={{display:'flex'}}>
        <SideBar/>
        <Box sx={{bgcolor:'#1a1a1a', width:{lg:'82%', xs:'100%', sm:'100%'}, height:'100vh', pt:8.4}}>
        <Outlet/>

        </Box>
    </Box>
 </Box>
  )
}

export default SharedLayout