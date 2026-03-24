import React from "react";
import { getPopularMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

const PopularPage = (props) => {

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['popular'],
    queryFn: getPopularMovies,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const popularMovies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = popularMovies.filter(pM => pM.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (popularMovieId) => true 

   return (
      <PageTemplate
        title="Popular Movies"
        movies={popularMovies}
        action={(movie) => {
          return <AddToFavoritesIcon movie={movie} />
        }}
      />
  );
};
export default PopularPage;