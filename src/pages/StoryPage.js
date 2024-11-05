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
import PageWrapper from '../components/PageWrapper';

const StoryPage = () => {


  const [expanded, setExpandedStory] = useState({});
  const [selectedChapter, setSelectedChapter] = useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedStory((prevExpanded) => ({
      ...prevExpanded,
      [panel]: isExpanded
    }));
  };

  const handleChapterChange = (event, newValue) => {
    const chapterIndex = storyData.findIndex(chapter => chapter.title === newValue);
    if (chapterIndex !== -1) {
      setSelectedChapter(chapterIndex);
      setExpandedStory({}); // Collapse all accordions when changing chapters
    }
  };

  return (
    <PageWrapper>
        <Autocomplete
          options={storyData.map(chapter => chapter.title)}
          value={storyData[selectedChapter]?.title || ''}
          onChange={handleChapterChange}
          renderInput={(params) => <TextField {...params} label="Select Chapter" variant="outlined" />}
          sx={{ width: '100%', marginBottom: '16px', backgroundColor: 'white' }}
        />
        {storyData[selectedChapter]?.subSections.map((subSection, index) => (
          <Accordion key={index} expanded={!!expanded[`panel${index}`]} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: 'surfContainer.default' }} aria-controls={`panel${index}a-content`} id={`panel${index}a-header`}>
              <Typography variant="h6">{subSection.title}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: 'surface.default' }}>
              {subSection.content && subSection.content.split('\n').map((line, i) => (
                <Typography key={i}>{line}</Typography>
              ))}
              {subSection.subSections && subSection.subSections.map((nestedSection, nestedIndex) => (
                <Accordion key={`${index}-${nestedIndex}`} expanded={!!expanded[`panel${index}-${nestedIndex}`]} onChange={handleChange(`panel${index}-${nestedIndex}`)}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: 'surfContainerTert.default', color: "black" }} aria-controls={`panel${index}-${nestedIndex}a-content`} id={`panel${index}-${nestedIndex}a-header`}>
                    <Typography>{nestedSection.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: 'surfContainerLowest.default' }}>
                    {nestedSection.content && nestedSection.content.split('\n').map((line, i) => (
                      <Typography key={i}>{line}</Typography>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </PageWrapper>
  );
};

export default StoryPage;
