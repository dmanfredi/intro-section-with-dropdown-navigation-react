import xout from './images/icon-close-menu.svg';
import todoIcon from './images/icon-todo.svg';
import calendarIcon from './images/icon-calendar.svg';
import reminderIcon from './images/icon-reminders.svg';
import planningIcon from './images/icon-planning.svg';

import Dropdown from './Dropdown';

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

export default Menu;
