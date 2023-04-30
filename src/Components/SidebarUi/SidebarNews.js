import React from 'react';
import styles from './sidebarNews.module.scss';
import {FiTrendingUp} from 'react-icons/fi'


const SidebarNews = ({image,title,publishedAt,url}) => {
  return (
      <div className={styles.block}>
        <a href={url}>
          <div className={styles.imgdiv}>
          <img src={image} />
          </div>
          <div className={styles.title}>
            {title} 
            <br />
            <span><span>Published:</span>{publishedAt} <span><FiTrendingUp /></span> </span>
          </div>
        </a>
      </div>
  );
}
export default SidebarNews;