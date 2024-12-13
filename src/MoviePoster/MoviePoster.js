import './MoviePoster.css';
import upvote from '../icons/upvote.png';
import downvote from '../icons/downvote.png';

function MoviePoster({ img, title, voteCount }) {
  return (
    <section className="movie-poster">
        <img src={img} alt={`Poster of ${title}`}/>
            <div className='vote-banner'>
              <button className='vote-button'>
                <img className='upvote' src={upvote} alt="Up vote button"/>
              </button>
              <p>{voteCount}</p>
              <button className='vote-button'>
                <img className='downvote' src={downvote} alt="Down vote button"/>
              </button>
            </div>
        </section>
        )}

export default MoviePoster;