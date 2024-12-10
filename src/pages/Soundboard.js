import React, { useState } from "react";
import {
  TextField,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  InputAdornment,
  IconButton,
  Fab,
  Chip,
} from "@mui/material";
import { FixedSizeList as List } from "react-window";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import ClearIcon from "@mui/icons-material/Clear";
import StopIcon from "@mui/icons-material/Stop";
import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

import sounds from "../data/sounds.json";

const Soundboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState(new Set());

  const authToken = "70e4d3c5a322f3513113b008af04f249d6b88f4c";

  const colorCache = {};

  const getRandomPastelColor = () => {
    const r = Math.floor((Math.random() * 127) + 128);
    const g = Math.floor((Math.random() * 127) + 128);
    const b = Math.floor((Math.random() * 127) + 128);
    return `rgba(${r}, ${g}, ${b}, 0.16)`;
  };

  const getChipColor = (soundsetName) => {
    if (!colorCache[soundsetName]) {
      colorCache[soundsetName] = getRandomPastelColor();
    }
    return colorCache[soundsetName];
  };

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const filteredSounds = sounds
    .filter(
      (sound) =>
        (typeof sound.Name === "string" &&
          sound.Name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (typeof sound.Soundset === "string" &&
          sound.Soundset.toLowerCase().includes(searchTerm.toLowerCase())) ||
        favorites.has(sound.ID)
    )
    .sort((a, b) => {
      const aIsFavorite = favorites.has(a.ID);
      const bIsFavorite = favorites.has(b.ID);

      if (aIsFavorite && !bIsFavorite) return -1; // `a` is a favorite, move it up
      if (!aIsFavorite && bIsFavorite) return 1;  // `b` is a favorite, move it up
      return 0; // No change
    });

  const playSound = (trigger) => {
    const baseUrl =
      "https://www.syrinscape.com/online/frontend-api/";
    const url = `${baseUrl}${trigger}/play/?auth_token=${authToken}`;

    fetch(url, {
      method: "GET",
      mode: "no-cors",
    })
      .then(() => {
        console.log(`Sound triggered: ${trigger}`);
      })
      .catch((error) => console.error("Error triggering sound:", error));
  };

  const playMood = () => {
    const baseUrl =
      "https://www.syrinscape.com/online/frontend-api/";
    const url = `${baseUrl}moods/12584/play/?auth_token=${authToken}`;

    fetch(url, {
      method: "GET",
      mode: "no-cors",
    })
      .then(() => {
        console.log("Mood played: /moods/12584");
      })
      .catch((error) => console.error("Error playing mood:", error));
  };

  const getIcon = (type) => {
    if (type.toLowerCase() === "mood") {
      return <NightlifeIcon />;
    }
    return <CrisisAlertIcon />;
  };

  const Row = ({ index, style }) => {
    const sound = filteredSounds[index];
    return (
      <div style={style}>
        <Card sx={{ position: "relative", margin: "8px" }}>
          <Box
            sx={{
              position: "absolute",
              top: 8,
              left: 8,
              zIndex: 10,
            }}
          >
            <IconButton
              onClick={() => toggleFavorite(sound.ID)}
              color={favorites.has(sound.ID) ? "primary" : "default"}
            >
              {favorites.has(sound.ID) ? (
                <PushPinIcon />
              ) : (
                <PushPinOutlinedIcon />
              )}
            </IconButton>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
            }}
          >
            {getIcon(sound.Type)}
          </Box>
          <CardContent>
            <Chip
              label={sound.Soundset}
              sx={{
                backgroundColor: getChipColor(sound.Soundset),
                color: "#000",
                fontWeight: "bold",
              }}
            />
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => playSound(sound.Trigger)}
            >
              {sound.Name}
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  };

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          endAdornment: searchTerm && (
            <InputAdornment position="end">
              <IconButton onClick={() => setSearchTerm("")}>
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <List
        height={600}
        itemCount={filteredSounds.length}
        itemSize={180}
        width="100%"
      >
        {Row}
      </List>
      <Fab
        color="secondary"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
        onClick={playMood}
      >
        <StopIcon />
      </Fab>
    </div>
  );
};

export default Soundboard;
