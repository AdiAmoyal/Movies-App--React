import WatchListIcon from '../watch-list/WatchListIcon';
import classes from './HeaderWatchListBtn.module.css';

const HeaderWatchListBtn = props => {

    return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <WatchListIcon />
        </span>
        <span>Watch List</span>
        <span className={classes.badge}>{10}</span>
    </button>
    );
};

export default HeaderWatchListBtn;