import './MoviePoster.css';
import upvote from '../icons/upvote.png';
import downvote from '../icons/downvote.png';

function MoviePoster({ img, title, voteCount, id, incrementVoteDown, incrementVoteUp, showMovieDetails }) {
  return (
    <section className="movie-poster" onClick={() => showMovieDetails()}>
      <img src={img} alt={`Poster of ${title}`}/>
      <div className='vote-banner'>
        <button className='vote-button' onClick={() => incrementVoteUp(id)}>
          <img className='upvote' src={upvote} alt="Up vote button" />
        </button>
        <p>{voteCount}</p>
        <button className='vote-button' onClick={() => incrementVoteDown(id)}>
          <img className='downvote' src={downvote} alt="Down vote button"/>
        </button>
      </div>
    </section>
        )}



        
export default MoviePoster;