import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SoundCard from '../components/SoundCard';

export default function SoundTable() {
  return (
      <Grid container spacing={1} justifyContent="flex-start" alignItems="center">
        <Grid item xs={2}>
          <SoundCard title="Sound 1" description="Description for sound 1" />
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
    );
             
}
