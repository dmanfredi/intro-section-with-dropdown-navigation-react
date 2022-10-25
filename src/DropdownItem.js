import React from 'react';
// import xout from './images/icon-close-menu.svg';

const DropdownItem = ({ title, icon, link }) => {
  return (
    <>
      <div className="dropdownitem-container">
        {icon ? (
          <div className="icon-container">
            <img className="icon-img" src={icon} alt="Icon" />
          </div>
        ) : null}
        <a className="dropdown-title" href={link}>
          {title}
        </a>
      </div>
    </>
  );
};

export default DropdownItem;
