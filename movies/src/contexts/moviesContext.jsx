import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] );
   const [playlists, setPlaylists] = useState( [] );
  const [myReviews, setMyReviews] = useState( {} );
console.log(playlists);
  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };
  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

    const addToPlaylists = (upcomingMovie) => {
    let newPlaylists = [];
    if (!playlists.includes(upcomingMovie.id)){
      newPlaylists = [...playlists, upcomingMovie.id];
    }
    else{
      newPlaylists = [...playlists];
    }
    setPlaylists(newPlaylists)
  };

    // We will use this function in the next step
  const removeFromPlaylists = (upcomingMovie) => {
    setPlaylists( playlists.filter(
      (uMId) => uMId !== upcomingMovie.id
    ) )
  };

   const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  console.log(myReviews);

 return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        playlists,
        addToPlaylists,
        removeFromPlaylists,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;