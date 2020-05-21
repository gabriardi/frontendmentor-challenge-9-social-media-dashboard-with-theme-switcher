import React from 'react';

import styles from './CardOverview.module.scss';
import commonStyles from '../Card.module.scss';

import ChangeDisplayer from '../../ChangeDisplayer';

const CardOverview = ({
  description,
  SocialMediaIcon,
  number,
  changeNumber,
}) => {
  return (
    <div className={`${commonStyles.Card} ${styles.CardOverview}`}>
      <div className={styles.CardOverview__description}>{description}</div>
      <div className={styles.CardOverview__icon}>
        <SocialMediaIcon />
      </div>
      <div className={styles.CardOverview__number}>{number}</div>
      <div className={styles.CardOverview__change}>
        <ChangeDisplayer changeNumber={changeNumber} />
      </div>
    </div>
  );
};

export default CardOverview;
