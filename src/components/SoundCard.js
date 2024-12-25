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

export default function Soundcard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', maxWidth: "325px", backgroundColor: '#F3E5F5' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            Castle approach
          </Typography>
          
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary', textAlign: 'left' }}
          >
            Haunted castle
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 0, pb: 1 }}>
          <IconButton aria-label="favorite">
            <FavoriteIcon sx={{ height: 16, width: 16 }} />
          </IconButton>
          <IconButton aria-label="copy">
            <ContentCopyIcon sx={{ height: 16, width: 16 }} />
          </IconButton>

          <IconButton aria-label="play/pause">
            <PlayCircleIcon sx={{ height: 40, width: 40 }} />
          </IconButton>
        </Box>
      </Box>

    </Card>
  );
}
