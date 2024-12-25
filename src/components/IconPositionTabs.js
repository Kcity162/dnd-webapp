import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CastleIcon from '@mui/icons-material/Castle';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';

export default function IconPositionTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
    >
      <Tab icon={<FavoriteIcon />} iconPosition="start" label="Fav's"/>
      <Tab icon={<SportsMartialArtsIcon />} iconPosition="start" label="Combat" />
      <Tab icon={<CrisisAlertIcon />} iconPosition="start" label="Suspenseful" />
      <Tab icon={<CastleIcon />} iconPosition="start" label="Epic" />
      <Tab icon={<AutoAwesomeIcon />} iconPosition="start" label="Mystical" />
      <Tab icon={<SelfImprovementIcon />} iconPosition="start" label="Calm" />
      <Tab icon={<NewReleasesIcon />} iconPosition="start" label="Chaotic" />
      <Tab icon={<SportsBarIcon />} iconPosition="start" label="Tavern & Town" />
      <Tab icon={<ThunderstormIcon />} iconPosition="start" label="Environmental" />
      <Tab icon={<SentimentVeryDissatisfiedIcon />} iconPosition="start" label="Emotional" />
      <Tab icon={<AutoFixHighIcon />} iconPosition="start" label="Spells" />

    </Tabs>
  );
}
