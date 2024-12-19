import './App.css';
import { useState, useEffect } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import { Routes, Route, Link } from 'react-router-dom'
import home from '../icons/home.png';
import { useLocation } from 'react-router-dom';

function App() {
  const [posters, setPosters] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()
  const [error, setError] = useState(null)
  
useEffect(() => {
  fetch("https://rancid-tomatillos-api.onrender.com/api/v1/movies")
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch movies')
    }
    return response.json()
  })
  .then(data => {
    setPosters(data || [])
  })
  .catch(error => {
    console.error('Error fetching movies:', error)
    setError('Failed to fetch movies. Please try again later.')
  })
  }, [])

  if (error) {
    return <div>{error}</div>
  }

  function updateVoteCount(id, direction) {
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
      .catch(error => {
        console.error('Error fetching movies:', error)
        alert('Failed to fetch movies. Please try again later.')
      })
    } 

  function incrementVoteDown(id) {
    updateVoteCount(id, "down")
  }

  function incrementVoteUp(id) {
    updateVoteCount(id, "up")
    }

  const filteredPosters = Array.isArray(posters)
    ? posters.filter((poster) =>
        poster.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) : []

    return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
        {location.pathname!== '/' && (
          <Link to={'/'}>
            <button className='home-button'>
            <img className='home' src={home} alt="Home button"/>
            </button>
          </Link>
        )}
        {location.pathname==='/' && (
          <input className='search-bar'
            type="text"
            placeholder="Search for a movie"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        )}
      </header>
      <Routes>
        <Route path='/' element={<MoviesContainer posters={filteredPosters} 
          incrementVoteDown={incrementVoteDown} 
          incrementVoteUp={incrementVoteUp}/>}/>
        <Route path='/:id' element={<MovieDetails/>} />
      </Routes>
    </main>
  );
}

export default App;

