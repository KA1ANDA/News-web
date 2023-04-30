import React from 'react';
import styles from './sidebar.module.scss'
import { useGetEveryTeslaNewsQuery, useGetTopHeadlinesQuery } from '../../Redux/ApiNews';
import SidebarNews from './SidebarNews';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const {pageSizeSidebar} = useSelector (state => state.newsSlice)

  const {data=[],isLoading,error} = useGetTopHeadlinesQuery(pageSizeSidebar)
  

  return (
    <div className={styles.sidebar}>
      {data.articles && data.articles.map((item) => item.urlToImage && <SidebarNews
      image={item.urlToImage}
      title={item.title}
      publishedAt={item.publishedAt}
      url={item.url}/>)}

    </div>
  );
}
export default Sidebar;
