import React from 'react';

import ThemeSwitch from './ThemeSwitch';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__Text}>
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
        <hr />
      </div>
      <ThemeSwitch />
    </header>
  );
};

export default Header;
