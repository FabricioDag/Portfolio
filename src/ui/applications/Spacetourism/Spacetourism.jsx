import './Spacetourism.css';
import { useState } from 'react';

import { Header } from './components';
import { Home, Destinations, Crew, Technology } from './pages';

const pages = {
  Home: <Home />,
  Destinations: <Destinations />,
  Crew: <Crew />,
  Technology: <Technology/>
};

const Spacetourism = () => {
  const [openedPage, setOpenedPage] = useState('Home');
  return (
    <div className="spacetourism applicationF">
      <Header setOpenedPage={setOpenedPage} />

      {pages[openedPage]}
    </div>
  );
};

export { Spacetourism };
