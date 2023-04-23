import React from 'react';
import TeslaNews from './../TeslanewsUI/TeslaNews';
import styles from './app.module.scss';
import Navigation from '../NavUI/Navigation';
import Sidebar from '../SidebarUi/Sidebar';
import Status from '../StatusUI/Status';





const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.navigation}>
        <Navigation />
      </div>
      <div className={styles.sidebar}>
        <Sidebar/>
      </div>
      <div className={styles.status}>
        <Status />
      </div>
      <div className={styles.news}>
        <TeslaNews />
      </div>
    </div>
  );
}
export default App;
