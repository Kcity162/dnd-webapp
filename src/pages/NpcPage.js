import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function NpcPage() {
  const theme = useTheme();

  return (
    <Card sx={{ maxWidth: '30%'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Ismark the Lesser
          </Typography>
          <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://www.dndbeyond.com/attachments/thumbnails/1/719/350/443/cos03-03.png"
        alt="Live from space album cover"

      />
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            <strong>Role:</strong> Son of the late burgomaster, brother of Ireena.
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            <strong>Personality:</strong> Brave, loyal, but burdened by his father's legacy.
          </Typography>
        </CardContent>
      </Box>

    </Card>
  );
}
