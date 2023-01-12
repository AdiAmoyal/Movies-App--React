import classes from './SearchBar.module.css';
import SearchIcon from './SearchIcon';
import ClearIcon from './ClearIcon';

const SearchBar = props => {

    return (
            <div className={classes.search}>
                <input className={classes.input} 
                    type='text'
                    placeholder='Enter a movie name..'
                    value={props.value}
                    onChange={(event) => props.setSearchValue(event.target.value)}>
                </input>
                <span className={classes.icon}>
                    {props.value === '' ? <SearchIcon /> : <button onClick={(event) => props.setSearchValue('')}><ClearIcon /></button>}
                </span>
            </div>
    );
};

export default SearchBar;