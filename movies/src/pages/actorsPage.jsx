import React from "react";
import { getActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import PlaylistAddIcon from '../components/cardIcons/addToPlaylists';

const PeoplePage = (props) => {

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['actors'],
    queryFn: getActors,
  })

  
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const actors = data.results;
console.log(actors);
  

   return (
      <PageTemplate
        title="Discover Actors"
        actors={actors}
         />
        
  );
};
export default PeoplePage;