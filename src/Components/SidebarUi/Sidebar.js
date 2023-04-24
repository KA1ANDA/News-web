import React from 'react';
import styles from './sidebar.module.scss'
import { useGetEveryTeslaNewsQuery } from '../../Redux/ApiNews';
import SidebarNews from './SidebarNews';

const Sidebar = () => {
  const {data=[],isLoading,error} = useGetEveryTeslaNewsQuery()

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
