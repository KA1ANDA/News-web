import React from 'react';
import styles from './block.module.scss';


const TeslaNewsBlock = ({image,title,description}) => {
  return (
    <div className={styles.block}>
      <div className={styles.image}>
       <img src={image} />
       <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  );
}
export default TeslaNewsBlock;