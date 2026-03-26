import React, { useEffect, useState }  from "react";
import Grid from "@mui/material/Grid";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Header from "../headerMovieList";
import Paper from "@mui/material/Paper";
import { Link } from "react-router";
import { getMovieRecommendations } from "../../api/tmdb-api";
import { excerpt } from "../../util";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner';
import RecMovieList from "../recMovieList";
import { size } from "lodash";

export default function MovieRecommendations({ movie, action}) {
   const { data, error, isPending, isError } = useQuery({
    queryKey: ['recommendations', { id: movie.id }],
    queryFn: getMovieRecommendations,
  });
  
  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const recommendations = data.results;

  console.log(recommendations)
  return (
    // <TableContainer component={Paper}>
    //   <Table sx={{minWidth: 550}} aria-label="recommendations table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell >Name</TableCell>
    //         <TableCell align="center">Overview</TableCell>
    //         <TableCell align="right">Poster</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {recommendations.map((rC) => (
    //         <TableRow key={rC.id}>
    //           <TableCell component="th" scope="row">
    //             {rC.title}
    //           </TableCell>
    //           <TableCell >{rC.overview}</TableCell>
    //           <TableCell >
    //          {rC.poster_path}
    //           </TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>

        <RecMovieList action = {action} movies={recommendations}></RecMovieList>
  
  );
}