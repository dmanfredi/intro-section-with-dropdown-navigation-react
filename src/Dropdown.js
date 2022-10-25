import { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import arrowDown from './images/icon-arrow-down.svg';
import arrowUp from './images/icon-arrow-up.svg';

const Dropdown = ({ title, items }) => {
  const [arrow, setArrow] = useState(arrowDown);
  const [inDropMenu, toggleDropMenu] = useState(false);

  function handleDropMenuToggle(inDropMenu) {
    toggleDropMenu(!inDropMenu);
  }

  return (
    <div className="dropdown-conatiner">
      <div className="menu-item drop-down">
        {title}
        <div className="arrow-down-container">
          <img
            src={arrow}
            alt="Open"
            className="arrow-img"
            onClick={() => {
              handleDropMenuToggle(inDropMenu);
              setArrow(arrow === arrowDown ? arrowUp : arrowDown);
            }}
          />
        </div>
      </div>
      {inDropMenu ? <DropdownMenu items={items}></DropdownMenu> : null}
    </div>
  );
};

export default Dropdown;
