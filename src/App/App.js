import './App.css';
// import searchIcon from '../icons/search.png';

// Example imports (for later):
import { useState } from 'react';
import moviePosters from '../data/movie_posters';

import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {
  const [posters, setPosters] = useState(moviePosters)
  const [selectedMovie, setSelectedMovie] = useState(null)

  function updateVoteCount(id, change) {
    moviePosters.forEach(poster => {
      if (poster.id === id) {
        poster.vote_count += change
      }
    })
    setPosters([...moviePosters])
  }

  function incrementVoteDown(id) {
    updateVoteCount(id, -1)
  }

  function incrementVoteUp(id) {
    updateVoteCount(id, 1)
    }

  function showMovieDetails() {
    setSelectedMovie(movieDetails)
      console.log('selected movie', selectedMovie)
  }

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      {selectedMovie ? (
        <MovieDetails selectedMovie={selectedMovie} />
      ) : (
      <MoviesContainer 
        moviePosters={posters} 
        incrementVoteDown={incrementVoteDown} 
        incrementVoteUp={incrementVoteUp}
        showMovieDetails={showMovieDetails}
        />
      )}
    </main>
  );
}

export default App;

