import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import rollTablesData from '../data/rollTables.json';
import PageWrapper from '../components/PageWrapper';

const RollTablesPage = () => {

  const [expanded, setExpandedRollTables] = useState(() => {
    const savedExpanded = localStorage.getItem('expanded-rolltables');
    return savedExpanded !== null ? JSON.parse(savedExpanded) : false;
  });

  useEffect(() => {
    localStorage.setItem('expanded-rolltables', JSON.stringify(expanded));
  }, [expanded]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedRollTables(isExpanded ? panel : false);
  };
  return (
    <PageWrapper>
      {rollTablesData.map((table, index) => (
        <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}a-content`} id={`panel${index}a-header`}>
            <Typography color='primary'>{table.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{table.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </PageWrapper>
  );
};

export default RollTablesPage;