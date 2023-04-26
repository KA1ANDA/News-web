import React from 'react';
import styles from './header.module.scss';

const Header = () => {

  return (
    <div className={styles.header}>
      <div className={styles.logo}></div>
      <div className={styles.loginSearch}>
        <div className={styles.avatar}></div>
        <div className={styles.search}></div>
      </div>
    </div>
  );
}
export default Header;