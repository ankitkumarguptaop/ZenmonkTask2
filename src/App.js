import './app.css'
import { BrowserRouter} from "react-router-dom";
import { Box } from '@mui/material';
import Router from './router/router';




function App() {
  return (
    <Box className="app">
         <BrowserRouter>
       <Router></Router>
    </BrowserRouter>
    </Box>
  );
}

export default App;
