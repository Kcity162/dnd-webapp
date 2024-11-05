// src/components/BottomNavigationBar.js
import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BookIcon from '@mui/icons-material/Book';
import CasinoIcon from '@mui/icons-material/Casino';
import GroupIcon from '@mui/icons-material/Group';
import RulesIcon from '@mui/icons-material/MenuBook';
import Paper from '@mui/material/Paper';

const BottomNavigationBar = ({ onChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100 }} elevation={3}>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
      >
        <BottomNavigationAction label="Story" icon={<BookIcon />} />
        <BottomNavigationAction label="Rules" icon={<RulesIcon />} />
        <BottomNavigationAction label="Roll Tables" icon={<CasinoIcon />} />
        <BottomNavigationAction label="Players" icon={<GroupIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigationBar;