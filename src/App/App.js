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
  setSelectedMovie(null);
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

  function updateVoteCount(id, direction) {
    console.log(id)
    fetch(`https://rancid-tomatillos-api.onrender.com/api/v1/movies/${id}`, {
      method: "PATCH", 
      body: JSON.stringify({vote_direction: direction}),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then((updatedMovie) => {
        setPosters((prevPosters) => 
          prevPosters.map((poster) =>
            poster.id === updatedMovie.id
              ? { ...poster, vote_count: updatedMovie.vote_count }
              : poster
          )
        )
      })
      .catch((error) => console.log(error))
    } 

  function incrementVoteDown(id) {
    updateVoteCount(id, "down")
  }

  function incrementVoteUp(id) {
    updateVoteCount(id, "up")
    }

  function showMovieDetails(id) {
    fetch(`https://rancid-tomatillos-api.onrender.com/api/v1/movies/${id}`)
    .then(response => response.json())
    .then(data => {
      setSelectedMovie(data)
    })
    .catch(error => console.log(error))
  }

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      {selectedMovie ? (
        <MovieDetails 
        selectedMovie={selectedMovie} 
        displayPosters={displayPosters} 
        />
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

