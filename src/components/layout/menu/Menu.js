import classes from './Menu.module.css';
import MenuItem from './MenuItem';

const Menu = () => {
    return (
        <div className={classes.menu}>
            <MenuItem content={'Action'} />
            <MenuItem content={'Kids'} />
            <MenuItem content={'Comedy'} />
            <MenuItem content={'Drama'} />
        </div>
    );
};

export default Menu;