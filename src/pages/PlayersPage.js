// src/pages/PlayersPage.js

import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import playersData from '../data/players.json';

const PlayersPage = () => {
  const pageStyle = {
  
    backgroundImage: "url('/images/parchment-background.png')", // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '16px',
    width: '100%',
    boxSizing: 'border-box'

  
};  
  const [expanded, setExpandedPlayers] = useState(() => {
    const savedExpanded = localStorage.getItem('expanded-players');
    return savedExpanded !== null ? JSON.parse(savedExpanded) : false;
  });

  useEffect(() => {
    localStorage.setItem('expanded-players', JSON.stringify(expanded));
  }, [expanded]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPlayers(isExpanded ? panel : false);
  };
  return (
    <div style={pageStyle}>
      {playersData.map((player, index) => (
        <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: 'surfContainer.default',  }} aria-controls={`panel${index}a-content`} id={`panel${index}a-header`}>
            <Typography  variant="h6">{player.name}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: 'surface.default' }}>
            <Typography>{player.details}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default PlayersPage;