import classes from './MovieItem.module.css';
import WatchListIcon from '../watch-list/WatchListIcon';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieItem = props => {
    const title = props.title.length < 26 ? props.title : `${props.title.substring(0, 26)}...`;

    // const watchListBtnClickedHandler = event => {
    //     event.preventDefault();
    //     console.log(props.id);
    // }

    return (
        <div className={classes.item}>
            <button 
                className={classes.watchListBtn}
                onClick={() => {props.onWatchListBtn(props.id)}}>
                <WatchListIcon className={classes.icon} />
            </button>
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