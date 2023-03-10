import MenuIcon from './menu/MenuIcon';
import classes from './HeaderCategoriesBtn.module.css';

const HeaderCategoriesBtn = props => {

    return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <MenuIcon />
        </span>
    </button>
    );
};

export default HeaderCategoriesBtn;