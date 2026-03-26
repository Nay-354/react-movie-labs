import React from "react";
import Movie from "../movieCard";
import Grid from "@mui/material/Grid";

const RecMovieList = (props) => {
  let movieCards = props.movies.map((m) => (
    <Grid key={m.id} size={{xs: 12, sm: 9, md: 6, lg: 3, xl: 4}} sx={{padding: "10px"}}>
           <Movie key={m.id} movie={m} action={props.action} />


    </Grid>
  ));
  return <Grid container>{movieCards}</Grid>;
};

export default RecMovieList;