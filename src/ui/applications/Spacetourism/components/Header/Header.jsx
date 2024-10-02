import style from './Header.module.css';

import { useState } from 'react';

import hamburguerIcon from './icon-hamburger.svg';
import closeIcon from './icon-close.svg';
import logo from './logo.svg';

const Header = ({ setOpenedPage }) => {
  const [navActive, setNavActive] = useState(false);

  const handleClickNav = () => {
    setNavActive(!navActive);
  };

  const handleClick = (value) => {
    setOpenedPage(value);
  };
  return (
    <div className={style.Header}>
      <img className={style.logo} src={logo} alt="" />
      <button className={style.hamburguerBtn} onClick={handleClickNav}>
        <img src={navActive ? closeIcon : hamburguerIcon} alt="" />
      </button>

      <nav className={`${style.nav} ${navActive ? style.active : ''}`}>
        <ul>
          <li onClick={() => handleClick('Home')}>
            <span>00</span> Home
          </li>
          <li onClick={() => handleClick('Destinations')}>
            <span>01</span> Destinations
          </li>
          <li onClick={() => handleClick('Crew')}>
            <span>02</span> Crew
          </li>
          <li onClick={() => handleClick('Technology')}>
            <span>03</span> Technology
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { Header };
