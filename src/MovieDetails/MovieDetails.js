import './MovieDetails.css';

function MovieDetails({ selectedMovie}) {
  return (
    <section className='MovieDetails'>
      <p>
        {selectedMovie.title}
        {selectedMovie.genre}
        {selectedMovie.overview}
      </p>
    </section>
  );
}



export default MovieDetails;