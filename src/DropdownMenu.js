import React from 'react';
import DropdownItem from './DropdownItem';

const DropdownMenu = ({ items }) => {
  console.log(items);
  return (
    <>
      <div className="dropdownmenu">
        {items.map((config, i) => (
          <DropdownItem
            key={i}
            title={config.title}
            icon={config.icon}
            link={config.link}
          ></DropdownItem>
        ))}
      </div>
    </>
  );
};

export default DropdownMenu;
