import './MovieDetails.css';

function MovieDetails({ selectedMovie}) {
  return (
    <section className='MovieDetails'>
      <h2>{selectedMovie.title}</h2>
      <div className='genres'>
        {selectedMovie.genre_ids.join(' ')}>
      </div>
      <p>
        {selectedMovie.overview}
      </p>
    </section>
  );
}



export default MovieDetails;