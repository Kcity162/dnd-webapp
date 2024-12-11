// src/pages/StoryPage.js

import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import storyData from "../data/story.json";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import PageWrapper from "../components/PageWrapper";
import { Card } from "@mui/material";

const StoryPage = () => {
  const [expanded, setExpandedStory] = useState("");
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [expandedPanels, setExpandedPanels] = useState({});

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanels((prevExpanded) => ({
      ...prevExpanded,
      [panel]: isExpanded, // Set the state to track whether the panel is expanded or not
    }));
  };

  const handleChapterChange = (event, newValue) => {
    const chapterIndex = storyData.findIndex(
      (chapter) => chapter.title === newValue
    );
    if (chapterIndex !== -1) {
      setSelectedChapter(chapterIndex);
      setExpandedStory({}); // Collapse all accordions when changing chapters
    }
  };

  return (
    <PageWrapper>
      <Autocomplete
        options={storyData.map((chapter) => chapter.title)}
        value={storyData[selectedChapter]?.title || ""}
        onChange={handleChapterChange}
        renderInput={(params) => (
          <TextField {...params} label="Select Chapter" variant="outlined" />
        )}
        sx={{ width: "100%", marginBottom: "16px", backgroundColor: "white" }}
      />
      {storyData[selectedChapter]?.subSections.map((subSection, index) => (
        <Accordion
          key={index}
          expanded={!!expandedPanels[`panel${index}`]} // Check if the current panel is expanded
          onChange={handleChange(`panel${index}`)} // Handle the expand/collapse state
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ backgroundColor: "surface.default" }}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography variant="h6">{subSection.title}</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "surfContainerLowest.default",

            }}
          >

           <div class="container">
           {subSection.image && (
              <img
                src={subSection.image}
                alt={subSection.title}
                style={{ maxWidth: "150%", marginTop: "16px" }}
              />
            )} 
            
            <div class="notes">
            {subSection.content &&
              subSection.content
                .split("\n")
                .map((line, i) => <Typography key={i}>{line}</Typography>)}
              
              </div>
            </div>
            {subSection.subSections &&
              subSection.subSections.map((nestedSection, nestedIndex) => (
                <Accordion
                  key={`${index}-${nestedIndex}`}
                  expanded={!!expandedPanels[`panel${index}-${nestedIndex}`]} // Check if the current nested panel is expanded
                  onChange={handleChange(`panel${index}-${nestedIndex}`)} // Handle the expand/collapse state for the nested accordion
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      backgroundColor: "surfContainerHighest.default",
                      color: "black",
                    }}
                    aria-controls={`panel${index}-${nestedIndex}a-content`}
                    id={`panel${index}-${nestedIndex}a-header`}
                  >
                    <Typography>{nestedSection.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{ backgroundColor: "surfContainerLowest.default" }}
                  >

                    <div class="container">
                    {nestedSection.image && (
                      <img
                        src={nestedSection.image}
                        alt={nestedSection.title}
                        style={{ maxWidth: "150px", marginRight: "16px" }}
                      />
                    )}
                    <div class="notes">
                    {nestedSection.content &&
                      nestedSection.content
                        .split("\n")
                        .map((line, i) => (
                          <Typography key={i}>{line}</Typography>
                        ))}
                    </div>

                    </div>

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
