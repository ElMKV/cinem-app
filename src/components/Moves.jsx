import React from "react";
import { Movie } from "./Move";

function Movies(props) {
  const { movies = [] } = props;


  return (
    <React.Fragment>
      <div className="movies">
        {movies.length ? movies.map((movie) => (
          <Movie key={movie.imdbID} {...movie} />
        )) : <h5>Ничего не найдено</h5>
    }
      </div>
    </React.Fragment>
  );
}

export { Movies }