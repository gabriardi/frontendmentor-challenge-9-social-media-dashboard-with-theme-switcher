import React from 'react';

import styles from './DashboardOverview.module.scss';
import commonStyles from '../DashboardContainer.module.scss';

import CardOverview from '../../Card/CardOverview';
import FacebookIcon from '../../SocialIcons/FacebookIcon';
import InstagramIcon from '../../SocialIcons/InstagramIcon';
import TwitterIcon from '../../SocialIcons/TwitterIcon';
import YoutubeIcon from '../../SocialIcons/YoutubeIcon';

const DashboardOverview = () => {
  return (
    <div
      className={`${styles.DashboardOverview} ${commonStyles.DashboardContainer}`}
    >
      <h2 className={styles.DashboardOverview__title}>Overview - Today</h2>
      <CardOverview
        description="Page Views"
        SocialMediaIcon={FacebookIcon}
        number="87"
        changeNumber={3}
      />
      <CardOverview
        description="Likes"
        SocialMediaIcon={FacebookIcon}
        number="52"
        changeNumber={-2}
      />
      <CardOverview
        description="Likes"
        SocialMediaIcon={InstagramIcon}
        number="5462"
        changeNumber={2257}
      />
      <CardOverview
        description="Profile Views"
        SocialMediaIcon={InstagramIcon}
        number="87"
        changeNumber={1375}
      />
      <CardOverview
        description="Retweets"
        SocialMediaIcon={TwitterIcon}
        number="117"
        changeNumber={303}
      />
      <CardOverview
        description="Likes"
        SocialMediaIcon={TwitterIcon}
        number="507"
        changeNumber={553}
      />
      <CardOverview
        description="Likes"
        SocialMediaIcon={YoutubeIcon}
        number="107"
        changeNumber={-19}
      />
      <CardOverview
        description="Total Views"
        SocialMediaIcon={YoutubeIcon}
        number="1407"
        changeNumber={-12}
      />
    </div>
  );
};

export default DashboardOverview;
