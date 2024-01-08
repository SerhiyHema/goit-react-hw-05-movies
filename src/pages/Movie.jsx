import Loader from 'components/Loader/Loader';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieId } from 'services/getMovies';

const defaultPhoto =
  'https://www.reelviews.net/resources/img/default_poster.jpg';

const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);
    const getMovie = async id => {
      try {
        const data = await getMovieId(id);
        setMovie(data);
      } catch (error) {
        console.log('Error:', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie(movieId);
  }, [movieId]);

  const {
    original_title,
    poster_path,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  const resultPercentages = Math.round(vote_average * 10);

  return (
    <>
      {isLoading && <Loader />}
      {movie.original_title !== undefined && (
        <section className="movie-section">
          <div className="movie-section__box-img">
            <Link to={backLinkHref}> 🠐 Go back</Link>
            {poster_path !== undefined && (
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w342/${poster_path}`
                    : defaultPhoto
                }
                alt={original_title}
                width="350"
              />
            )}
          </div>
          <div className="movie-section__box-description">
            <div>
              <h2>{original_title}</h2> <h2>{release_date}</h2>
            </div>
            <span>Use score: {resultPercentages}%</span>
            <h3>Overview</h3>
            <span>{overview}</span>
            <h3>Genres</h3>
            {genres.length !== 0 ? (
              <span>
                {' '}
                {genres
                  .map(element => {
                    return element.name;
                  })
                  .join(' ')}
              </span>
            ) : (
              <p>No information available</p>
            )}
          </div>
          <div className="movie-section__box-info">
            <ul className="movie-section__list">
              <li>
                <Link
                  to={`/movies/${movieId}/cast`}
                  state={{ from: backLinkHref }}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to={`/movies/${movieId}/reviews`}
                  state={{ from: backLinkHref }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading ...</div>}>
            <Outlet />
          </Suspense>
        </section>
      )}
    </>
  );
};

export default Movie;
