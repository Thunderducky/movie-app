import React from "react";

function Results(props){
    return <div>
    {
      props.results.map(movie => {
        console.log(movie);
        return <div key={movie.imdbID}>{movie.Title} - {movie.Year}</div>
      })
    }
  </div>
}

export default Results;