import React from 'react';
import styles from './newsContent.module.scss'
import { useSelector } from 'react-redux';
import { useGetEveryTeslaNewsQuery } from '../../Redux/ApiNews';

const Status = () => {

  const {content} = useSelector(state => state.newsContentSlice)
  const {data=[]} = useGetEveryTeslaNewsQuery()

  return (
    <div className={styles.content}>
      <div>
        <h2 className={styles.title}>Description</h2>
      </div>
      {data.articles && 
        <div className={styles.description}>
        { content ? content : data.articles[1].description }
        </div>
    }
    </div>
  );
}
export default Status;