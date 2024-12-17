import MoviePoster from '../MoviePoster/MoviePoster';
import './MoviesContainer.css';

function MoviesContainer({posters, incrementVoteDown, incrementVoteUp }) {

  return (
    <section className="movies-container">
      {posters.map(poster => (
          <MoviePoster
            key={poster.id}
            img={poster.poster_path}
            title={poster.title}
            voteCount={poster.vote_count}
            id={poster.id}
            incrementVoteDown={incrementVoteDown}
            incrementVoteUp={incrementVoteUp}/>
      ))}
    </section>
  )
  }

export default MoviesContainer;