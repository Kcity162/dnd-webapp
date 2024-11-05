import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import rulesData from '../data/rules.json';
import PageWrapper from '../components/PageWrapper';

const RulesPage = () => {

  const [expanded, setExpandedRules] = useState(() => {
    const savedExpanded = localStorage.getItem('expanded-rules');
    return savedExpanded !== null ? JSON.parse(savedExpanded) : false;
  });

  useEffect(() => {
    localStorage.setItem('expanded-rules', JSON.stringify(expanded));
  }, [expanded]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedRules(isExpanded ? panel : false);
  };
  return (
    <PageWrapper>
      {rulesData.map((rule, index) => (
        <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}a-content`} id={`panel${index}a-header`}>
            <Typography color='primary'>{rule.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{rule.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </PageWrapper>
  );
};

export default RulesPage;
