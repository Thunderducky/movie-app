import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Results from "./components/Results";
import './App.css';
import API from './utils/API';

function App() {
  const [search, setSearch] = useState("Planet of the Apes");
  const [results, setResults] = useState([])

  function searchMovies(){
    API.getMovies(search).then(searchResults => setResults(searchResults.Search || []));
  }

  // ComponentDidMount ComponentDidUpdate
  useEffect(() => {
    searchMovies()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Search label="movie" search={search} setSearch={setSearch} searchMovies={searchMovies}/>
          <Results results={results} />
        </div>
      </header>
    </div>
  );
}

export default App;
