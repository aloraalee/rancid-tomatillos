import './MovieDetails.css';
import home from '../icons/home.png';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'

function MovieDetails({ }) {
  const movieId = useParams().id
  const [movie, setMovie] = useState(null) 

  useEffect(() => {
    fetch(`https://rancid-tomatillos-api.onrender.com/api/v1/movies/${movieId}`)
    .then(response => response.json())
    .then(data => {
      setMovie(data)
    })
    .catch(error => console.log(error))
  }, [movieId])

  if (!movie) {
    return <p>Loading...</p>
  }

  return (
    <section className='movie-details' >
      <img src={movie.backdrop_path} alt={`Movie details for ${movie.title}`}/>
      <h2>{movie.title}</h2>
      <div className='genre'>
        {movie.genre_ids.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
      <p>{movie.overview}</p>
    </section>
  );
}



export default MovieDetails;