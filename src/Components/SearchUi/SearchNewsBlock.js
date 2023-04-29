import React from 'react';
import styles from './searchNewsBlock.module.scss';
import {FiTrendingUp} from 'react-icons/fi';


const SearchNewsBlock = ({image,title,publishedAt}) => {

  return (
    <div  className={styles.block}>
        <div>
        <img src={image} />
        </div>
        <div className={styles.title}>
          {title} 
          <br />
          <span><span>Published:</span>{publishedAt} <span><FiTrendingUp /></span></span>
        </div>
      </div>
  );
}
export default SearchNewsBlock;