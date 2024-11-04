// src/pages/StoryPage.js
import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StoryPage = ({ chapter }) => {
  const [expanded, setExpanded] = useState(() => {
    const savedExpanded = localStorage.getItem(`expanded-chapter-${chapter}`);
    return savedExpanded !== null ? JSON.parse(savedExpanded) : false;
  });

  useEffect(() => {
    localStorage.setItem(`expanded-chapter-${chapter}`, JSON.stringify(expanded));
  }, [expanded, chapter]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <h1>Story Content for Chapter {chapter} Goes Here</h1>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Introduction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Test introduction content specific to Chapter {chapter}.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography>Main Plot</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Test main plot details specific to Chapter {chapter}.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default StoryPage;