import { Fragment, useEffect, useState } from 'react';

import MovieItem from './MovieItem';
import Card from '../UI/Card';
import SearchBar from '../movies/search/SearchBar';

import classes from './Movies.module.css';

const API_KEY = 'da09fa09c9ef1f62cf52c8203e04e8a1';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=';
        const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=`;

        const fetchMovies = async () => {
            console.log(searchValue);
            const url = searchValue === '' ? POPULAR_MOVIES_URL : SEARCH_URL;
            const response = await fetch(url + API_KEY);
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
      }, [searchValue]);

    const addToWatchListHandler = index => {
        console.log(movies[index]);
    }
    
    const moviesList = movies.map(movie => 
        <Card>
            <MovieItem 
            id={movie.id}
            key={movie.id} 
            title={movie.title} 
            des={movie.description}
            rate={movie.rate}
            poster={movie.poster}
            onWatchListBtn={addToWatchListHandler}/>
        </Card>);

    return (<Fragment>
        <div className={classes.search}>
            <p>{searchValue === '' ? 'The most popular movies' : `Results of '${searchValue}'`}</p>
            <SearchBar value={searchValue} setSearchValue={setSearchValue}></SearchBar>
        </div>
        <section className={classes.movies}>
            {!httpError && !isLoading && moviesList.length > 0 && moviesList}
            {!httpError && !isLoading && moviesList.length === 0 && <p className={classes.message}>No results..</p>}
            {httpError && !isLoading && <p className={classes.message}>{httpError}</p>}
            {!httpError && isLoading && <p className={classes.message}>Loading...</p>}
        </section>
    </Fragment>);
};

export default Movies;