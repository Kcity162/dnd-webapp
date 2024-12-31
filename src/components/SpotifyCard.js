import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import favSounds from "../data/favSounds.json";

export default function SpotifyCard() {
  const theme = useTheme();
  let playList = "https://open.spotify.com/embed/playlist/7uGkIR6FPOoVKzQ4Nr2TB8?utm_source=generator"
  
  return (

    

    <Card sx={{ display: 'flex', flexDirection: 'column', maxWidth: "325px", backgroundColor: '#F3E5F5' }}>
    <iframe
      style={{ borderRadius: '12px' }}
      src= {playList}
      width="100%"
      height="152"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
    </Card>
  );
}
