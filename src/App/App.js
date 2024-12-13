import './App.css';
// import searchIcon from '../icons/search.png';

// Example imports (for later):
// import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import upvote from '../icons/upvote.png';
import downvote from '../icons/downvote.png'
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
              <button className='vote-button'>
                <img src={upvote} alt="Up vote button"/>
              </button>
              <p>{poster.vote_count}</p>
              <button className='vote-button'>
                <img src={downvote} alt="Down vote button"/>
              </button>
            </div>
          </div>
          
        </section>
        )}
      </section> 
    </main>
  );
}

export default App;
