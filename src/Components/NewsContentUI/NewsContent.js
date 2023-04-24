import React from 'react';
import styles from './newsContent.module.scss'
import { useSelector } from 'react-redux';

const Status = () => {

  const {content} = useSelector(state => state.newsContentSlice)

  return (
    <div className={styles.content}>
      <div>
        <h2 className={styles.title}>Description</h2>
      </div>
      <div className={styles.description}>
        {content}
      </div>
    </div>
  );
}
export default Status;