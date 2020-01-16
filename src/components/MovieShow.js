import React from 'react';
import MoviesList from './MoviesList';

const MovieShow = ({match, movies}) => {
  return (
    <div>
      {/* How is movieId being passed down? Or where are we getting movieId */}
      <h3>{ movies[match.params.movieId].title }</h3>
    </div>
  );
}

export default MovieShow;