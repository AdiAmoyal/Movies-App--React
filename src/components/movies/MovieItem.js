import classes from './MovieItem.module.css';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieItem = props => {
    const title = props.title.length < 26 ? props.title : `${props.title.substring(0, 26)}...`;

    return (
        <div className={classes.item}>
            <img className={classes.poster} src={IMG_URL + props.poster} alt=""></img>
            <div className={classes.details}>
                <div className={classes.title}>{title}</div>
                <div className={classes.rate}>{props.rate}</div>
                <div className={classes.description}>
                    <h3>{props.title}</h3>
                    <p>{props.des}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieItem;