import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';

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
      <Tab icon={<PhoneIcon />} iconPosition="start" label="start"/>
      <Tab icon={<PhoneMissedIcon />} iconPosition="start" label="start" />
      <Tab icon={<FavoriteIcon />} iconPosition="start" label="start" />
      <Tab icon={<PersonPinIcon />} iconPosition="start" label="start" />
    </Tabs>
  );
}
