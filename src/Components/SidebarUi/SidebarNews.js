import React from 'react';
import styles from './sidebarNews.module.scss';


const SidebarNews = ({image,title,publishedAt}) => {
  return (
      <div className={styles.block}>
        <div>
        <img src={image} />
        </div>
        <div className={styles.title}>
          {title} 
          <br />
          <span>Published:{publishedAt}</span>
        </div>
      </div>
  );
}
export default SidebarNews;