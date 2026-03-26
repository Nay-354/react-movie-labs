import React from "react";
import Typography from "@mui/material/Typography";

const MovieRecommendation =  ({ recommendation }) => {
  return (
    <>
      <Typography >
     {recommendation.title}
      </Typography>

      <Typography>
        {recommendation.overview} 
      </Typography>

      <Typography>
        {recommendation.backdrop_path} 
      </Typography>
    </>
  );
};
export default MovieRecommendation