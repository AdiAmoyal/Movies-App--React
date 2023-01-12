import { useState } from 'react';

import Header from './components/layout/Header';
import Menu from './components/layout/menu/Menu';
import Movies from './components/movies/Movies';

function App() {
  const [menuIsShown, setMenuIsShown] = useState(false);

  const showMenuHandler = () => {
    console.log('Menu');
    setMenuIsShown(true);
  }; 

  const hideMenuHandler = () => {
    setMenuIsShown(false);
  };

  return (
    <div>
      <Header 
        onShowMenu={showMenuHandler} 
        onCloseMenu={hideMenuHandler} />
      {menuIsShown && <Menu />}
      <main>
        <Movies />
      </main>
    </div>
  );
}

export default App;
