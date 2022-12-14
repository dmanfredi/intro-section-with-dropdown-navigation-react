import './App.css';
import menuSvg from './images/icon-menu.svg';
import heroMobile from './images/image-hero-mobile.png';
import heroDesktop from './images/image-hero-desktop.png';

import audiophile from './images/client-audiophile.svg';
import databiz from './images/client-databiz.svg';
import maker from './images/client-maker.svg';
import meet from './images/client-meet.svg';

import Menu from './Menu';

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuInteracterbles from './MenuInteracterbles';

function App() {
  const [inMenu, toggleMenu] = useState(false);

  function handleMenuToggle(inMenu) {
    toggleMenu(!inMenu);
  }
  const notMobile = useMediaQuery({ query: '(min-width: 769px)' });

  return (
    <div className="App">
      <div className="banner">
        <div className="snap-logo"> snap </div>
        {notMobile ? (
          <MenuInteracterbles></MenuInteracterbles>
        ) : (
          <div className="dropdown-container">
            <img
              src={menuSvg}
              alt="drop"
              className="dropdown-img"
              onClick={(e) => handleMenuToggle(inMenu, e)}
            />
          </div>
        )}
        <>
          {inMenu ? (
            <Menu inMenu={inMenu} handleMenuToggle={handleMenuToggle} />
          ) : null}
        </>
      </div>
      <div className="main-body">
        <div className="hero-image-container">
          <img
            src={notMobile ? heroDesktop : heroMobile}
            alt="man on laptop"
            className="hero-image"
          />
        </div>
        <div className="content">
          <header className="slogan">Make remote work</header>
          <div className="description">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </div>
          <button className="learn-more-button">Learn more</button>
          <div className="clients">
            <div className="client-container">
              <img src={databiz} alt="drop" className="client" />
            </div>
            <div className="client-container">
              <img src={audiophile} alt="drop" className="client" />
            </div>
            <div className="client-container">
              <img src={meet} alt="drop" className="client" />
            </div>
            <div className="client-container">
              <img src={maker} alt="drop" className="client" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
