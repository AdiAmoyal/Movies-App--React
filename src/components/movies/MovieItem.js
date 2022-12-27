import classes from './MovieItem.module.css';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieItem = props => {
    return (
        <div className={classes.item}>
            <img className={classes.poster} src={IMG_URL + props.poster} alt=""></img>
            <div className={classes.details}>
                <div className={classes.title}>{props.title}</div>
                <div className={classes.rate}>{props.rate}</div>
            </div>
        </div>
    );
};

export default MovieItem;