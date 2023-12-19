import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import StarRateIcon from '@mui/icons-material/StarRate';
import {useEffect} from "react";
import { useNavigate } from "react-router-dom"; 

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  useEffect(() => {
      if(value === 0) navigate('/');
      else if(value === 1) navigate('/movies');
      else if(value === 2) navigate('/series');
      else if(value === 3) navigate('/search');
      else if(value === 4) navigate('/rate');
  },[value,navigate]
  );

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          backgroundColor: '#36454F',
          zIndex: 100,
        }}
      >
        <BottomNavigationAction 
            style = {{color:"#d8b218e5"}}
            label="Trending" 
            icon={<WhatshotIcon />} 
        />
        <BottomNavigationAction 
            style = {{color:"#d8b218e5"}}
            label="Movies"  
            icon={<MovieIcon />} 
        />
        <BottomNavigationAction 
            style = {{color:"#d8b218e5"}}
            label="Series" 
            icon={<TvIcon />} 
        />
         <BottomNavigationAction 
            style = {{color:"#d8b218e5"}}
            label="Search" 
            icon={<SearchIcon />} 
        />
        <BottomNavigationAction 
            style = {{color:"#d8b218e5"}}
            label="Rate Us" 
            icon={<StarRateIcon />} 
        />
      </BottomNavigation>
      
    </Box>
  );
}
