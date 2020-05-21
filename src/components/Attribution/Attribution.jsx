import React from 'react';

import styles from './Attribution.module.scss';

const Attribution = () => {
  return (
    <div>
      <div className={styles.attribution}>
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://github.com/gabriardi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gabriele Ardizzone
        </a>
        .
      </div>
    </div>
  );
};

export default Attribution;
