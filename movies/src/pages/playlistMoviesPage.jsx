import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "@tanstack/react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromPlaylists from "../components/cardIcons/removeFromPlaylists";

const PlaylistMoviesPage = () => {
  const {playlists: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const playlistMovieQueries = useQueries({
    queries: movieIds.map((upcomingMovieId) => {
      return {
        queryKey: ['movie', { id: upcomingMovieId }],
        queryFn: getMovie,
      }
    })
  });
  
  // Check if any of the parallel queries is still loading.
  const isPending = playlistMovieQueries.find((uM) => uM.isPending === true);

  if (isPending) {
    return <Spinner />;
  }

  const upcomingMovies = playlistMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Your Playlist"
      movies={upcomingMovies}
      action={(movie) => {
        return (
          <>
            <RemoveFromPlaylists movie={movie} />
          </>
        );
      }}
    />
  );
};

export default PlaylistMoviesPage;