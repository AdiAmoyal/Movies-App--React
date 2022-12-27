import classes from './MenuItem.module.css';

const MenuItem = props => {
    return (
        <div className={classes['menu-item']}>
            <p>{props.content}</p>
        </div>
    );
};

export default MenuItem;