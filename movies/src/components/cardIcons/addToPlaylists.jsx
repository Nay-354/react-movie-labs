import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

const AddToPlaylistsIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToPlaylists = (e) => {
    e.preventDefault();
    context.addToPlaylists(movie);
  };

  return (
    <IconButton aria-label="add to playlists" onClick={handleAddToPlaylists}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistsIcon;