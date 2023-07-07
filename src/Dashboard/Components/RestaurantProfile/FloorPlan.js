import { Box, AppBar,IconButton, Typography } from '@mui/material'
import React, {useState} from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Link } from 'react-router-dom';
import DraggableItem from './FloorPlan/DraggableItem';
import DroppableArea from './FloorPlan/DroppableArea';

const FloorPlan = () => {

    const [items, setItems] = useState([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ]);
    const [draggedItem, setDraggedItem] = useState(0);
    const handleDragStart = (item) => {
      setDraggedItem(item);
    };
  
    const handleDrop = (itemId) => {
      const updatedItems = items.filter((item) => item.id !== Number(itemId));
      setItems(updatedItems);
    };
  
    const handleDragOver = (event) => {
      event.preventDefault();
    };
  return (
<>
<AppBar>
<Box sx={{bgcolor:'#1a1a1a', height:'60px', borderBottom:'1px solid #BC172F', display:'flex', justifyContent:'space-between', alignItems:'center', px:3}}>
<Box>
    <Link to="/quick-setup">
    <IconButton >
<KeyboardArrowLeftIcon sx={{color:'#fff'}}/>
    </IconButton>
    </Link>
</Box>
<Box>
    <Typography sx={{color:'#fff'}}>Create New Floor Plan</Typography>
</Box>
<Box/>
</Box>
</AppBar>
<Box sx={{bgcolor:'#1a1a1a', py:15, height:'100vh', overflow:'scroll'}}>
    <DroppableArea     onDrop={handleDrop}
        onDragOver={handleDragOver}
        items={items}/>
    <DraggableItem  item={draggedItem} onDragStart={handleDragStart}/>
</Box>
</>
  )
}

export default FloorPlan
