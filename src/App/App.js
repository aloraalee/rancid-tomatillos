import './App.css';
// import searchIcon from '../icons/search.png';

// Example imports (for later):
import { useState } from 'react';
import moviePosters from '../data/movie_posters';

// import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  const [posters, setPosters] = useState(moviePosters)

  function updateVoteCount(poster, change) {
    return { ...poster, vote_count: poster.vote_count + change }
  }

  function incrementVoteDown(id) {
    setPosters(prevPosters =>
      prevPosters.map(poster => 
        poster.id ===id? updateVoteCount(poster, -1) : poster
      )
    )
    }

  function incrementVoteUp(id) {
    setPosters(prevPosters =>
      prevPosters.map(poster => 
        poster.id ===id? updateVoteCount(poster, +1) : poster
      )
    )
    }

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      <MoviesContainer moviePosters={posters} incrementVoteDown={incrementVoteDown} incrementVoteUp={incrementVoteUp}/>
    </main>
  );
}

export default App;

