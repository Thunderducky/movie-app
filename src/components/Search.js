import React from "react";

function Search({label, search, setSearch, searchMovies}){
    return <div>
        <label htmlFor="movie">{label}:</label>
        <input name="movie" value={search} onChange={(event) => setSearch(event.target.value)}></input>
        <button onClick={
            (event) => { 
                event.preventDefault();
                searchMovies();
            } 
        }>Search</button>
    </div>
}

export default Search;