import React from 'react';
import styles from './sidebar.module.scss'
import { useGetEveryTeslaNewsQuery, useGetTopHeadlinesQuery } from '../../Redux/ApiNews';
import SidebarNews from './SidebarNews';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const {data=[],isLoading,error} = useGetTopHeadlinesQuery()

  return (
    <div className={styles.sidebar}>
      {data.articles && data.articles.map((item) => item.urlToImage && <SidebarNews
      image={item.urlToImage}
      title={item.title}
      publishedAt={item.publishedAt}/>)}

    </div>
  );
}
export default Sidebar;
