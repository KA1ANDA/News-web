import React from 'react';
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerNavigation}>
        <div>
          <span>ICON</span>
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
        <p>Improve The News Podcast</p>

        <div>
          <span></span>
          <p></p>
        </div>

        <div>
          <span></span>
          <p></p>
        </div>

        <div>
          <span></span>
          <p></p>
        </div>

        <div>
          <span></span>
          <p></p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
