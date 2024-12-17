import './MovieDetails.css';
import home from '../icons/home.png';

function MovieDetails({ displayPosters, selectedMovie}) {
  return (
    <section className='movie-details'>
       {/* <button className='home-btn' onClick={() => displayPosters()}>
       <img className='home' src={home} alt="Home button"/>
       </button> */}
      <img src={selectedMovie.backdrop_path} alt={`Movie details for ${selectedMovie.title}`}/>
      <h2>{selectedMovie.title}</h2>
      <div className='genre'>
        {selectedMovie.genre_ids.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
      <p>{selectedMovie.overview}</p>
    </section>
  );
}



export default MovieDetails;