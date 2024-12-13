import MoviePoster from '../MoviePoster/MoviePoster';
import './MoviesContainer.css';

function MoviesContainer({moviePosters}) {
  return (
    <section className="movies-container">
      {moviePosters.map(poster => (
        <MoviePoster
          key={poster.id}
          img={poster.poster_path}
          title={poster.title}
          voteCount={poster.vote_count}
      />
      ))}
    </section>
  )
  }

export default MoviesContainer;