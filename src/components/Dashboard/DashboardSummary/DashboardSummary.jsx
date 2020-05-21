import React from 'react';

import FacebookIcon from '../../SocialIcons/FacebookIcon';
import InstagramIcon from '../../SocialIcons/InstagramIcon';
import TwitterIcon from '../../SocialIcons/TwitterIcon';
import YoutubeIcon from '../../SocialIcons/YoutubeIcon';

import CardSummary from '../../Card/CardSummary';

import styles from './DashboardSummary.module.scss';
import commonStyles from '../DashboardContainer.module.scss';

const DashboardSummary = () => {
  return (
    <div
      className={`${styles.DashboardSummary} ${commonStyles.DashboardContainer}`}
    >
      <CardSummary
        socialMedia="facebook"
        SocialMediaIcon={FacebookIcon}
        socialName="@nathanf"
        number="1987"
        description="followers"
        changeNumber={12}
      />
      <CardSummary
        socialMedia="twitter"
        SocialMediaIcon={TwitterIcon}
        socialName="@nathanf"
        number="1044"
        description="followers"
        changeNumber={99}
      />
      <CardSummary
        socialMedia="instagram"
        SocialMediaIcon={InstagramIcon}
        socialName="@realnathanf"
        number="11k"
        description="followers"
        changeNumber={1099}
      />
      <CardSummary
        socialMedia="youtube"
        SocialMediaIcon={YoutubeIcon}
        socialName="Nathan F."
        number="8239"
        description="subscribers"
        changeNumber={-144}
      />
    </div>
  );
};

export default DashboardSummary;
