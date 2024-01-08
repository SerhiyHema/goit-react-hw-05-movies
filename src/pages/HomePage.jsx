import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoveisList/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMoviesTrend } from 'services/getMovies';

const HomePage = () => {
  const [resultTrend, setResultTrend] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const getTrend = async () => {
      try {
        const data = await getMoviesTrend();
        const { results } = data;
        setResultTrend(results);
      } catch (error) {
        console.log('Error:', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getTrend();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <MoviesList movies={resultTrend} location={location} />
    </>
  );
};

export default HomePage;
