import React from 'react';
import Dropdown from './Dropdown';
import todoIcon from './images/icon-todo.svg';
import calendarIcon from './images/icon-calendar.svg';
import reminderIcon from './images/icon-reminders.svg';
import planningIcon from './images/icon-planning.svg';

const MenuInteracterbles = () => {
  return (
    <div className="interacterbles-container">
      <div className="left-interacterbles">
        <Dropdown
          title="Features"
          items={[
            {
              icon: todoIcon,
              title: 'Todo List',
              link: 'https://dylanmanfredi.xyz',
            },
            {
              icon: calendarIcon,
              title: 'Calendar',
              link: 'https://dylanmanfredi.xyz',
            },
            {
              icon: reminderIcon,
              title: 'Reminders',
              link: 'https://dylanmanfredi.xyz',
            },
            {
              icon: planningIcon,
              title: 'Planning',
              link: 'https://dylanmanfredi.xyz',
            },
          ]}
        />
        <Dropdown
          title="Company"
          items={[
            {
              icon: '',
              title: 'History',
              link: 'https://dylanmanfredi.xyz',
            },
            {
              icon: '',
              title: 'Our Team',
              link: 'https://dylanmanfredi.xyz',
            },
            {
              icon: '',
              title: 'Blog',
              link: 'https://dylanmanfredi.xyz',
            },
          ]}
        />
        <a href="https://dylanmanfredi.xyz" className="careers menu-item">
          Careers
        </a>
        <a href="https://dylanmanfredi.xyz" className="about menu-item">
          About
        </a>
      </div>
      <div className="right-interacterbles">
        <a href="https://dylanmanfredi.xyz" className="login menu-item">
          Login
        </a>
        <div className="register-button-container">
          <button className="register-button">Register</button>
        </div>
      </div>
    </div>
  );
};

export default MenuInteracterbles;
