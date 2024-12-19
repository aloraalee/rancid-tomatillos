import './MovieDetails.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'

function MovieDetails() {
  const movieId = useParams().id
  const [movie, setMovie] = useState(null) 

  useEffect(() => {
    fetch(`https://rancid-tomatillos-api.onrender.com/api/v1/movies/${movieId}`)
    .then(response => response.json())
    .then(data => {
      setMovie(data)
    })
    .catch(error => {
      console.error('Error fetching movie details:', error)
      setMovie({error: true})
    })
    }, [movieId])

  if (!movie) {
    return <p>Loading...</p>
  }

  if(movie.error) {
    return <h2>404 - Page or Movie Not Found</h2>
  }

  return (
    <section className='movie-details' >
      <article> 
        <img src={movie.backdrop_path} alt={`Movie details for ${movie.title}`}/>
        <h2>{movie.title}</h2>
        <div className='genre'>
          {movie.genre_ids.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
        <p>{movie.overview}</p>
      </article>
    </section>
  );
}



export default MovieDetails;