import React from 'react';
import styles from './block.module.scss';
import { useDispatch } from 'react-redux';
import { addContent } from '../../Redux/newsContentSlice';
import {FiTrendingUp} from 'react-icons/fi'



const TeslaNewsBlock = ({image,title,publishedAt,description,url}) => {

  const dispatch = useDispatch()
  const newsContent = () => dispatch(addContent(description))

  return (
      <div onClick={newsContent} className={styles.block}>
        <div>
        <img src={image} />
        </div>
        <a href={url}>
          <div className={styles.title}>
            {title} 
            <br />
            <span><span>Published:</span>{publishedAt} <span><FiTrendingUp /></span></span>
          </div>
        </a>
      </div>
  );
}
export default TeslaNewsBlock;