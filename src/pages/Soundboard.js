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

  const filteredSounds = [
    // Pinned items
    ...sounds.filter(
      (sound) =>
        favorites.has(sound.ID) &&
        ((typeof sound.Name === "string" &&
          sound.Name.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (typeof sound.Soundset === "string" &&
            sound.Soundset.toLowerCase().includes(searchTerm.toLowerCase())))
    ),
    // Non-pinned items
    ...sounds.filter(
      (sound) =>
        !favorites.has(sound.ID) &&
        ((typeof sound.Name === "string" &&
          sound.Name.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (typeof sound.Soundset === "string" &&
            sound.Soundset.toLowerCase().includes(searchTerm.toLowerCase())))
    ),
  ];

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
    const defaultImageUrl = "https://storage.syrinscape.com/media/dd/element/icon/6bfeca4420d2050a66f22074843a6975.png";

    return (
      <div style={style}>
        <Card sx={{ position: "relative", margin: "8px" }}>
          {/* Pin Icon */}
          <Box
            sx={{
              position: "absolute",
              top: 8,
              left: 8,
              zIndex: 10,
              display: "flex",
              flexDirection: 'row'
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
          {/* Type Icon 
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
            }}
          >
            {getIcon(sound.Type)}
          </Box> */}
          <CardContent sx={{ display: "flex", alignItems: "center" }}>
           
            {/* Soundset Name 
            <Chip
              label={sound.Soundset}
              sx={{
                backgroundColor: getChipColor(sound.Soundset),
                color: "#000",
                fontWeight: "bold",
              }}
            />
          */}
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
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "#fff",
          padding: "8px 0",
        }}
      >
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
      </div>
      <List
        height={850}
        itemCount={filteredSounds.length}
        itemSize={80}
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
