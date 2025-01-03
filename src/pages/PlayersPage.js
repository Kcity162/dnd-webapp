import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SoundCard from '../components/SoundCard';
import { ToggleButtonGroup } from '@mui/material';
import ColorToggleButton from '../components/IconPositionTabs';
import IconPositionTabs from '../components/IconPositionTabs';
import SearchDrawer from '../components/SearchDrawer';
import SpotifyCard from '../components/SpotifyCard';

export default function SoundTable() {
  return (
      <>
      
      <Grid container spacing={1} justifyContent="flex-start" alignItems="center" paddingLeft={"16px"}>
        <Grid>
          <SearchDrawer item xs={2} />
        </Grid>
        <Grid item xs={10} style={{paddingBottom: "5px"}}>
        <IconPositionTabs/>
          </Grid>
      </Grid>
      <Grid container spacing={1} justifyContent="flex-start" alignItems="center">
        <Grid item xs={2}>
          <SoundCard title="Sound 1" description="Description for sound 1" />
        </Grid>
        <Grid item xs={2}>
          <SpotifyCard/>
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
        <Grid item xs={2}>
          <SoundCard title="Sound 2" description="Description for sound 2" />
        </Grid>
      </Grid>
      </>
    );
             
}
