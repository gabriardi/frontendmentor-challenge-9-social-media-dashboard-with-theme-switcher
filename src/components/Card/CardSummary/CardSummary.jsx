import React from 'react';

import styles from './CardSummary.module.scss';
import commonStyles from '../Card.module.scss';

import ChangeDisplayer from '../../ChangeDisplayer';

const CardSummary = ({
  socialMedia,
  SocialMediaIcon,
  socialName,
  number,
  description,
  changeNumber,
}) => {
  let borderStyleSocialMedia;

  switch (socialMedia) {
    case 'facebook':
      borderStyleSocialMedia = styles.CardSummaryFacebook;
      break;
    case 'instagram':
      borderStyleSocialMedia = styles.CardSummaryInstagram;
      break;
    case 'twitter':
      borderStyleSocialMedia = styles.CardSummaryTwitter;
      break;
    case 'youtube':
      borderStyleSocialMedia = styles.CardSummaryYoutube;
      break;
    default:
      break;
  }

  return (
    <div
      className={`${commonStyles.Card} ${styles.CardSummary} ${borderStyleSocialMedia}`}
    >
      <div className={styles.CardSummary__Social}>
        <SocialMediaIcon />
        <span>{socialName}</span>
      </div>
      <div className={styles.CardSummary__Number}>
        <h3>{number}</h3>
        <p>{description}</p>
      </div>

      <ChangeDisplayer changeNumber={changeNumber} />
    </div>
  );
};

export default CardSummary;
