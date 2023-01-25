import React from 'react';

import Modal from '../UI/Modal';
import classes from './WatchList.module.css';

const WatchList = props => {

  const WatchListModalContent = (
    <React.Fragment>
      <div className={classes.movies}>
        <span>Movies</span>
      </div>
      <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
    </div>
    </React.Fragment>
  );

  return <Modal onClose={props.onClose}>
      {WatchListModalContent}
  </Modal>
};

export default WatchList;