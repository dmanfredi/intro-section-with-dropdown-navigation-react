import xout from './images/icon-close-menu.svg';


import MenuInteracterbles from './MenuInteracterbles';

const Menu = ({ inMenu, handleMenuToggle }) => {
  return (
    <div className="menu-container">
      <div className="menu">
        <div className="x-bar">
          <div className="x-out-container">
            <img
              src={xout}
              alt="X"
              className="x-out-img"
              onClick={() => handleMenuToggle(inMenu)}
            />
          </div>
        </div>
        <MenuInteracterbles> </MenuInteracterbles>
      </div>
    </div>
  );
};

export default Menu;
