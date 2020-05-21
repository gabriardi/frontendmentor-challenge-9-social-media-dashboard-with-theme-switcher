import React from 'react';

import styles from './Card.module.scss';

import ChangeDisplayer from '../ChangeDisplayer';

const Card = ({
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
      borderStyleSocialMedia = styles.CardFacebook;
      break;
    case 'instagram':
      borderStyleSocialMedia = styles.CardInstagram;
      break;
    case 'twitter':
      borderStyleSocialMedia = styles.CardTwitter;
      break;
    case 'youtube':
      borderStyleSocialMedia = styles.CardYoutube;
      break;
    default:
      break;
  }

  return (
    <div className={`${styles.Card} ${borderStyleSocialMedia}`}>
      <div className={styles.Card__Social}>
        <SocialMediaIcon />
        <span>{socialName}</span>
      </div>
      <div className={styles.Card__Number}>
        <h3>{number}</h3>
        <p>{description}</p>
      </div>

      <ChangeDisplayer changeNumber={changeNumber} />
    </div>
  );
};

export default Card;
