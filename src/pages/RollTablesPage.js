// src/pages/RollTablesPage.js

import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RollTables = () => {
  const [expanded, setRollTables] = useState(() => {
    const savedExpanded = localStorage.getItem('expanded-rolltables');
    return savedExpanded !== null ? JSON.parse(savedExpanded) : false;
  });

  useEffect(() => {
    localStorage.setItem('expanded-rolltables', JSON.stringify(expanded));
  }, [expanded]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPlayers(isExpanded ? panel : false);
  };
  return (
    <div>
      <h1>Players Content Goes Here</h1>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Player 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Detailed information about Player 1 goes here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography>Player 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Detailed information about Player 2 goes here.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PlayersPage;
