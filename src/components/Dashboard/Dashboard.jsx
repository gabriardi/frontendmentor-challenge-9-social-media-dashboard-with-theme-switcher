import React from 'react';

import FacebookIcon from '../SocialIcons/FacebookIcon';
import InstagramIcon from '../SocialIcons/InstagramIcon';
import TwitterIcon from '../SocialIcons/TwitterIcon';
import YoutubeIcon from '../SocialIcons/YoutubeIcon';

import Card from '../Card';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={`${styles.Dashboard} dashboardContainer`}>
      <Card
        socialMedia="facebook"
        SocialMediaIcon={FacebookIcon}
        socialName="@nathanf"
        number="1987"
        description="followers"
        changeNumber={12}
      />
      <Card
        socialMedia="twitter"
        SocialMediaIcon={TwitterIcon}
        socialName="@nathanf"
        number="1044"
        description="followers"
        changeNumber={99}
      />
      <Card
        socialMedia="instagram"
        SocialMediaIcon={InstagramIcon}
        socialName="@realnathanf"
        number="11k"
        description="followers"
        changeNumber={1099}
      />
      <Card
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

export default Dashboard;
