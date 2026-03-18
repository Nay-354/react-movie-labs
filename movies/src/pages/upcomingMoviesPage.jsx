import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

const UpcomingPage = (props) => {

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['upcoming'],
    queryFn: getUpcomingMovies,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const upcomingMovies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = upcomingMovies.filter(uM => uM.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (upcomingMovieId) => true 

   return (
      <PageTemplate
        title="Upcoming Movies"
        movies={upcomingMovies}
        action={(upcomingMovie) => {
          return <AddToFavoritesIcon upcomingMovie={upcomingMovie} />
        }}
      />
  );
};
export default UpcomingPage;