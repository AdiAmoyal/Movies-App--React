import { useState } from 'react';

import Header from './components/layout/Header';
import Menu from './components/layout/menu/Menu';
import Movies from './components/movies/Movies';
import WatchList from './components/watch-list/WatchList';

function App() {
  const [menuIsShown, setMenuIsShown] = useState(false);
  const [watchListIsShown, setWatchListIsShown] = useState(false);

  const showMenuHandler = () => {
    setMenuIsShown(true);
  }; 

  const hideMenuHandler = () => {
    setMenuIsShown(false);
  };

  const showWatchListHandler = () => {
    setWatchListIsShown(true);
  }

  const hideWatchListHandler = () => {
    setWatchListIsShown(false);
  };

  return (
    <div>
      {watchListIsShown && <WatchList onClose={hideWatchListHandler}/>}
      <Header 
        onShowMenu={showMenuHandler} 
        onCloseMenu={hideMenuHandler}
        onShowWatchList={showWatchListHandler} />
      {menuIsShown && <Menu />}
      <main>
        <Movies />
      </main>
    </div>
  );
}

export default App;
