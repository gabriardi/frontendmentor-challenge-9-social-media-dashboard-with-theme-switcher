import React from 'react';

import styles from './ChangeDisplayer.module.scss';

import ArrowDownIcon from '../ArrowDownIcon';
import ArrowUpIcon from '../ArrowUpIcon';

const ChangeDisplayer = ({ changeNumber }) => {
  return (
    <>
      {changeNumber > 0 ? (
        <div className={styles.change}>
          <ArrowUpIcon />
          <span className={styles.changeUp}>{changeNumber} Today</span>
        </div>
      ) : (
        <div className={styles.change}>
          <ArrowDownIcon />
          <span className={styles.changeDown}>{changeNumber} Today</span>
        </div>
      )}
    </>
  );
};

export default ChangeDisplayer;
