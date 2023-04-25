import React from 'react';
import styles from './navigation.module.scss'

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div>
        HEADLINES
      </div>
      <div>
        WORLD
      </div>
      <div>
        POLITICS
      </div>
      <div>
        HEALTH
      </div>
      <div>
        CRIME & JUSTICE 
      </div>
      <div className={styles.active}>
        SIENCE & TECHNOLOGY
      </div>
      <div>
        SPORTS
      </div>
      <div>
        MONEY
      </div>
      <div>
        CULTURE
      </div>
      <div>
        WEATHER
      </div>
      <div>
        ENTERTAINMENT
      </div>
      <div>
        ENVIRONMENT
      </div>
    </div>
  );
}
export default Navigation;
