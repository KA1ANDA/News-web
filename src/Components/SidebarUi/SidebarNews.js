import React from 'react';
import styles from './sidebarNews.module.scss';
import {FiTrendingUp} from 'react-icons/fi'


const SidebarNews = ({image,title,publishedAt}) => {
  return (
      <div className={styles.block}>
        <div className={styles.imgdiv}>
        <img src={image} />
        </div>
        <div className={styles.title}>
          {title} 
          <br />
          <span><span>Published:</span>{publishedAt} <span><FiTrendingUp /></span> </span>
        </div>
      </div>
  );
}
export default SidebarNews;