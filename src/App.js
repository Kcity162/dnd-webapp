// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import BottomNavigationBar from './components/BottomNavigationBar';
import StoryPage from './pages/StoryPage';
import RulesPage from './pages/RulesPage';
import RollTablesPage from './pages/RollTablesPage';
import PlayersPage from './pages/PlayersPage';
import AppBar from '@mui/material/AppBar';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function App() {
  const [selectedPage, setSelectedPage] = useState(() => {
    const savedPage = localStorage.getItem('selectedPage');
    return savedPage !== null ? JSON.parse(savedPage) : 0;
  });

  const [tabValue, setTabValue] = useState(() => {
    const savedTab = localStorage.getItem('tabValue');
    return savedTab !== null ? JSON.parse(savedTab) : 0;
  });
  const [searchValue, setSearchValue] = useState('Search story, rules etc..');


  const handleSearchChange = (event, newValue) => {
    setSearchValue(newValue);
    if (newValue === 'Chapter 1') {
      setSelectedPage(0);
      setTabValue(0);
      localStorage.setItem('tabValue', JSON.stringify(0));
    } else if (newValue === 'Chapter 2') {
      setSelectedPage(0);
      setTabValue(1);
      localStorage.setItem('tabValue', JSON.stringify(1));
    } else if (newValue === 'Chapter 3') {
      setSelectedPage(0);
      setTabValue(2);
      localStorage.setItem('tabValue', JSON.stringify(2));
    } else if (newValue === 'Rules') {
      setSelectedPage(1);
      localStorage.setItem('expanded-rules', JSON.stringify('panel1'));
    } else if (newValue === 'Roll Tables') {
      setSelectedPage(2);
      localStorage.setItem('expanded-rolltables', JSON.stringify('panel1'));
    } else if (newValue === 'Players') {
      setSelectedPage(3);
      localStorage.setItem('expanded-players', JSON.stringify('panel1'));
    }
  };

  const renderContent = () => {
    switch (selectedPage) {
      case 0:
        return (
          <div>
<Autocomplete
  options={['Chapter 1', 'Chapter 2', 'Chapter 3']}
  value={tabValue === 0 ? 'Chapter 1' : tabValue === 1 ? 'Chapter 2' : 'Chapter 3'}
  onChange={(event, newValue) => {
    if (newValue === 'Chapter 1') setTabValue(0);
    if (newValue === 'Chapter 2') setTabValue(1);
    if (newValue === 'Chapter 3') setTabValue(2);
    localStorage.setItem('tabValue', JSON.stringify(newValue === 'Chapter 1' ? 0 : newValue === 'Chapter 2' ? 1 : 2));
  }}
  renderInput={(params) => <TextField {...params} placeholder="Select Chapter" variant="outlined" />}
  sx={{ width: '100%', marginBottom: '16px' }}
/>

            {tabValue === 0 && <StoryPage chapter={1} />}
            {tabValue === 1 && <StoryPage chapter={2} />}
            {tabValue === 2 && <StoryPage chapter={3} />}
          </div>
        );
      case 1:
        return (
          <div>
            <RulesPage />
          </div>
        );
      case 2:
        return (
          <div>
            <RollTablesPage />
          </div>
        );
      case 3:
        return (
          <div>
            <PlayersPage />
          </div>
        );
      default:
        return <h1>Welcome to D&D Web App</h1>;
    }
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>

          <Autocomplete
            options={['Chapter 1', 'Chapter 2', 'Chapter 3', 'Rules', 'Roll Tables', 'Players', 'General Rules', 'Combat Rules', 'Treasure Tables', 'Encounter Tables', 'Player 1', 'Player 2']}
            value={searchValue}
            onChange={handleSearchChange}
            renderInput={(params) => <TextField {...params} variant="outlined" />}
            sx={{ width: '100%', marginTop: '8px', marginBottom: '8px', backgroundColor: 'white' }}
          />
        </Toolbar>
      </AppBar>
      <main style={{ padding: '8px', paddingBottom: '80px' }}>
        {renderContent()}
      </main>
      <BottomNavigationBar onChange={setSelectedPage} />
    </div>
  );
}

export default App;