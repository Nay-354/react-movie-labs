// import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import AddToPlaylistsIcon from '../cardIcons/addToPlaylists';
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router";
import Avatar from '@mui/material/Avatar';
import React, { useContext  } from "react";

export default function ActorCard({ actor, action }) {

  return (
    <Card sx={{ backgroundColor: 'turquoise' }}>
            <CardHeader sx={{ backgroundColor: ' #E0B0FF' }}
        avatar={
          actor.favorite ? (
            <Avatar sx={{ backgroundColor: 'teal' }}>
              <FavoriteIcon />
            </Avatar>
          ): null
       
        }
        title={
          <Typography variant="h5" component="p">
            {actor.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          actor.poster_path
            ? `https://image.tmdb.org/t/p/w500/${actor.poster_path}`
            : img
        }
      />
      
      <CardActions>
        <Link to={`/actors/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
        
      </CardActions>
    </Card>
  );
}