import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#BC172F",
    },
  },
  typography: {
    h1: {
      fontFamily: "Gordita-medium",
      fontWeight: 700,
      fontSize: "48px",
      color: "#fff",
      lineHeight: "58px",
    },
    h2: {
      fontFamily: "Gordita",
      fontWeight: 300,
      color: "#fff",
      fontSize: "20px",
      lineHeight: "30px",
    },
    button: {
      fontFamily: "Gordita",
      textTransform: "initial",
      color: "#2b2b2b",
      fontSize: "13px",
    },
    caption: {
      fontFamily: "Gordita",
      fontWeight: 300,
      fontSize: "16px",
      color: "#2B2B2B",
    },
    subtitle1: {
      fontFamily: "Gordita-medium",
      color: "#000",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "34px",
    },
    h3: {
      fontFamily: "Gordita",
      fontWeight: 700,
      color: "#333333",
      fontSize: "64px",
    },
    subtitle2: {
      fontFamily: "Gordita-medium",
      // fontWeight: 700,
      color: "#2b2b2b",
      fontSize: "22px",
    },
    body1: {
      fontFamily: "Gordita",
      fontWeight: 300,
      fontSize: "15px",
      color: "#2b2b2b",
      lineHeight: "28px",
      letterSpacing: "0.01em",
    },
    body2: {
      fontFamily: "Gordita-light",
      fontSize: "15px",
      color: "#2b2b2b",
      lineHeight: "26px",
      letterSpacing: "0.01em",
    },

  },


});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

