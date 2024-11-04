// src/pages/StoryPage.js

import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import storyData from '../data/story.json';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const StoryPage = () => {
  const pageStyle = {
  
    backgroundImage: "url('/images/parchment-background.png')", // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '16px',
    width: '100%',
    boxSizing: 'border-box'

  
};  
  const [expanded, setExpandedStory] = useState(() => {
    const savedExpanded = localStorage.getItem('expanded-story');
    return savedExpanded !== null ? JSON.parse(savedExpanded) : false;
  });
  const [selectedChapter, setSelectedChapter] = useState(0);

  useEffect(() => {
    localStorage.setItem('expanded-story', JSON.stringify(expanded));
  }, [expanded]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedStory(isExpanded ? panel : false);
  };

  const handleChapterChange = (event, newValue) => {
    const chapterIndex = storyData.findIndex(chapter => chapter.title === newValue);
    if (chapterIndex !== -1) {
      setSelectedChapter(chapterIndex);
    }
  };

  return (
    <div style={pageStyle}>
      <Autocomplete
        options={storyData.map(chapter => chapter.title)}
        value={storyData[selectedChapter].title}
        onChange={handleChapterChange}
        renderInput={(params) => <TextField {...params} label="Select Chapter" variant="outlined" />}
        sx={{ width: '100%', marginBottom: '16px', backgroundColor: 'white' }}
      />
      {storyData[selectedChapter].subSections.map((subSection, index) => (
        <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography color='primary'>{subSection.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{subSection.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default StoryPage;
