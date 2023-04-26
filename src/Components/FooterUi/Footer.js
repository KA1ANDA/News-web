import React from 'react';
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerNavigation}>
        <div>
          <div className={styles.logo}></div>
          <p>A non-profit news aggregator helping you</p>
          <p>break out of your filter bubble</p>
          <div>SHARE <span>#</span>  FOLLOW US <span>###</span></div>
        </div>
        <div className={styles.navigation}>
          <ul>
            <li>PRIVACY POLICY</li>
            <li>FAQ</li>
            <li>FEEDBACK</li>
            <li>NEWSLETTER ARCHIVE</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <p>&copy;2023 Improve The News Foundation, all Rights Reserved</p>
        <span>Improve The News Podcast</span>

        <div className={styles.listenNetworks}>
          <div className={styles.apple}>
            <div></div>
            <p>Apple Podcasts</p>
          </div>

          <div className={styles.spotify}>
            <div></div>
            <p>Spotify</p>
          </div>

          <div className={styles.amazon}>
            <div></div>
            <p>Amazon Music</p>
          </div>

          <div  className={styles.youtube}>
            <div></div>
            <p>Youtube</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
