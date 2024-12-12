import './App.css';
import searchIcon from '../icons/search.png';

// Example imports (for later):
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
// import movieDetails from '../data/movie_details';
// import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      <section>
        {moviePosters.map((poster) =>
        <section key={poster.id} className='movie-poster'>
          <div className='poster-container'>
            <img className='poster' src={poster.poster_path} alt={`Poster of ${poster.title}`}></img>
            <div className='vote-banner'>
              <p>{poster.vote_count}</p>
            </div>
          </div>
          
        </section>
        )}
      </section> 
    </main>
  );
}

export default App;
