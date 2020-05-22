import React, { useState, useEffect } from 'react';

import { lightTheme, darkTheme } from '../../../Themes/themes';

import styles from './ThemeSwitch.module.scss';

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(true);

  const handleCheckbox = () => {
    setIsDark((prev) => !prev);
  };

  const setTheme = (theme) => {
    Object.keys(theme).map((key) => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    });
  };

  useEffect(() => {
    if (isDark) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }, [isDark]);

  return (
    <div className={styles.ThemeSwitch}>
      <label className={styles.switch__label} htmlFor="theme-switch-toggle">
        Dark Mode
      </label>
      <label htmlFor="theme-switch-toggle" className={styles.switch}>
        <input
          onChange={handleCheckbox}
          id="theme-switch-toggle"
          type="checkbox"
        />
        <span className={`${styles.slider} ${styles.round}`} />
      </label>
    </div>
  );
};

export default ThemeSwitch;
