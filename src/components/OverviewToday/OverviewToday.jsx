import React from 'react';

import styles from './OverviewToday.module.scss';

import OverviewCard from '../OverviewCard';
import FacebookIcon from '../SocialIcons/FacebookIcon';
import InstagramIcon from '../SocialIcons/InstagramIcon';
import TwitterIcon from '../SocialIcons/TwitterIcon';
import YoutubeIcon from '../SocialIcons/YoutubeIcon';

const OverviewToday = () => {
  return (
    <div className={`${styles.OverviewToday} dashboardContainer`}>
      <h2 className={styles.OverviewToday__title}>Overview - Today</h2>
      <OverviewCard
        description="Page Views"
        SocialMediaIcon={FacebookIcon}
        number="87"
        changeNumber={3}
      />
      <OverviewCard
        description="Likes"
        SocialMediaIcon={FacebookIcon}
        number="52"
        changeNumber={-2}
      />
      <OverviewCard
        description="Likes"
        SocialMediaIcon={InstagramIcon}
        number="5462"
        changeNumber={2257}
      />
      <OverviewCard
        description="Profile Views"
        SocialMediaIcon={InstagramIcon}
        number="87"
        changeNumber={1375}
      />
      <OverviewCard
        description="Retweets"
        SocialMediaIcon={TwitterIcon}
        number="117"
        changeNumber={303}
      />
      <OverviewCard
        description="Likes"
        SocialMediaIcon={TwitterIcon}
        number="507"
        changeNumber={553}
      />
      <OverviewCard
        description="Likes"
        SocialMediaIcon={YoutubeIcon}
        number="107"
        changeNumber={-19}
      />
      <OverviewCard
        description="Total Views"
        SocialMediaIcon={YoutubeIcon}
        number="1407"
        changeNumber={-12}
      />
    </div>
  );
};

export default OverviewToday;
