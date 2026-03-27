import React from "react";
import Actor from "../actorCard";
import Grid from "@mui/material/Grid";

const ActorList = (props) => {
  let actorCards = props.actors.map((a) => (
    <Grid key={a.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
           <Actor key={a.id} actor={a} action={props.action} />


    </Grid>
  ));
  return actorCards;
};

export default ActorList;