import './MovieDetails.css';

function MovieDetails({ selectedMovie}) {
  return (
    <section className='movie-details'>
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