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
  const [displayHomeBtn, setHomeBtn] = useState('hide-home-btn')
  const [displaySearchBar, setSearchBar] = useState('show-search-bar')
  const location = useLocation()

function changeHomeBtn() {
  setHomeBtn('show-home-btn')
  }

useEffect(() => {
  if (location.pathname === '/') {
    setHomeBtn('hide-home-btn');
    setSearchBar('show-search-bar')
  } else {
    setSearchBar('hide-search-bar')
  } 
}, [location]);

function displayPosters() {
  fetch("https://rancid-tomatillos-api.onrender.com/api/v1/movies")
  .then(response => response.json())
  .then(data => {
    setPosters(data || [])
  })
  .catch(error => {
    console.error('Error fetching movies:', error)
    setPosters([])
    alert('Failed to fetch movies. Please try again later.')
  })
}

useEffect(() => {
  displayPosters()
  }, [])

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
        setPosters([])
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
        <input className={displaySearchBar}
          type="text"
          placeholder="Search for a movie"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      <Link to={'/'}>
        <button className={displayHomeBtn}>
        <img className='home' src={home} alt="Home button"/>
        </button>
      </Link>
      </header>
      <Routes>
        <Route path='/' element={<MoviesContainer posters={filteredPosters} 
          incrementVoteDown={incrementVoteDown} 
          incrementVoteUp={incrementVoteUp}
          changeHomeBtn={changeHomeBtn}/>}/>
        <Route path='/:id' element={<MovieDetails
          displayPosters={displayPosters} />}/>
      </Routes>
    </main>
  );
}

export default App;

