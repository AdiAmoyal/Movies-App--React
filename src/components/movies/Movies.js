import { Fragment, useEffect, useState } from 'react';

import MovieItem from './MovieItem';
import Card from '../UI/Card';

import classes from './Movies.module.css';

const API_KEY = 'da09fa09c9ef1f62cf52c8203e04e8a1';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + API_KEY);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
        
            const responseData = await response.json();
            const loadedMovies = [];
            for (const key in responseData.results) {
                loadedMovies.push({
                id: key,
                title: responseData.results[key].title,
                description: responseData.results[key].overview,
                rate: responseData.results[key].vote_average,
                poster: responseData.results[key].poster_path
                });
            }
            setMovies(loadedMovies);
            setIsLoading(false);
        };
    
        fetchMovies().catch(error => {
            setIsLoading(false);
            setHttpError(error.message);
        });
      }, []);
    
    const moviesList = movies.map(movie => 
        <Card>
            <MovieItem 
            id={movie.id}
            key={movie.id} 
            title={movie.title} 
            des={movie.description}
            rate={movie.rate}
            poster={movie.poster}/>
        </Card>);

    return (<Fragment>
        {/* Render top movies carusle */}
        <section className={classes.movies}>
            {!httpError && !isLoading && moviesList}
            {httpError && !isLoading && <p className={classes.message}>{httpError}</p>}
            {!httpError && isLoading && <p className={classes.message}>Loading...</p>}
        </section>
    </Fragment>);
};

export default Movies;