import React from 'react';
import MovieGallery from '../components/moviegallery';
import MovieCategories from '../components/moviecategories'

const Movies = () => {
    return (
      <>
        <MovieCategories />
        <MovieGallery />
      </>
    );
}

export default Movies