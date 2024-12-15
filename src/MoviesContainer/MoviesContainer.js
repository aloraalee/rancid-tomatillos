import MoviePoster from '../MoviePoster/MoviePoster';
import './MoviesContainer.css';

function MoviesContainer({moviePosters, incrementVoteDown, incrementVoteUp, showMovieDetails}) {

  return (
    <section className="movies-container">
      {moviePosters.map(poster => (
        <MoviePoster
          key={poster.id}
          img={poster.poster_path}
          title={poster.title}
          voteCount={poster.vote_count}
          id={poster.id}
          incrementVoteDown={incrementVoteDown}
          incrementVoteUp={incrementVoteUp}
          showMovieDetails={showMovieDetails}
      />
      ))}
    </section>
  )
  }

export default MoviesContainer;