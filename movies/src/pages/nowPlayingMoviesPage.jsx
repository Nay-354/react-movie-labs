import React from "react";
import { getNowPlayingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import PlaylistAddIcon from '../components/cardIcons/addToPlaylists';

const NowPlayingPage = (props) => {

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['nowPlaying'],
    queryFn: getNowPlayingMovies,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const nowPlayingMovies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = nowPlayingMovies.filter(nPM => nPM.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (nowPlayingMovieId) => true 

   return (
      <PageTemplate
        title="Find out what's playing now!"
        movies={nowPlayingMovies}
        action={(movie) => {
          return (
            <>
              <AddToFavoritesIcon movie={movie} />
              <PlaylistAddIcon movie={movie} />
            </>
          );
        }}
      />
  );
};
export default NowPlayingPage;