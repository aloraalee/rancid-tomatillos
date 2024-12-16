import './App.css';
// import searchIcon from '../icons/search.png';

// Example imports (for later):
import { useState, useEffect } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {
  const [posters, setPosters] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)

function displayPosters() {
  fetch("https://rancid-tomatillos-api.onrender.com/api/v1/movies")
  .then(response => response.json())
  .then(data => {
    setPosters(data)
})
  .catch(error => console.log(error))
}

useEffect(() => {
  displayPosters()
  }, [])

  function updateVoteCount(id, change) {
    posters.forEach(poster => {
      if (poster.id === id) {
        poster.vote_count += change
      }
    })
    setPosters([...posters])
  }

  function incrementVoteDown(id) {
    updateVoteCount(id, -1)
  }

  function incrementVoteUp(id) {
    updateVoteCount(id, 1)
    }

  function showMovieDetails(id) {
    fetch(`https://rancid-tomatillos-api.onrender.com/api/v1/movies/${id}`)
    .then(response => response.json())
    .then(data => {
      setSelectedMovie(data)
    })
    .catch(error => console.log(error))
  }

  // useEffect(() => {
  //   showMovieDetails()
  //   }, [])

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      {selectedMovie ? (
        <MovieDetails selectedMovie={selectedMovie} />
      ) : (
      <MoviesContainer 
        posters={posters} 
        incrementVoteDown={incrementVoteDown} 
        incrementVoteUp={incrementVoteUp}
        showMovieDetails={showMovieDetails}
        />
      )}
    </main>
  );
}

export default App;

