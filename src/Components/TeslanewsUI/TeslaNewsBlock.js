import React from 'react';
import styles from './block.module.scss';


const TeslaNewsBlock = ({image,title,description,publishedAt}) => {
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
export default TeslaNewsBlock;