import React from "react";
import { getTopRatedMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import PlaylistAddIcon from '../components/cardIcons/addToPlaylists';

const TopRatedPage = (props) => {

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['topRated'],
    queryFn: getTopRatedMovies,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const topRatedMovies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = topRatedMovies.filter(tRM => tRM.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (topRatedMovieId) => true 

   return (
      <PageTemplate
        title="Top Rated Movies"
        movies={topRatedMovies}
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
export default TopRatedPage;