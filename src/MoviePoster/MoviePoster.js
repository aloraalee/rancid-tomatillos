import './MoviePoster.css';
import upvote from '../icons/upvote.png';
import downvote from '../icons/downvote.png';
import { Link } from 'react-router-dom'


function MoviePoster({ img, title, voteCount, id, incrementVoteDown, incrementVoteUp }) {

  return (
    <section className="movie-poster">
      <Link to={`/${id}`}>
        <img src={img} alt={`Poster of ${title}`} />
      </Link>
      
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