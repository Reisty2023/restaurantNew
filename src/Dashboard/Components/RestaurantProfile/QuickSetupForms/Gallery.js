import { Box, Typography, Button, Avatar, Grid } from '@mui/material'
import React, {useRef, useState} from 'react'
import galleryIcon from "../../../../assets/Icons/gallery.svg";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Gallery = () => {

  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger file input click
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataURL = e.target.result;
        setSelectedFileURL(dataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  const [selectedFileURL, setSelectedFileURL] = useState(null);
  return (
<>
<Box sx={{ bgcolor: "#333333", mt: 2, borderRadius: "5px" }}>
        <Box sx={{ margin: "0 auto", width: "85%", py: 5 }}>
          <Typography variant="caption" sx={{ color: "#fff" }}>
          Add your 3 first major gallery photos
          </Typography>

          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Gordita-light",
              fontSize: "12px",
              mt: 1,
            }}
          >
     Your guests will see these as the first three pictures before they proceed to view your gallery photos.
          </Typography>
          <Grid container spacing={2} >
            <Grid item lg={8}>
            <Box
            sx={{
              mt: 3,
              border: "1px dashed #ccc",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              py: 8,
              height:'300px'
            }}
          >
            {selectedFileURL ? (
              <Box>
                <Avatar
                  variant="square"
                  src={selectedFileURL}
                  alt="Selected File"
                  onClick={handleButtonClick}
                />
              </Box>
            ) : (
              <img
                src={galleryIcon}
                alt="gallery_icon"
                onClick={handleButtonClick}
              />
            )}

            <Typography
              sx={{
                color: "#ccc",
                mt: 2,
                fontFamily: "gordita-light",
                fontSize: "10px",
              }}
            >
              Drag or drop your photo here
            </Typography>
            <Button
              onClick={handleButtonClick}
              variant="contained"
              sx={{
                mt: 2,
                background: "#ccc",
                color: "#2b2b2b",
                "&:hover": { background: "#fff" },
              }}
            >
              Browse Files
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />
          </Box>
  
            </Grid>

            <Grid item lg={4}>
    
                <Box
            sx={{
              mt: 3,
              border: "1px dashed #ccc",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              py: 8,
              height:'70px'
            }}
          >
            {selectedFileURL ? (
              <Box>
                <Avatar
                  variant="square"
                  src={selectedFileURL}
                  alt="Selected File"
                  onClick={handleButtonClick}
                />
              </Box>
            ) : (
              <img
                src={galleryIcon}
                alt="gallery_icon"
                onClick={handleButtonClick}
              />
            )}

            <Typography
              sx={{
                color: "#ccc",
                mt: 2,
                fontFamily: "gordita-light",
                fontSize: "10px",
              }}
            >
              Drag or drop your photo here
            </Typography>
            <Button
              onClick={handleButtonClick}
              variant="contained"
              sx={{
                mt: 2,
                background: "#ccc",
                color: "#2b2b2b",
                "&:hover": { background: "#fff" },
              }}
            >
              Browse Files
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />
          </Box>
          
                <Box
            sx={{
              mt: 3,
              border: "1px dashed #ccc",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              py: 8,
              height:'75px'
            }}
          >
            {selectedFileURL ? (
              <Box>
                <Avatar
                  variant="square"
                  src={selectedFileURL}
                  alt="Selected File"
                  onClick={handleButtonClick}
                />
              </Box>
            ) : (
              <img
                src={galleryIcon}
                alt="gallery_icon"
                onClick={handleButtonClick}
              />
            )}

            <Typography
              sx={{
                color: "#ccc",
                mt: 2,
                fontFamily: "gordita-light",
                fontSize: "10px",
              }}
            >
              Drag or drop your photo here
            </Typography>
            <Button
              onClick={handleButtonClick}
              variant="contained"
              sx={{
                mt: 2,
                background: "#ccc",
                color: "#2b2b2b",
                "&:hover": { background: "#fff" },
              }}
            >
              Browse Files
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />
          </Box>
               
       
            </Grid>
          </Grid>
        
        </Box>
      </Box>
</>
  )
}

export default Gallery
