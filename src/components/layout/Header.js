import { Fragment } from "react";

import classes from './Header.module.css';
import HeaderCategoriesBtn from "./HeaderCategoriesBtn";
import HeaderWatchListBtn from "./HeaderWatchListBtn";

const Header = props => {

    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Movies App</h1>
                <div className={classes.actions}>
                    <HeaderWatchListBtn />
                    <HeaderCategoriesBtn onClick={props.onShowMenu} />
                </div>
            </header>
        </Fragment>
    );
};

export default Header;