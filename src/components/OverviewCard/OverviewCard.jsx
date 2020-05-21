import React from 'react';

import styles from './OverviewCard.module.scss';

import ChangeDisplayer from '../ChangeDisplayer';

const OverviewCard = ({
  description,
  SocialMediaIcon,
  number,
  changeNumber,
}) => {
  return (
    <div className={styles.OverviewCard}>
      <div className={styles.OverviewCard__description}>{description}</div>
      <div className={styles.OverviewCard__icon}>
        <SocialMediaIcon />
      </div>
      <div className={styles.OverviewCard__number}>{number}</div>
      <div className={styles.OverviewCard__change}>
        <ChangeDisplayer changeNumber={changeNumber} />
      </div>
    </div>
  );
};

export default OverviewCard;
